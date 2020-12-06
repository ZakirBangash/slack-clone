import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './Header.css'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const Header = () => {
    return (
        <div className="header">
           <div className="header__left">
           <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
           <AccessTimeIcon />
           </div>
           <div className="header__middle">
               <SearchIcon />
               <input type="text" placeholder="Search UET Mardan"/>
           </div>
           <div className="header__right">
               <HelpOutlineIcon />
           </div>
            
        </div>
    )
}

export default Header
