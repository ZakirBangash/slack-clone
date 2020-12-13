import React, { useEffect } from "react";
import "./SideNavRow.css";
import db from "./firebase";


const SideNavRow = ({ Icon, title,addChannelOption,id }) => {
      console.log(id)
const addChannel = () => {
    const addChannel = prompt("Enter Channel You want to add");
    if(addChannel){
       db.collection("Room").add({
         name: addChannel
       })

    }

    
}

const selectChannel = () => {
  alert(id)
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
