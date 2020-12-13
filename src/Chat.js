import React, { useEffect, useState } from 'react'
import './Chat.css'
import { useParams } from 'react-router-dom'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from "./firebase";
import {Message} from './Message'

export const Chat = () => {

    const [RoomDetail, setRoomDetail] = useState(null);
    const [roomMessages, setroomMessages] = useState()
    const {slug} = useParams();

    useEffect(() => {
        if(slug){
            db.collection("Room").doc(slug).onSnapshot((snapshot) => {
                setRoomDetail(snapshot.data());
              });
        }

        db.collection("Room").doc(slug).collection("messages").orderBy('timestamp','asc').onSnapshot(
          snapshot =>  setroomMessages(snapshot.docs.map(doc => doc.data()))
        )

       
      }, [slug]);
    

      console.log(roomMessages)
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4>#{RoomDetail?.name}</h4>
                    <StarBorderOutlinedIcon />
                </div>

                <div className="chat__headerRight">
                        <InfoOutlinedIcon /> 
                         Detail
                </div>
            </div>
            <div className="chat__messages">
                {roomMessages?.map(({message,user,timestamp,userImage}) => (
                    <Message message={message}
                        user={user}
                        timestamp={timestamp}
                        userImage={userImage}


                    />
                ))}
            </div>
        </div>
    )
}
