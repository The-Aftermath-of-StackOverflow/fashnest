import sendIcon from '@/assets/send-icon.png'
import Image from 'next/image'

export default function ChatForm() {
  return (
    <div className="flex border border-primary rounded-md p-2 gap-2 focus-within:border-tertiary">
      <input
        type="text"
        className="w-full bg-transparent text-light outline-none text-lg mx-4"
        placeholder="type a message"
      />
      <Image
        src={sendIcon}
        className="m-auto h-6 w-6 text-white"
        alt="Add Attachment"
      />
    </div>
  )
}
