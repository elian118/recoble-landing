'use server';

import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { SessionContent } from '@/libs/types';

export const getSession = () => {
  return getIronSession<SessionContent>(cookies() as any, {
    cookieName: 'recoble',
    password: process.env.NEXT_PUBLIC_COOKIE_PASSWORD!,
  });
};

export const getSessionId = async () => {
  const session = await getSession(); // 복호화 된 쿠키 반환
  return session.id;
};

export const saveLoginSession = async (user: SessionContent) => {
  const session = await getSession();
  session.id = user.user_id ?? user.id;
  await session.save(); // 정보 암호화 후 쿠키에 저장
  redirect('/home');
};

export const logout = async () => {
  'use server';
  const session = await getSession();
  session.destroy(); // 쿠키 제거
  redirect('/');
};
