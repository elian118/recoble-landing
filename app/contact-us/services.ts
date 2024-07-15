'use server';

import { delay } from '@/libs/utils';

export const postContactUs = async (data: any) => {
  // pending test
  await delay(3000);
  console.log(data);
  return { result: 'ok', data: data };
  // todo: call API
  // await callback();
};
