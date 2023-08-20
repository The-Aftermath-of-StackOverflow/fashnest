import MessageList from './MessageList'
import ChatForm from './ChatForm'
import axios from 'axios'
import { useContext, useEffect, useRef, useState } from 'react'
import { useSession } from 'next-auth/react'
import { MessageContext } from '@/context/MessageContext'

export default function ChatShell() {
  const { chats, addMessage, addAnimateMessage } = useContext(MessageContext)
  const { data: session } = useSession()
  const [response, setResponse] = useState('')
  const [loader, setLoader] = useState(false)
  const responseRef = useRef(response)
  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL

  useEffect(() => {
    const initialMessage = `Hi, ${session.user.name} Welcome to FashNet. Please describe your outfit choice.`
    addMessage({
      message: initialMessage,
      type: 'bot',
      time: new Date().getTime()
    });

  }, [])

  const sendChat = async () => {
    const messages = chats.reverse().map((chat) => {
      return {
        value: chat.message,
        isUser: chat.type === 'user',
      }
    })
    console.log(`${baseURL}/gen`)
    const request = await axios.post(
      `${baseURL}/gen`,
      { messages },
      { withCredentials: true }
    )
    console.log(request.data)
    // setId(request.data);
    await startStream(request.data)
  }

  const startStream = async (id) => {
    const stream = new EventSource(`${baseURL}/stream/${id}`, {
      withCredentials: true,
    });
    await addMessage({
      message: '',
      type: 'bot',
      time: new Date().getTime()
    });

    setLoader(true);
    stream.onmessage = (data) => {
      responseRef.current = responseRef.current + data.data
      addAnimateMessage({value:data.data});
    }

    stream.onerror = (error) => {
      console.log(error)
      setLoader(false);
      stream.close()
    }
  }

  return (
    <div className="bg-transparent text-light m-4 flex flex-col gap-4 justify-end h-full">
      <MessageList chats={chats} loader={loader} />
      <ChatForm sendChat={sendChat} />
    </div>
  )
}
