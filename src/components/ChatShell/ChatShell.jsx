import MessageList from './MessageList'
import ChatForm from './ChatForm'
import axios from 'axios'
import {useContext} from 'react'
import { getAllMessages, setMessage } from '@/lib/user'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { MessageContext } from '@/context/MessageContext';
import Cookies from 'cookies'
const baseURL = 'http://192.168.20.203:8000/chat';

export default function ChatShell() {
  const { chats, setChats, addMessage } = useContext(MessageContext)
  const { data: session } = useSession()
  const [loader, setLoader] = useState(false)

  const setInitialMessage = async (message, type) => {
    const previousMessages = await getAllMessages()
    if (!previousMessages.length) {
      await setMessage(message, type)
    }
    setChats(await getAllMessages())
  }

  useEffect(() => {
    const initialMessage = `Hi, ${session.user.name} Welcome to FashNet. Please describe your outfit choice.`
    setInitialMessage(initialMessage, 'bot')
  }, [])

  
  
  const sendChat = async ()=>{
    const chats = await getAllMessages()
    const messages = chats.reverse().map((chat)=>{
      return {
        value: chat.message,
        isUser: chat.type === 'user'
      }
    });
    // const jwt = Cookies
    const request = await axios.post(`${baseURL}/gen`, {messages}, {withCredentials: true});
    console.log(request.data);
  }

  const startStream = async()=>{
    const stream = new EventSource(`${baseURL}/stream`)
  }

  return (
    <div className="bg-transparent text-light m-4 flex flex-col gap-4 justify-end h-full">
      <MessageList chats={chats} loader={loader} />
      <ChatForm sendChat={sendChat} />
    </div>
  )
}
