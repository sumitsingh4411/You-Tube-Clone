import React,{useState} from 'react'
import "./Header.css"
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
function Header() {
    const[inputsearch,setinputsearch]=useState('');
    return (
        <div className="header">
             <div className="header_left">
            <MenuIcon/>
            <Link className="link" to="/">
            <img
            className="header_logo"
                src="https://i.insider.com/59a59a8d79bbfd1d008b601a?width=1200&format=jpeg"
                alt="youtube logo"
            />
            </Link>
            </div>
            <div className="header_middle">
            <input value={inputsearch}
            onChange={e => setinputsearch(e.target.value)}
             placeholder="search" type="text"/>
             <Link to={`/search/${inputsearch}`}>
            <SearchIcon className="header_input"/>
            </Link>
            </div>
            <div className="header_right">
            <VideoCallIcon className="header_icon"/>
            <AppsIcon className="header_icon"/>
            <NotificationsIcon className="header_icon"/>
            <Avatar
                alt="sumit singh"
            />
            </div>
        </div>
    )
}

export default Header
