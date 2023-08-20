import sendIcon from '@/assets/send-icon.png'
import { MessageContext } from '@/context/MessageContext'
import { setMessage } from '@/lib/user'
import Image from 'next/image'
import { useState, useContext } from 'react'

export default function ChatForm({ sendChat }) {
  const [inputValue, setInputValue] = useState('')
  const { chats, addMessage } = useContext(MessageContext)


  const handleSend = async (e) => {
    const newMessageObject = {
      message: inputValue,
      type: 'user',
      time: new Date().getTime(),
    }
    setInputValue('')
    await addMessage(newMessageObject);
    console.log(chats)
    sendChat();
  }

  return (
    <div className="flex border border-primary rounded-md p-2 gap-2 focus-within:border-tertiary">
      <input
        type="text"
        className="w-full bg-transparent text-light outline-none text-lg mx-4"
        placeholder="type a message"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) =>
          e.key === 'Enter' ? inputValue.length && handleSend(e) : {}
        }
      />
      <Image
        src={sendIcon}
        className="m-auto h-6 w-6 text-white"
        alt="Add Attachment"
        onClick={(e) => inputValue.length && handleSend(e)}
      />
    </div>
  )
}
