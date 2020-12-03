import React, {  useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons';
import axios from './axios'
import './Chat.css'
const Chat = ({messages}) => {
  const [input, setInput] = useState('')

  const sendMessage = async (e) =>{
    e.preventDefault();
   await axios.post('/messages/new',{
        message: input,
        name: "demo app",
        timestamp:new Date(),
        received: true,
    })
    setInput('')
  }

  

    return (
        <div className='chat'>
           <div className="chat__header">
               <Avatar />
               <div className="chat__headerInfo">
                   <h3>Room name</h3>
                   <p>Last seen at...</p>

               </div>
               <div className="chat__headerRight">
                  <IconButton>
                      <SearchOutlined />
                  </IconButton>
                  <IconButton>
                      <AttachFile />
                  </IconButton>
                  <IconButton>
                     <MoreVert />
                  </IconButton>
               </div>
           </div>
             
             <div className="chat__body">
             {messages.map((message) =>(
              <p className={`chat__message ${message.received && "chat__reciver"}`}>
                 <span className="chat__name">{message.name}</span>
                  {message.message}
                 <span className="chat__timestamp">
                     {message.timestamp}
                 </span>
                  </p>
             )
             )}
             

             
             </div>
             <div className="chat__footer">
                 <InsertEmoticon />
                 <form  action="">
                 <input value={input} onChange={(e)=> setInput(e.target.value)} type="text" placeholder='Type a messages'/>
                 <button onClick={sendMessage} type='submit'>send a messages</button>
                 </form>
                 <Mic />
             </div>
        </div>
    );
};

export default Chat;