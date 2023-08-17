import { SessionProvider, getSession } from 'next-auth/react'

export default function ProvidersWrapper({ children, session }) {
  return (
    <SessionProvider
      baseUrl={process.env.NEXT_URL || 'http://localhost:3001'}
      refetchInterval={60 * 5}
      session={session}
    >
      {children}
    </SessionProvider>
  )
}

ProvidersWrapper.getInitialProps = async (context) => {
  const { ctx } = context
  const session = await getSession(ctx)

  return {
    session,
  }
}
