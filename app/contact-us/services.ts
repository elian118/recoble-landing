'use server';

import { ContactFormType } from '@/app/contact-us/schemas';
import { postInquiry } from '@/app/contact-us/repositories';

export const postContactUs = async (data: ContactFormType) => {
  try {
    return await postInquiry(data);
  } catch (err) {
    console.error(err);
    return err;
  }
};
