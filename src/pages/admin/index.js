import AdminForm from '@/components/AdminForm'
import Layout from '@/components/Layout'
import AdminImage from '@/assets/admin-img.png'
import { useSession, getSession } from 'next-auth/react'
import Image from 'next/image'
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("@/components/AdminForm"), {
  ssr: false,
});


export default function index() {
  return (
    <Layout provider="none">
      <div className="flex">
        <Image src={AdminImage} className="w-1/2" />
        <div className="h-min m-auto">
          <h2 className="mb-8 text-5xl text-white font-bold leading-relaxed font-Prism">
            Welcome to Admin Portal
          </h2>
          <DynamicComponent />
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (session) {
    if (session.user.email === process.env.ADMIN_EMAIL) {
      return {
        redirect: {
          destination: '/admin/dashboard',
          permanent: false,
        },
      }
    } else {
      return {
        redirect: {
          destination: '/dashboard',
          permanent: false,
        },
      }
    }
  }

  return {
    props: { session },
  }
}
