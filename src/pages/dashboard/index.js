import { useSession, getSession } from "next-auth/react"
import { getUser } from "@/lib/user"
import { useRouter } from 'next/router'
import {useState, useEffect} from 'react'
import Navbar from "@/components/Navbar"
import Layout from "@/components/Layout"

export default function Dashboard() {
  const {data: session} = useSession()
  const [validSession, setValidSession] = useState(true);
  const [user, setUser] = useState()

  const router = useRouter()
  // console.log(session)

  useEffect(() => {
    if(!session) router.push('/')
    // const user = getUser(session);
    // setUser(user)
  }, [])
  
    return (
    <Layout>
        
        
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { session }
  }
}