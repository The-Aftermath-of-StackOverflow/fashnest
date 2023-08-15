import { SessionProvider } from 'next-auth/react'
import ProvidersWrapper from '@/components/ProvidersWrapper'
import '@/styles/globals.css'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <ProvidersWrapper session={session}>
      <Component {...pageProps} />
    </ProvidersWrapper>
  )
}
