import { getAllMessages, setMessage } from '@/lib/user'
import Loader from '../Loader'
import { MessageContext } from '@/context/MessageContext'
import { useState, useEffect, useContext } from 'react'
import { useSession } from 'next-auth/react'

export default function MessageList({ chats, loader }) {
  const sendChat = async () => {}

  return (
    <div className="flex flex-col-reverse overflow-auto max-h-77 px-5 scroll-smooth">
      {loader && <Loader />}
      {chats?.map((value, index) => {
        const { message, type, time } = value
        const currentTime =
          new Date(time).toLocaleDateString() +
          ' ' +
          new Date(time).toLocaleTimeString()

        return (
          <div
            key={index}
            className={`flex mb-4  ${type == 'user' ? 'justify-end' : ''}`}
          >
            <div className={`flex flex-col`}>
              <div
                className={`max-w-4xl text-xl rounded text-center p-2 px-4 ${
                  type === 'bot'
                    ? 'text-black bg-pale-blue'
                    : 'bg-light text-primary'
                }`}
              >
                {message}
              </div>
              <div
                className={`text-sm ${
                  type == 'user' ? 'text-right' : 'text-left'
                }`}
              >
                {currentTime}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
