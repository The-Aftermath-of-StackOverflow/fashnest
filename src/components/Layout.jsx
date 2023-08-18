import Navbar from './Navbar'

export default function Layout({ children, provider = 'google' }) {
  return (
    <div className="max-w-screen-xl flex flex-col m-auto h-screen">
      <Navbar provider={provider} />
      {children}
    </div>
  )
}
