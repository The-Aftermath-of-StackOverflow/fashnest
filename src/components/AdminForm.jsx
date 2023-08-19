import { useEffect, useState } from 'react'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { twMerge } from 'tw-merge'
export default function AdminForm() {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' })
  const router = useRouter()
  useEffect(() => {
    const init = async () => {
      const { Input, initTE } = await import('tw-elements')
      initTE({ Input })
    }
    init()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await signIn('credentials', {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    })

    if (res.error === null) {
      router.push('/admin/dashboard')
    }
  }

  return (
    <div className="block rounded-lg bg-transparent text-light p-6">
      <form className="max-w-md m-auto">
        <div className="relative mb-6" data-te-input-wrapper-init>
          <input
            type="email"
            value={userInfo.email}
            className="peer block min-h-[auto] w-full rounded border border-secondary bg-transparent px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleInputEmail2"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, email: target.value })
            }
          />
          <label
            htmlFor="exampleInputEmail2"
            className="pointer-events-none absolute left-3 -top-1 mb-0 max-w-[90%] origin-[0_0] truncate pt-3 leading-[1.6] text-light transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-light peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
          >
            Email address
          </label>
        </div>

        <div className="relative mb-6" data-te-input-wrapper-init>
          <input
            type="password"
            value={userInfo.password}
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleInputPassword2"
            placeholder="Password"
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, password: target.value })
            }
          />
          <label
            htmlFor="exampleInputPassword2"
            className="pointer-events-none absolute left-3 -top-1 mb-0 max-w-[90%] origin-[0_0] truncate pt-3 leading-[1.6] text-light transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-light peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
          >
            Password
          </label>
        </div>
        <div className="flex">
          <button
            type="submit"
            className={twMerge(
              'inline-block rounded bg-tertiary px-6 pb-2 pt-2.5 max-w-xs m-auto font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary focus:bg-primary focus:outline-none focus:ring-0 active:bg-primary'
            )}
            data-te-ripple-init
            data-te-ripple-color="light"
            onClick={(e) => handleSubmit(e)}
          >
            Sign in
          </button>
        </div>
        <p className="mt-6 text-center text-white">
          Not an Admin?{' '}
          <Link href="/" passHref={true} legacyBehavior>
            <a className="text-light transition duration-150 ease-in-out hover:text-primary-600 focus:text-secondary active:text-primary">
              Login as User
            </a>
          </Link>
        </p>
      </form>
    </div>
  )
}
