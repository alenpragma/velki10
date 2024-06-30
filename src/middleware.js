import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request) {
  const isAuthenticated = checkAuth(request);

  const response = NextResponse.next();

  if (!isAuthenticated) {
    response.headers.set('x-not-authenticated', 'true');
  }

  return response;
}

function checkAuth(request) {
  // Replace this with your actual authentication logic
  return request.cookies.get('auth-token') ? true : false;
}

export const config = {
  matcher: '/football/:path*',
};
