import React, { useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SidebarThread from './SidebarThread';
import './Sidebar.css'
import { useState } from 'react';


function Sidebar({chatDetail, chatMess, slidingMenu, changeTheme}) {

  let [title, setTitle] = useState([{name:"", id:""}]);

  const API1 = "https://devapi.beyondchats.com/api/get_all_chats?page=1"   //fetching data of all chats

  useEffect(()=>{                           //operation to display the list of chats on first render
    async function names(){
      let result = await fetch(API1);
      let chats = await result.json();
      let array = chats.data.data;
      {for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const id = element.id;

        if(element.creator.name === null){
           element.creator.name = "Rohit";
        };
          setTitle((arr)=> {          //storing name and id of creators to fetch their messages
            return [...arr, {name: element.creator.name, id: id}]
          });
      }}
    };
    names();
  }, []);
  

  return (
   <div className={changeTheme ? 'sidebar-night' :'sidebar'}>
      <div className={changeTheme ? 'sidebarHeader-night' :'sidebar-header'}> 
        <div onClick={slidingMenu}>
          <MenuIcon className={changeTheme ? 'sidebarMenu-night' :'sidebar-menu'}/>
        </div>       
        <div className={changeTheme ? 'sidebarSearch-night' :'sidebar-search'}>
            <input className={changeTheme ? 'searchInput-night' :'search-input'} placeholder='Search'/>
        </div>
        <div className='search'>
          <SearchIcon className='searchIcon'/>
        </div>
      </div>     
      <div className="sidebar-thread">
        {title.map((element, idx)=>(
          <SidebarThread name={element.name} key={idx} id={element.id} chatDetail={chatDetail} chatMess={chatMess} changeTheme={changeTheme}/>
        ))}
          
      </div>
    </div>

  )
}

export default Sidebar