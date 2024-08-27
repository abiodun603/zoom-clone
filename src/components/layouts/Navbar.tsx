'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className='fixed flex-between z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <Link href={"/"} className='flex items-center gap-1'>
        <Image
          src={"/icons/logo.svg"}
          alt='logo'
          width={32}
          height={32}
          className='max-sm:size-10'
        />
        <p className="font-extrabold text-[26px] text-white max-sm:hidden">Yoom</p>
      </Link>

      <div className="flex-between gap-5">
        {/* Clerk User Management */}
        <SignedIn>
          <UserButton />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar