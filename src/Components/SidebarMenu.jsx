import React, { useState } from 'react'
import './SidebarMenu.css'
import profile from './../assets/profilepic.png'
import CloseIcon from '@mui/icons-material/Close';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CallIcon from '@mui/icons-material/Call';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SettingsIcon from '@mui/icons-material/Settings';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Switch from '@mui/material/Switch';


function SidebarMenu({closeMenu, mode, changeTheme}) {      
  let [theme, setTheme] = useState(true);

  let changeMode = ()=>{    //condition to make the sidebar Profile detail functional
    setTheme(!theme);
    mode(theme);
  }

  return (
    <div className={changeTheme ? 'sidebarMenu-night' :'sidebarMenu'}>
        <div className='profile'>
            <div>
                <div className='imgContainer'><img src={profile} className='profileImg'/></div>
                <div className={changeTheme ? 'profileName-night' :'profileName'}>Abhisek Biswas</div>
            </div>
            <div onClick={closeMenu} className={changeTheme ? 'closeIconContainer-night' :'closeIconContainer'}><CloseIcon/></div>
        </div>
        <div className={changeTheme ? 'sidebarMenuItems-night' :'sidebarMenuItems'}>
          <div><PeopleOutlineIcon className={changeTheme ? 'itemIcon-night' :'itemIcon'}/>New Group</div>
          <div><VolumeUpIcon className={changeTheme ? 'itemIcon-night' :'itemIcon'}/>New Channel</div>
          <div><AccountCircleIcon className={changeTheme ? 'itemIcon-night' :'itemIcon'}/>Contacts</div>
          <div><CallIcon className={changeTheme ? 'itemIcon-night' :'itemIcon'}/>Calls</div>
          <div><BookmarkBorderIcon className={changeTheme ? 'itemIcon-night' :'itemIcon'}/>Saved Messages</div>
          <div><SettingsIcon className={changeTheme ? 'itemIcon-night' :'itemIcon'}/>Settings</div>
          <div><DarkModeIcon className={changeTheme ? 'itemIcon-night' :'itemIcon'}/>Night Mode<Switch className='darkModeIcon' onClick={changeMode}/></div>
        </div>
    </div>
  )
}

export default SidebarMenu