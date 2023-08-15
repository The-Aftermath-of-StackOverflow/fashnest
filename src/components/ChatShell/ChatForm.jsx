import React from 'react'

export default function ChatForm() {
  return (
    <div id="chat-form">
        <img src={require("../../images/icons/attachment-logo.svg")} alt="Add Attachment" />
        <input type="text" placeholder="type a message" />
    </div>
  )
}
