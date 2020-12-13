import React from 'react'
import './Chat.css'
import { useParams } from 'react-router-dom'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
export const Chat = () => {
    const {slug} = useParams();
    console.log(slug)
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4>#general</h4>
                    <StarBorderOutlinedIcon />
                </div>

                <div className="chat__headerRight">
                        <InfoOutlinedIcon /> 
                         Detail
                </div>
            </div>
        </div>
    )
}
