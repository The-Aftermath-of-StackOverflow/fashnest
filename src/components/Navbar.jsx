import logo from '@/assets/fashnet-logo.png'
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'

export default function Navbar({ provider }) {
  const { data: session } = useSession()
  return (
    <div className="flex w-full justify-between">
      <Image src={logo} loading="lazy" className="w-60" />
      {provider !== 'none' && (
        <button onClick={() => (session ? signOut() : signIn(provider))}>
          <div className="relative inline-flex items-center px-10 py-2 overflow-hidden text-sm font-medium text-light border-2 border-pale-blue rounded-full hover:text-white group hover:bg-pale-blue">
            <span className="absolute left-0 block w-full h-0 transition-all bg-pale-blue opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-1 ease">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative">
              {session ? 'Sign Out' : 'Sign In'}{' '}
            </span>
          </div>
        </button>
      )}
    </div>
  )
}
