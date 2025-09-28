'use client'
import React from 'react'
import { Button } from './ui/button'
import { signOut } from 'next-auth/react'

const LogoutButton = () => {

    // Lot out user
  const handleLogoutUser = async() => {
    console.log('before sign')

    await signOut()
    console.log('after sign')
  }


    return <Button onClick={() => handleLogoutUser} className="cursor-pointer" size="sm">
        Logout
    </Button>
}

export default LogoutButton
