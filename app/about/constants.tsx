import { Description } from '@/app/about/types/Description';
import React from 'react';

export const description: Description[] = [
  {
    title: 'Service Improvement',
    titleColor: 'text-blue-600',
    comment: (
      <p>
        서비스를 개선 하고 싶으나
        <br className="flex lg:hidden" />
        &nbsp;어떻게 진행해야 할지 막막하신가요?
      </p>
    ),
  },
  {
    title: 'solution',
    titleColor: 'text-green-500',
    comment: (
      <p>
        구글 애널리틱스나 다른 플랫폼을 통해&nbsp;
        <br className="flex" />
        기본적인 수치는 알고 있으나&nbsp;
        <br className="flex lg:hidden" />
        명확한 해결책을 알고 싶은가요?
      </p>
    ),
  },
  {
    title: 'data decision making',
    titleColor: 'text-amber-400',
    comment: (
      <p>
        데이터를 정리하여 의사결정 및 설득에
        <br className="flex lg:hidden" />
        &nbsp;어려움을 겪고 계신가요?
      </p>
    ),
  },
];
