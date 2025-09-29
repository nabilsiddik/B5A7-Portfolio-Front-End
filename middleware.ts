import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from './auth'
 
export async function middleware(request: NextRequest) {
  const session = await auth()
  if(!session?.user?.email){
    return NextResponse.redirect(new URL('/login', request.url))
  }
}
 
export const config = {
  matcher: ['/dashboard/:path*']
}