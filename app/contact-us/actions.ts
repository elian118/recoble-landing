'use server';

import { postContactUs } from '@/app/contact-us/services';
import { contactFormSchema } from '@/app/contact-us/schemas';
import { FormDataType } from '@/app/contact-us/types';

export const contactUs = async (formData: FormData) => {
  const data: FormDataType = {
    clientName: formData.get('clientName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
  };

  const result = contactFormSchema.safeParse(data);

  if (!result.success) return result.error.flatten();
  else {
    try {
      const res = await postContactUs(result.data);
      if (res) return res;
    } catch (err) {
      //
    }
  }
};
