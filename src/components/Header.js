import React, {useState} from 'react';
import './Header.css';
import logo from '../images/logo.png';
import profile from '../images/profile.jpg'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

function Header() {
    const [inputSearch, setInputSearch] = useState("");
    return (
        <div className="header">
        
           {/* Planning the header section */}
           <div className="header__left">
            <MenuIcon />
            <Link to="/">
            <img className="header__logo" src={logo}  alt="logo" />
            </Link>
            
           </div>
           <div className="header__input"> 
           <input onChange={(e) => setInputSearch(e.target.value)} 
             value={inputSearch} 
             type="text" 
             placeholder="Search"  />
             <Link to={`/search/${inputSearch}`}>
                <SearchIcon  className="header__inputButton"/>
             </Link>
            </div>
           <div className="header__right">
            <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon"/>
                <NotificationIcon className="header__icon"/>
                <Avatar
            src={profile} alt="profile picture" />  
           </div>
            
            
        </div>
    )
}

export default Header
