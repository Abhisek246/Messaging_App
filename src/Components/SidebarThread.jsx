import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './SidebarThread.css'



function SidebarThread({name, id, chatDetail, chatMess, changeTheme}) {
  let [mess, setMess] = useState([]);
  let [lastChat, setLastChat] = useState("");
  let [unread, setUnread] = useState({number: "", isRead: false});            //implementing feature of unread messages 
  let [time, setTime] = useState("");

    const API2 = "https://devapi.beyondchats.com/api/get_chat_messages"    

    async function allChats(){
      let result = await fetch(`${API2}?chat_id=${id}`);                 //fetching data for individual person using their id
      let chats = await result.json();
      let array = chats.data;
      chatDetail(name, id);                 //passing information of name and id to the parent component 
      setUnread({number: "", isRead: false});        

      {for (let index = 0; index < array.length; index++) {     
        const element = array[index];
        mess.push(element.message);
        setMess([...mess])
      }}

      chatMess(mess);               //passing information of messages to the parent component 
      
    }
    
    useEffect(()=>{
      async function allChat(){       //operation for displaying last message on chat list 
        let result = await fetch(`${API2}?chat_id=${id}`);
        let chats = await result.json();
        let array = chats.data;
        setUnread({number: array.length, isRead: true});
        let mess = array[array.length-1];
        let lastChat = mess.message.slice(0,66);
        setLastChat(lastChat);

        {for (let index = 0; index < array.length; index++) {         //operation to show time of creation of message
          const element = array[index];
          const createdAt = element.created_at.slice(0,10);
          setTime(createdAt);
        }}
    };
    allChat();
}, [])

  return (
    <div className={changeTheme ? 'sidebarThread-night' :'sidebarThread'} onClick={allChats}>
      <Avatar/>
      <div className="sidebarThread-details">
        <div className={changeTheme ? 'detailsTop-night' :'details-top'}>
          <h3>{name}</h3>
          <p className="sidebarThread-timeStamp">{time}</p>
        </div>
        <div className="details-bottom">
          <p>{lastChat}...</p>
          {unread.isRead && <span className='unread'>{unread.number}</span>}
        </div>
      </div>
    </div>
  )
}

export default SidebarThread