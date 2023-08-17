import { useSession, signIn } from 'next-auth/react'
import Link from 'next/link'

export default function SignIn() {
  return (
    <div className="relative">
      <div className="relative container m-auto text-gray-500">
        <div className="m-auto">
          <div className="rounded-xl bg-transparent">
            <div className="py-6 sm:py-16">
              <div className="space-y-4">
                <h2 className="mb-8 text-5xl text-white font-bold leading-relaxed font-Prism">
                  Sign in to unlock the best of FashNet
                </h2>
              </div>
              <div className="mt-16 grid space-y-4">
                <button
                  className="group h-12 px-6 border-2 w-fit border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-secondary active:bg-secondary"
                  onClick={() => signIn('google')}
                >
                  <div className="flex items-center space-x-4 justify-center">
                    <img
                      src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                      className="w-5"
                      alt="google logo"
                    />
                    <span className="block w-max font-semibold tracking-wide text-white text-sm transition duration-300 group-hover:text-gray-300 sm:text-base">
                      Continue with Google
                    </span>
                  </div>
                </button>
              </div>
              <p class="mt-6 text-white">
                Are you Admin?{' '}
                <a
                  href="/admin"
                  class="text-light transition duration-150 ease-in-out hover:text-primary-600 focus:text-secondary active:text-primary"
                >
                  Login as Admin
                </a>
              </p>

              <div className="mt-32 space-y-4 text-gray-600 text-center sm:-mb-8">
                <p className="text-xs">
                  By proceeding, you agree to our{' '}
                  <a href="#" className="underline">
                    Terms of Use
                  </a>{' '}
                  and confirm you have read our{' '}
                  <a href="#" className="underline">
                    Privacy and Cookie Statement
                  </a>
                  .
                </p>
                <p className="text-xs">
                  This site is protected by reCAPTCHA and the{' '}
                  <a href="#" className="underline">
                    Google Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="#" className="underline">
                    Terms of Service
                  </a>{' '}
                  apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
