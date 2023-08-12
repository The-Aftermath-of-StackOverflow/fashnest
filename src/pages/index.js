import Image from 'next/image'
import SignIn from '@/components/SignIn'
import { Inter } from 'next/font/google'
import fashionImg from '@/assets/fashion.png'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex flex-col max-w-screen-xl m-auto h-screen p-4 items-center ${inter.className}`}
    >
      <Navbar />
      <div className='flex gap-4 my-4 justify-between'>
          <SignIn />
          <div className='w-3/4 grow'>
            <Image src={fashionImg} className='w-full' />
          </div>
      </div>
    </main>
  )
}
