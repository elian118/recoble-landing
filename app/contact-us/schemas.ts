import { z } from 'zod';
import { INVALID } from '@/libs/contstans';
import validator from 'validator';

export const contactFormScheme = z.object({
  clientName: z
    .string({
      invalid_type_error: `이름은 ${INVALID.STRING}`,
      required_error: `이름을 ${INVALID.INPUT}`,
    })
    .trim()
    .min(2, INVALID.TOO_SHORT)
    .toLowerCase(),
  email: z
    .string({ required_error: `이메일을 ${INVALID.INPUT}` })
    .email(INVALID.EMAIL)
    .trim()
    .toLowerCase(),
  phone: z
    .string({ required_error: `연락처를 ${INVALID.INPUT}` })
    .trim()
    .refine(
      (phone) => validator.isMobilePhone(phone, 'ko-KR'),
      '유효하지 않은 전화번호입니다.',
    ),
});

export type ContactFormType = z.infer<typeof contactFormScheme>;
