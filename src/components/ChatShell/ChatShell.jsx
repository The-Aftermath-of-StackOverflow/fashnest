import MessageList from './MessageList'
import ChatForm from './ChatForm'

export default function ChatShell() {
  return (
    <div className='bg-transparent text-light overflow-y-scroll max-h-90'>
        <MessageList />
        <ChatForm />
    </div>
  )
}
