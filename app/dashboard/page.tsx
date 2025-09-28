import { auth } from '@/auth'
import React from 'react'

const DashboardHome = async() => {

    const session = await auth()
    console.log('my sss', session)

  return (
    <div>
      dashboard
    </div>
  )
}

export default DashboardHome
