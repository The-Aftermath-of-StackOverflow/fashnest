import Image from 'next/image'
import SignIn from '@/components/SignIn'
import fashionImg from '@/assets/fashion.png'
import Layout from '@/components/Layout'
import { getSession } from 'next-auth/react'

export default function Home() {

  return (
    <Layout>
      <div className="flex gap-4 my-4 justify-between">
        <SignIn />
        <div className="w-3/4 grow">
          <Image src={fashionImg} className="w-full" />
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    }
  }

  return {
    props: { session }
  }
}