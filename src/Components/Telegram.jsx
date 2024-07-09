import React, { useState } from 'react'
import Sidebar from './Sidebar'
import './Telegram.css'
import Thread from './Thread'
import SidebarMenu from './SidebarMenu';

function Telegram() {
  let [detail, setDetail] = useState([]);
  let [mess, setMess] = useState([]);
  let [menu, setMenu] = useState(false);
  let [theme, setTheme] = useState(false);

  let chatDetail = (name, id)=>{     //updating state variable to store messages
    setDetail([name, id])
  }

  let chatMess = (mess)=>{          //updating state variable to store messages
    setMess(mess);  
  };

  let slidingMenu = ()=>{           //updating state variable for showing sliding Profile detail 
    setMenu(true);
  }

  let closeMenu = ()=>{             //updating state variable for hiding sliding Profile detail 
    setMenu(false)
  }

  let mode = (value)=>{             //updating state variable for implementing dark mode
    setTheme(value);
  }


  return (
    <div className='telegram'>
      {menu && <SidebarMenu closeMenu={closeMenu} mode={mode} changeTheme={theme}/>}
      
      <Sidebar chatDetail={chatDetail} chatMess={chatMess} slidingMenu={slidingMenu} changeTheme={theme}/>
      <Thread name={detail[0]} messages={mess} changeTheme={theme}/>
    </div>
  )
}

export default Telegram