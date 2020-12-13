import React,{useState,useEffect} from 'react'
import './SideNav.css'
import SideNavRow from './SideNavRow'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from "./firebase";

const SideNav = () => {
        const [channel, setChannel] = useState([])

    useEffect(() => {
        db.collection("Room").onSnapshot((snapshot) => {
          // every time a new post added,this code fires
          setChannel(snapshot.docs.map((doc) =>({
            id: doc.id,
            name: doc.data().name
          })));
    
        });
      }, []);

      console.log(channel)




    return (
        <div className="sideNav">
            <div className="sideNav__header">
                <div className="sideNav__info">
                <h4>UET Mardan</h4>
                <h6>
                    <FiberManualRecordIcon />
                     Zakir Bangash    
                </h6>
                </div>
               <CreateIcon />
            </div>
            <SideNavRow Icon={InsertCommentIcon} title="Threads" />
            <SideNavRow Icon={InboxIcon} title="Mentions & reactions" />
            <SideNavRow Icon={DraftsIcon} title="Saved items" />
            <SideNavRow Icon={BookmarkBorderIcon} title="Channel browser" />
            <SideNavRow Icon={PeopleAltIcon} title="People & user groups" />
            <SideNavRow  title="Apps" />
            <SideNavRow Icon={FileCopyIcon} title="File browser" />
            <SideNavRow Icon={ExpandLessIcon} title="Show less" />
            <hr/>
            <SideNavRow Icon={ExpandMoreIcon} title="Channels" />
            <hr/>
            <SideNavRow Icon={AddIcon} addChannelOption  title="Add Channel" />

            {channel.map(channel => (
                <SideNavRow title={channel.name} id={channel.id} />
            ))}
            
        </div>
    )
}

export default SideNav
