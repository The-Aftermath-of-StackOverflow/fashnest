import { SessionProvider } from 'next-auth/react'
import ProvidersWrapper from '@/components/ProvidersWrapper'
import '@/styles/globals.css'
import '@/components/ChatShell/ChatForm.css'
import '@/components/ChatShell/ChatShell.css'
import '@/components/ChatShell/MessageList.css'

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
