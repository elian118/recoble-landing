'use client';

import React from 'react';
import { useFormState } from 'react-dom';
import Input from '@/components/Input';
import { contactUs } from '@/app/contact-us/actions';
import Button from '@/components/Button';
import Image, { StaticImageData } from 'next/image';
import contactImg from '@/public/images/contact.png';

export const InputForms = () => {
  const [state, dispatch] = useFormState(contactUs, null);

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
      <form action={dispatch as any} className="contact-form">
        <Input
          name="clientName"
          type="text"
          placeholder="성함을 입력해주세요"
          errors={state?.fieldErrors.clientName}
          minLength={2}
          required
        />
        <Input
          name="email"
          type="email"
          placeholder="이메일을 입력해주세요"
          errors={state?.fieldErrors.email}
          required
        />
        <Input
          name="phone"
          type="text"
          placeholder="연락처를 입력해주세요"
          errors={state?.fieldErrors.phone}
          required
        />
        <Button type="submit" fullWidth rounded>
          제출하기
        </Button>
      </form>
      <div className="contact-card fade-in">
        <div className="flex flex-col gap-3 w-2/5 min-w-[170px]">
          <p className="text-xl font-semibold">전화상담</p>
          <p className="font-bold text-xl">02-6954-0730</p>
          <p className="font-extralight text-sm">기술 지원 및 견적 문의</p>
        </div>
        <Image
          className="w-3/5 md:w-full xl:3/5"
          width={380}
          height={300}
          src={contactImg as StaticImageData}
          alt="contact image"
        />
      </div>
    </div>
  );
};
