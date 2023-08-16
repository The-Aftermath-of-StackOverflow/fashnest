import axios from 'axios'

export const getUser = async (session) => {
    // console.log(session.user.email)
    let user = await axios.get('/api/auth', {
        headers: {
            email: session.user.email
        }
    })
    user = user.data.data
    if(!user.length) {
        console.log("sdhsbf")
        user = await axios.post('/api/auth', {
            email: session.user.email,
            name: session.user.name,
            image_url: session.user.image
        })
        console.log(user)
    }
    return user;
}