# Recoble - Landing

## # 프로젝트 개요
___
- 이름: 레코블(Recoble)
- 목적
    - 라이앤캐처스(이하 '라캐') 자사 솔루션 홍보를 위한 랜딩페이지 개발
    - 모든 유형의 사용자에게 접근 가능하도록 반응형 프론트엔드 웹앱 개발 
- 개발환경
    - node: v20.11.1
    - Next.JS: 검색엔진최적화(SEO)를 위해 서버사이드랜더링(SSR)을 지원하는 프레임워크 채택
    - 스타일: [테일윈드 css](https://tailwindcss.com/) + [데이지 UI](https://daisyui.com/)
        - 3일 이내 빠른 1차 퍼블리싱 완료를 위한 이상적 구성
    - 데이터베이스(이하 'DB')는 라캐 레코블 백엔드 애플리캐이션으로부터 API 호출해 연동
        - 이에 따라, Prisma ORM은 굳이 도입하지 않았다.
        - 그 외, 데이터를 복제하거나 가공할 로직을 담을 계층 / 기술스택 생략(불필요)
- 디자인 패턴
    - 앱라우트 페이지 MVVM 패턴 정의
        - `constants.tsx`: 상수 모음 [M]
        - `types.ts`: 모델 모음 [M]
        - `repositories.ts`: DB 소통 쿼리 계층 [M] (불필요)
            - `services.ts` 또는 `actions.ts`에서 호출
            - 클라이언트 컴포넌트는 훅에서 직접 `repositories.ts` 함수를 호출할 수도 있다.
        - `page.ts`: 화면 [V]. (단, `route.ts`가 있다면 단순 경유 페이지에 불과하므로 해당 파일이 없다.)
        - `components`: `page.ts` 구성요소를 여러 컴포넌트로 분리한 경우, 자식 컴포넌트가 위치 [V]
            - 원칙적으로 components 아래 구성물들(컴포넌트)은 해당 폴더가 위치한 페이지에서만 사용
            - 단, 루트 폴더에 위치하는 컴포넌트는 공용 컴포넌트로 간주
        - `styles`: CSS 모듈 스타일 모음 폴더 [V]
            - 코드가 적은 경우, css 파일 하나로 충당
            - 단일 css 파일은 해당 파일이 위치한 각 페이지에서만 사용하기로 약속
            - 클래스 이름이 서로 겹치지 않도록, 페이지 pathname을 prefix로 권장
        - `schemas.ts`: Zod 등 유효성 검사 스키마 및 타입 위치 [V]
        - `actions.ts`: 사용자 요청에 맞는 서비스를 호출해 화면에 응답하는 계층 [VM]
        - `services.ts`: `actions.ts`에서 호출되는 로직 계층. 
            - 로직 없으면 `repositories.ts`로 건너 뜀 [VM+]
            - 서버 컴포넌트 전용 함수 위치 - `'use server'` 적용
        - `useModal.ts`
            - 클라이언트 컴포넌트 전용 함수 위치 - `'use client'` 적용
        - `utils.ts`
            - 서비스 로직을 제외한 기타 연산 모음
            - 의미 상, 모든 계층에서 공통으로 사용할 성격의 함수들이 위치
            - 대부분의 공통 유틸은 `libs` 폴더 아래 존재
    - 함수가 너무 많아지면, 파일명과 동일 폴더를 생성하고 그 하위에 여러 파일로 구분해 함수를 분류 저장한다.
        - Ex. `services / commandServices.ts, queryServices.ts`

## # 기타
---
1. 웹스톰 설정 > 에디터 > 자연어 > 철자 > 사용자 사전 추가
    - Recoble
    - recoble
    - Catchers's
    - nanumgothic
    - nanum
    - semibold
    - svgr
    - daisyui


2. 웹스톰 > *.md 파일 > 오류 > 'HTML: 없음', 'Markdown: 없음' 선택