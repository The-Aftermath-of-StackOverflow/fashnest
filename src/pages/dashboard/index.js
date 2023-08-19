import { useSession, getSession } from 'next-auth/react'
import { getUser } from '@/lib/user'
import { MessageProvider } from '@/context/MessageContext'
import { useState, useEffect } from 'react'
import Layout from '@/components/Layout'
import ChatShell from '@/components/ChatShell/ChatShell'
import Cookies from 'cookies'

export default function Dashboard() {
  const { data: session } = useSession()
  const [user, setUser] = useState()

  const GetMetadata = async () => {
    await getUser(session)
    const sessionUser = session.user
    setUser(sessionUser)
  }

  useEffect(() => {
    GetMetadata()
  }, [])

  return (
    <Layout>
      <MessageProvider>
        <ChatShell />
      </MessageProvider>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (!session || !Object.keys(session.user).length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const cookies = new Cookies(context.req, context.res)
  cookies.set('auth', session.jwtToken, {
    httpOnly: true,
    sameSite: 'lax',
  })

  return {
    props: { session },
  }
}
