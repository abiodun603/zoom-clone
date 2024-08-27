import React, { ReactNode } from 'react'

// ** Components
import Navbar from '@/components/layouts/Navbar'
import Sidebar from '@/components/layouts/Sidebar'


const HomeLayout = ({ children }: { children: ReactNode}) => {
  return (
    <main className='relative '>

      <Navbar />

      <div className="flex">
        <Sidebar />

        <section className="flex min-h-screen flex-1 fle-col px-6 pb-6 pt-28 max-md:pt-14 sm:px-14">
          <div className="w-full">
            {children}
          </div>
        </section>
      </div>
    </main>
  )
}

export default HomeLayout