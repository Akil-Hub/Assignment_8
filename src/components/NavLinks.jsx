'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'



const NavLinks = ({children,href}) => {
    const pathname = usePathname()
    const isActive = pathname === href
  return (
    <Link href={href} className={`${isActive ? 'border-b-2 border-gray-800':''} font-semibold text-lg dark:border-white`}>
        {children}

    </Link>
  )
}

export default NavLinks