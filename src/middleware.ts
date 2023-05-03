import type { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest, response: NextResponse) {
  //  console.log('middleware')
  //  console.log(request)
  //  console.log('response')
  //  console.log(response)
  console.log(request.nextUrl.pathname);
  if (request.nextUrl.pathname.startsWith('/create.html')) {
    console.log('命中路由');
    // do something
  }
  // return NextResponse.next()
}
