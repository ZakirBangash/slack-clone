import React, { useEffect } from "react";
import "./SideNavRow.css";
import db from "./firebase";
import { useNavigate } from "react-router-dom";


const SideNavRow = ({ Icon, title,addChannelOption,id }) => {

  let navigate = useNavigate();
      
const addChannel = () => {
    const addChannel = prompt("Enter Channel You want to add");
    if(addChannel){
       db.collection("Room").add({
         name: addChannel
       })

    }

    
}

const selectChannel = () => {
  if(id){
    navigate(`/room/${id}`);
  }else{
    navigate(title)
  }
}
  return (
    <div className="sideNavRow" onClick={addChannelOption ? addChannel : selectChannel}>
      {/* {Icon && <Icon className="sideNavRow__icon" />} */}
      {Icon ? (
          <>
          {/* <Icon className="sideNavRow__icon" /> */} 
        <h5>{title}</h5>
        </>
      ) : (
        <h5 className="sideNavRow__channel">
          <span className="sideNavRow__hash">#</span> {title}
        </h5>
      )}
    </div>
  );
};

export default SideNavRow;
