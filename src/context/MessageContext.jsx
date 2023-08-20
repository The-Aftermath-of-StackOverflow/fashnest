import React, {createContext, useState} from 'react'

const MessageContext = createContext()

const MessageProvider = ({ children }) => {
  const [chats, setChats] = useState([]);

  const addMessage = (messageObject) => {
    setChats(currChats => [messageObject, ...currChats]);
  }

  const addAnimateMessage = ({ value }) => {
    setChats((chats)=> {
      const firstChat = chats[0];
      const allChats = chats.slice(1);
      firstChat.message = firstChat.message + value;
      return [firstChat, ...allChats];
    })
  }

  return (
    <MessageContext.Provider
      value={{ chats, addMessage, addAnimateMessage }}>
      {children}
    </MessageContext.Provider>
  )
}

export { MessageProvider, MessageContext }
