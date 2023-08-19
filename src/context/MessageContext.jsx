import React, { createContext, useState } from 'react'

// Create a context
const MessageContext = createContext()

// Create a provider component
const MessageProvider = ({ children }) => {
  const [chats, setChats] = useState([])

  const addMessage = (messageObject) => {
    const newChats = [messageObject, ...chats]
    setChats(newChats)
  }

  const addAnimateMessage = ({value}) =>{
    const cpyChats = [...chats];
    cpyChats[0].message = cpyChats[0].message + value;
    setChats(cpyChats);
  }

  return (
    <MessageContext.Provider value={{ chats, setChats, addMessage, addAnimateMessage }}>
      {children}
    </MessageContext.Provider>
  )
}

export { MessageProvider, MessageContext }
