import { useSession, signIn, signOut } from 'next-auth/react'
import axios from 'axios'

export default function Component() {
  const { data: session } = useSession()
  const userSignIn = async () => {
    // console.log("afgrgewg")
    await signIn()
    const response = await axios.get('http://localhost:3000/api/auth', {
      method: 'GET',
      headers: {
        email: session.user.email,
      },
    })
    console.log(response)
  }

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={async () => await userSignIn()}>Sign in</button>
    </>
  )
}
