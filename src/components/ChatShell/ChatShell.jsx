import MessageList from './MessageList'
import ChatForm from './ChatForm'
import axios from 'axios'
import { useContext, useEffect, useRef, useState } from 'react'
import { getAllMessages, setMessage } from '@/lib/user'
import { useSession } from 'next-auth/react'
import { MessageContext } from '@/context/MessageContext'

export default function ChatShell() {
  const { chats, setChats, addMessage } = useContext(MessageContext)
  const { data: session } = useSession()
  const [response, setResponse] = useState('')
  const [loader, setLoader] = useState(false)
  const responseRef = useRef(response)
  // const [id, setId] = useState(null);
  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL
  // console.log(baseURL)

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

  const sendChat = async () => {
    const chats = await getAllMessages()
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
    })
    stream.onmessage = (data) => {
      responseRef.current = responseRef.current + data.data
      console.log(responseRef.current)
    }

    stream.onerror = (error) => {
      console.log(error)
      console.log(responseRef.current)
      console.log('stream closed')
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
