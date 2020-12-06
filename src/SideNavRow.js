import React from 'react'
import './SideNavRow.css'

const SideNavRow = ({Icon,title}) => {
    return (
        <div className="sideNavRow">
            {Icon && <Icon className="sideNavRow__icon" />}
    {Icon ? <h5 >{title}</h5> : <h5 className="sideNavRow__channel"><span className="sideNavRow__hash">#</span> {title}</h5>}
        </div>
    )
}

export default SideNavRow
