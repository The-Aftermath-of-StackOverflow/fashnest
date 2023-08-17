import { useSession, getSession } from 'next-auth/react'
import { getUser } from '@/lib/user'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Layout from '@/components/Layout'
import ChatShell from '@/components/ChatShell/ChatShell'

const secret = process.env.NEXTAUTH_SECRET

export default function Dashboard() {
  const { data: session } = useSession()
  const [user, setUser] = useState()

  const router = useRouter()

  const GetUser = async () => {
    const user = await getUser(session)
    setUser(user)
  }

  useEffect(() => {
    GetUser()
    // GetToken();
  }, [])

  return (
    <Layout>
      <ChatShell />
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

  return {
    props: { session },
  }
}
