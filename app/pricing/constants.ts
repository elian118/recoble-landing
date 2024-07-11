import { Plan } from '@/app/pricing/types/Plan';

export const plans: Plan[] = [
  {
    title: '초기 스타트업',
    mau: 'MAU 1만 이하',
    price: {
      monthly: 9.9,
      yearly: 90,
      standard: 'MAU 사용자 당 7원 / 월',
    },
    details: ['초기 도입 시 기본 사용 교육', '월 1회 정기 교육 (온라인)'],
  },
  {
    title: '소형',
    mau: 'MAU 1만~10만',
    price: {
      monthly: 24,
      yearly: 240,
      standard: 'MAU 사용자 당 5원 / 월',
    },
    details: [
      '초기 도입 시 기본 사용 교육',
      '퍼포먼스마케팅 및 고객분석에 대한 교육',
      '월 1회 정기 교육 (온라인)',
    ],
  },
  {
    title: '중형',
    mau: 'MAU 10만~100만',
    price: {
      monthly: 69,
      yearly: 690,
      standard: 'MAU 사용자 당 3원 / 월',
    },
    details: [
      '초기 도입 시 기본 사용 교육',
      '퍼포먼스마케팅 및 고객분석에 대한 교육',
      '월 1회 정기 오프라인 교육 및 컨설팅',
    ],
  },
  {
    title: '엔터프라이즈',
    mau: 'MAU 100만 이상',
    price: {
      yearly: 1790,
      standard: 'MAU 사용자 당 2원 / 월',
    },
    details: [
      '초기 도입 시 기본 사용 교육',
      '퍼포먼스마케팅 및 고객분석에 대한 교육',
      '월 2회 이상 정기 오프라인 교육 및 컨설팅',
      '인력 전담 배치',
    ],
  },
];
