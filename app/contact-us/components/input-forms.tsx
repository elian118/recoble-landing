'use client';

import React, { useRef } from 'react';
import Input from '@/components/input';
import Button from '@/components/button';
import Image, { StaticImageData } from 'next/image';
import contactImg from '@/public/images/contact.png';
import { contactFormSchema, ContactFormType } from '@/app/contact-us/schemas';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactUs } from '@/app/contact-us/actions';
import { useModal } from '@/libs/hooks';

export const InputForms = () => {
  const resetRef = useRef<HTMLInputElement>(null);
  const { openModal } = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactFormSchema),
  });

  // const reset = (e: any) => e.target.reset();

  const onSubmit = handleSubmit(async (data: ContactFormType) => {
    const formData = new FormData();

    formData.append('clientName', data.clientName);
    formData.append('email', data.email);
    formData.append('phone', data.phone);

    const res = await contactUs(formData);

    // 응답 성공 시
    if (res) {
      openModal({ body: `${data.clientName}님의 문의를 제출하였습니다.` });
      resetRef.current?.click();
    }
  });

  const onValid = async () => await onSubmit();

  return (
    <div className="input-forms">
      <div className="flex flex-col gap-1 w-full xl:w-8/12 mt-20">
        <p className="text-4xl font-semibold">
          <span className="text-blue-600">3개월간 무료</span>
          <span>로 사용해보세요</span>
        </p>
        <p className="text-xl font-semibold">
          <span className="text-red-500">!!</span> 추가비용은 없어요{' '}
          <span className="text-red-500">!!</span>
        </p>
        <p className="contact-description fade-in">
          기본 정보를 입력하시면 전담 컨설턴트가&nbsp;
          <br className="flex 2xl:hidden" />
          고객의 고민과 문제를 파악해
          <br />
          규모/상황별 활용 방안을 안내해드려요.
        </p>
      </div>
      <form
        action={onValid}
        className="contact-form"
        // onSubmit={(e) => reset(e)}
      >
        <Input
          type="text"
          placeholder="성함을 입력해주세요"
          errors={[errors.clientName?.message ?? '']}
          minLength={2}
          required
          {...register('clientName')}
        />
        <Input
          type="email"
          placeholder="이메일을 입력해주세요"
          errors={[errors.email?.message ?? '']}
          required
          {...register('email')}
        />
        <Input
          type="text"
          placeholder="연락처를 입력해주세요"
          errors={[errors.phone?.message ?? '']}
          required
          {...register('phone')}
        />
        <Button type="submit" fullWidth rounded>
          제출하기
        </Button>
        <input className="hidden" ref={resetRef} type="reset"></input>
      </form>
      <div className="contact-card fade-in">
        <div className="flex flex-col gap-3 w-2/5 min-w-[170px]">
          <p className="text-xl font-semibold">전화상담</p>
          <p className="font-bold text-xl">02-6954-0730</p>
          <p className="font-extralight text-sm">기술 지원 및 견적 문의</p>
        </div>
        <Image
          className="w-3/5 md:w-full xl:3/5"
          src={contactImg as StaticImageData}
          alt="contact image"
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>
    </div>
  );
};
