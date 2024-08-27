'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// ** Contants
import { sidebarLinks } from '@/constants'

// ** Libs
import { cn } from '@/lib/utils'

// component
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"


const MobileNav = () => {
  const pathname = usePathname()

  return (
    <section className='w-full max-w-[264px]'>
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={36}
            height= {36}
            alt= "hamburger icon"
            className= "cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className='border-none bg-dark-1'>
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

          <div className="flex flex-col justify-between overflow-y-auto h-[calc(100vh-72px)]">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16 textt-white">
              {sidebarLinks.map(link => {
                const isActive = pathname === link.route;

                return (
                  <SheetClose asChild key={link.route}>
                    <Link 
                      href={link.route}
                      key={link.label}
                      className={cn('flex gap-4 items-center p-4 rounded-lg w-full max-w-60', {
                        'bg-blue-1': isActive
                      })}
                    >
                      <Image 
                        src={link.imgUrl}
                        alt={link.label}
                        width= {20}
                        height= {20}
                      />
                      <p className="font-semibold text-white">{link.label}</p>
                    </Link>
                  </SheetClose>
                )
              })
              }
              </section>
            </SheetClose>
          </div>
          {/* <Link
            href={link.route}
            key={link.label}
            className={cn('flex gap-4 items-center p-4 rounded-lg justify-start', {
              'bg-blue-1': isActive
            })}
          >
            <Image 
              src={link.imgUrl}
              alt={link.label}
              width= {24}
              height= {24}
            />
            <p className="text-lg font-semibold max-lg:hidden">{link.label}</p>
          </Link> */}
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav