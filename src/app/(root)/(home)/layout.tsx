import { ReactNode } from 'react'
import type { Metadata } from "next";

// ** Components
import Navbar from '@/components/layouts/Navbar'
import Sidebar from '@/components/layouts/Sidebar'

export const metadata: Metadata = {
  title: "YOOM",
  description: "Video calling app",
  icons: {
    icon: "/icons/logo.svg"
  }
};

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