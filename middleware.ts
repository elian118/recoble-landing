import { NextRequest, NextResponse } from 'next/server';

type Routes = {
  [key: string]: boolean;
};

// 배열 대신 객체를 사용해야 자원 소모가 적고 검색이 빠르다. - Edge Runtime 에서 권장되는 방식
const publicOnlyUrls: Routes = {
  '/': true,
};

export const middleware = async (req: NextRequest) => {
  const exists = publicOnlyUrls[req.nextUrl.pathname];

  return NextResponse.redirect(new URL(exists ? '/home' : '/', req.url));
};

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
