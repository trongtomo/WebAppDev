import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function middleware(request: NextRequest) {
  const cookie = request.cookies.get('jwt');
  
  const currentPath = request.nextUrl.pathname;

  if (currentPath === '/dashboard' && cookie === undefined) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (currentPath === '/cards' && cookie === undefined) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (currentPath === '/applications' && cookie === undefined) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  if (currentPath === '/ParkingSessions' && cookie === undefined) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  
  return NextResponse.next()
}