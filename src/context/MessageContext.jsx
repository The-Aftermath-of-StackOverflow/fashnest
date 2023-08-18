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

  return (
    <MessageContext.Provider value={{ chats, setChats, addMessage }}>
      {children}
    </MessageContext.Provider>
  )
}

export { MessageProvider, MessageContext }
