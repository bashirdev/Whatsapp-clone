import React, { useEffect, useState } from 'react';
import Chat from './Chat';
import Sidebar from './Sidebar'
import Pusher from 'pusher-js'
import axios from './axios'
import './App.css';
const App = () => {
   const [messages, setMessages] = useState([])
  useEffect(()=>{

     axios.get('/messages/sync')
     .then(res=> {
       console.log(res.data);
       setMessages(res.data)
     })
  },[])

  useEffect(() => {
    const pusher = new Pusher('9dee0a36c822e6f109b8', {
      cluster: 'eu'
    });
  
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage)=> {
      alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage], {})
    });
    return ()=> {
      channel.unbind_all();
      channel.unsubscribe();
    }
  },[messages])
  
  console.log(messages);
  return (
    <div className='app'>
       <div className="app_body">
      <Sidebar />
      <Chat messages={messages} />
      </div>
    </div>
  );
};

export default App;
