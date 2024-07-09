import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material'
import CallIcon from '@mui/icons-material/Call';
import SearchIcon from '@mui/icons-material/Search';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import MicNoneIcon from '@mui/icons-material/MicNone';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import React from 'react'
import Message from './Message';
import './Thread.css'


function Thread({name= 'Jack', messages, changeTheme}) {        //imported name and messages of individual creators from parent component

  return (
    <div className='thread'>
      <div className={changeTheme ? 'threadHeader-night' :'thread-header'}>
        <div className={changeTheme ? 'threadHeaderInfo-night' :'thread-header-info'}>
          <h4>{name}</h4>
          <h5>last seen recently</h5>
        </div>
        <div className="thread-header-icons">
          <IconButton><SearchIcon className='header-icons'/></IconButton>
          <IconButton><CallIcon className='header-icons'/></IconButton>
          <IconButton><MoreVertIcon className='header-icons'/></IconButton>
        </div>
      </div>
      <div className={changeTheme ? 'threadMessage-night' :'thread-message'}>
        <Message messages={messages} changeTheme={changeTheme}/>
      </div>
      <div className={changeTheme ? 'threadInput-night' :'thread-input'}>
        <form>
          <div className='thread-input-left'>
            <IconButton><AttachFileIcon className='thread-input-leftIcon'/></IconButton>
            <input type='text' placeholder='Write a message...'/>
          </div>
          <div className="thread-input-icons">
            <IconButton><SentimentSatisfiedAltIcon className={changeTheme ? 'threadInputRight-night' :''}/></IconButton>
            <IconButton><MicNoneIcon className={changeTheme ? 'threadInputRight-night' :''}/></IconButton>
          </div>
        </form>
      </div>
  </div>
  )
}

export default Thread