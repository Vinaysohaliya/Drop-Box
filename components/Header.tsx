"use client";

import React from 'react'
import Link from 'next/link'
import { SignInButton,SignOutButton,SignUpButton,UserButton,useClerk } from '@clerk/nextjs'
import { ThemeToggler } from './ui/ThemeToggler';

const Header = () => {
    const { user } = useClerk();
  return (
    <div className=' flex justify-between h-16 items-center border-2 border-red-700'>
      <Link href='/'>
        DropBox
      </Link>
      <div className=' flex gap-3 justify-center items-center'>
      <ThemeToggler/>
       {user?(<><UserButton/><SignOutButton/></>):(<><SignInButton afterSignInUrl='/dashbord'/><SignUpButton/></>)}
      </div>
    </div>
  )
}

export default Header
