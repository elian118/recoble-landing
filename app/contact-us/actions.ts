'use server';

import { postContactUs } from '@/app/contact-us/services';
import { formSchema } from '@/app/contact-us/schemas';

export const contactUs = async (prevState: any, formData: FormData) => {
  const data = {
    clientName: formData.get('clientName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
  };

  const result = await formSchema.spa(data);

  if (!result.success) return result.error.flatten();
  else {
    await postContactUs(result.data);
  }
};
