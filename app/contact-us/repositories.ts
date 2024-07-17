import { ContactFormType } from '@/app/contact-us/schemas';
import { db } from '@/libs/db';
import { setQueryLog } from '@/libs/utils';
import { PostInquiryRes } from '@/app/contact-us/types';

export const postInquiry = async (data: ContactFormType): Promise<PostInquiryRes> => {
  const now = new Date().toISOString();
  const result = await db.recoble_promotion.create({
    data: {
      name: data.clientName,
      email: data.email,
      phone: data.phone,
      regdtm: now,
    },
    select: { id: true, name: true, email: true },
  });
  setQueryLog('문의하기', 'postInquiry', result);
  return result;
};
