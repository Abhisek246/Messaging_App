import React from 'react'
import './Message.css'

function Message({messages, changeTheme}) {             //rendering the individual chat page
  return (
    <div className='message'>
        {messages.map((el, idx)=>(
          <div className={changeTheme ? 'messageContent-night' :'message-content'} key={idx}>
          <p>{el}</p>
          </div>
        ))}
    </div>
  )
}

export default Message