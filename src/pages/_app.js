import ProvidersWrapper from '@/components/ProvidersWrapper'
import 'tw-elements/dist/css/tw-elements.min.css'
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
