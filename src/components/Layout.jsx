import React from 'react'
import Navbar from './Navbar'
import ProvidersWrapper from './ProvidersWrapper'

export default function Layout({children, session}) {
  return (
    <div className='max-w-screen-xl flex flex-col m-auto h-screen'>
        <Navbar />
        {children}
    </div>
  )
}
