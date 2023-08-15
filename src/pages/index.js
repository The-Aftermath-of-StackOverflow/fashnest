import Image from 'next/image'
import SignIn from '@/components/SignIn'
import { Inter } from 'next/font/google'
import fashionImg from '@/assets/fashion.png'
import Navbar from '@/components/Navbar'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home({session}) {
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
