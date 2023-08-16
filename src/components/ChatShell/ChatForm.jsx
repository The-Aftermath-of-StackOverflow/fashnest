import attachmentLogo from '@/assets/attachment-logo.png'
import Image from 'next/image'

export default function ChatForm() {
  return (
    <div id="chat-form">
        <Image src={attachmentLogo} alt="Add Attachment" />
        <input type="text" placeholder="type a message" />
    </div>
  )
}
