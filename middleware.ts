import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/robots.txt') {
    const url = request.nextUrl.clone();
    url.pathname = '/api/robots-txt';
    return NextResponse.rewrite(url);
  }

  const accept = request.headers.get('accept') ?? '';
  if (accept.includes('text/markdown')) {
    const url = request.nextUrl.clone();
    const originalPath = url.pathname;
    url.pathname = '/api/markdown';
    url.searchParams.set('path', originalPath);
    return NextResponse.rewrite(url);
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon).*)'],
};
