import axios from 'axios'

export const getUser = async (session) => {
  let user = await axios.get('/api/auth', {
    headers: {
      email: session.user.email,
    },
  })
  user = user.data.data
  if (!user.length) {
    user = await axios.post('/api/auth', {
      email: session.user.email,
      name: session.user.name,
      image_url: session.user.image,
    })
    console.log(user)
  }
  return user
}

export const getAllMessages = async () => {
  const lastUpdated = localStorage.getItem('lastUpdated')
    ? new Date(localStorage.getItem('lastUpdated')).getSeconds()
    : 0
  const latestTime = new Date().getSeconds()
  if (latestTime - lastUpdated > 7200)
    localStorage.setItem('chats', JSON.stringify({ chats: [] }))
  console.log(latestTime - lastUpdated)
  const messages = localStorage.getItem('chats')
    ? await JSON.parse(localStorage.getItem('chats')).chats
    : []
  // console.log(messages)
  return messages
}

export const setMessage = async (message, type) => {
  const messages = await getAllMessages()
  const newMessage = {
    message: message,
    type: type,
    time: new Date().getTime(),
  }
  const newMessages = {
    chats: [newMessage, ...messages],
  }
  localStorage.setItem('chats', JSON.stringify(newMessages))
  localStorage.setItem('lastUpdated', new Date().getTime())
}

export const removeMessage = async () => {
  localStorage.removeItem('chats')
  localStorage.removeItem('lastUpdated')
}
