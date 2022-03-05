import React from 'react'
import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css'


const App = props => {
  if (!localStorage.getItem('username')) return <LoginForm />;


    const projectID = 'd3b4150e-00bb-472e-9aa1-4bcb698cc2ce';
  
    return (
    <ChatEngine 
        height= '100vh'
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  )
}

export default App;