import Layout from '@/components/Layout'
import DesignImg from '@/assets/create-design.png'
import Image from 'next/image'
import { getSession } from 'next-auth/react'
import { useEffect } from 'react'

export default function index() {
  useEffect(() => {
    const init = async () => {
      const { Input, initTE } = await import('tw-elements')
      initTE({ Input })
    }
    init()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Layout>
      <div className="flex gap-2 mt-8">
        <div className="w-1/2">
          <h2 className="mb-8 text-5xl text-center font-bold leading-relaxed font-Prism">
            Welcome to Admin Dashboard
          </h2>
          <form>
            <div class="mb-4">
              <label for="formFile" class="mb-2 inline-block text-light">
                Upload the Image File
              </label>
              <input
                class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-primary bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-light transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-primary file:px-3 file:py-[0.32rem] file:text-light file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-secondary focus:border-primary focus:text-light focus:shadow-te-primary focus:outline-none"
                type="file"
                id="formFile"
              />
            </div>
            <div class="relative mb-4" data-te-input-wrapper-init>
              <input
                type="url"
                class="peer block min-h-[auto] w-full rounded border-2 border-primary bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput1"
                placeholder="Example label"
              />
              <label
                for="exampleFormControlInput1"
                class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-light transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-light peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
              >
                Enter Product URL
              </label>
            </div>
            <div className="flex">
              <button
                type="submit"
                class="inline-block rounded bg-secondary px-6 pb-2 pt-2.5 max-w-xs m-auto font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
                data-te-ripple-init
                data-te-ripple-color="light"
                onClick={(e) => handleSubmit(e)}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="w-1/2">
          <Image src={DesignImg} className="w-full" />
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/admin',
        permanent: false,
      },
    }
  }

  return {
    props: { session },
  }
}
