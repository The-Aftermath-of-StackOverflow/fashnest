import axios from 'axios'

export const getUser = async (session) => {
    let user = await axios.get('/api/auth', {
        headers: {
            email: session.user.email
        }
    })
    if(!user) {
        user = await axios.post('/api/auth', {
            body: {
                email: session.user.email,
                name: session.user.name,
                image_url: session.user.image_url
            }
        })
    }
    return user;
}