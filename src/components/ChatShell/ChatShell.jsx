import MessageList from './MessageList'
import ChatForm from './ChatForm'

export default function ChatShell() {
  return (
    <div className='bg-transparent text-light m-4 flex flex-col gap-4 justify-end h-full'>
        <MessageList />
        <ChatForm />
    </div>
  )
}
