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
  }
  return user
}

export const getAllMessages = () => {
  const lastUpdated = parseInt(localStorage.getItem('lastUpdated'))
    ? new Date(parseInt(localStorage.getItem('lastUpdated'))).getTime()
    : 0

  const latestTime = new Date().getTime()
  if (latestTime - lastUpdated > 7200 * 1000)
    localStorage.setItem('chats', JSON.stringify({ chats: [] }))

  return localStorage.getItem('chats')
      ? JSON.parse(localStorage.getItem('chats')).chats
      : []
}

export const setMessage = (messageObject) => {
  const messages = getAllMessages()
  const newMessages = {
    chats: [messageObject, ...messages],
  }

  localStorage.setItem('chats', JSON.stringify(newMessages))
  localStorage.setItem('lastUpdated', new Date().getTime().toString())
}

export const removeMessage = () => {
  localStorage.removeItem('chats')
  localStorage.removeItem('lastUpdated')
}
