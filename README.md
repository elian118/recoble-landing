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
        - Prisma ORM은 문의하기 전용으로 한시적 제한적 용도로 도입
- 디자인 패턴
    - 앱라우트 페이지 MVVM 패턴 정의
        - `constants.tsx`: 상수 모음 [M]
        - `types.ts`: 모델 모음 [M]
        - `repositories.ts`: DB 소통 쿼리 계층 [M]
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
    - 한 폴더 안에 여러 파일을 저장할 때(특히, 컴포넌트)
        - 최소 둘 이상이라면 index.ts에 모아 객체로 export
        - 파일마다 하나의 상수만 선언 및 직접 export 하고 export default 구문 제거 
        - export 파일들을 구조분해로 import → 한 줄로 여러 컴포넌트 수입 처리 가능
    - 폴더 안에 단일 상수만 export 할 때 export default 사용 권장
        - 이 경우, index.ts 파일 불필요.
        - 사유: 배포 환경에서 빌드 시, 구조분해 import로 단일 export 상수 파일을 가져오지 못하는 경우 종종 발생


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


3. 배포
    
    프로젝트 배포는 deploy 폴더 아래 restart_server.sh 파일을 실행해 간편하게 진행한다.<br/>
    단, 맥에서 셀 스크립트를 실행하려면 아래와 같이 실행을 위한 환경을 로컬에 설정해야 한다.<br/><br/>

   3-1. 홈브루에서 sshpass 설치<br/>
    ```
    brew install hudochenkov/sshpass/sshpass
    ```
   3-2 sshpass를 처음 실행하는 경우, 최초 ssh 원격 접속에 필요한 인증 수행 
    - restart_server.sh 스크립트 중 아무거나 터미널에서 실행(반드시 ssh 이하 명령만)
    ```
    ssh  mjay@lab.bibly.kr "cd recoble_landing/recoble-landing/;git pull origin main"
    ```
    - 그러면 아래와 같이 연결을 계속 진행할 건지 물어본다. yes를 입력한다.
    ```
    ssh  mjay@lab.bibly.kr "cd recoble_landing/recoble-landing/;git pull origin main"
    The authenticity of host 'lab.bibly.kr (112.218.103.78)' can't be established.
    ED25519 key fingerprint is SHA256:CtO2s34zySuTXah8LCAL6ioy2x+GuEYHNoiuFqtohlI.
    This host key is known by the following other names/addresses:
    ~/.ssh/known_hosts:4: lab.bigle.ai
    Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
    ```
    다음 단계에서 비밀번호를 입력한다.
    ```
    Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
    Warning: Permanently added 'lab.bibly.kr' (ED25519) to the list of known hosts.
    mjay@lab.bibly.kr's password:
    ```
    비밀번호가 맞으면, 아래 로그가 뜨며 sshpass 실행에 필요한 최초 인증이 완료되고 명령 프롬프트로 복귀된다.
    ```
    From https://lab.bibly.kr/gitlab/recoble/recoble-landing
    * branch            main       -> FETCH_HEAD
    Already up to date.
    ```
   3-3. sh 파일 실행
    - 비밀번호는 최초 ssh 원격 접속 인증에 사용한 것과 동일
    - 모르면, mjay@ryencatchers.com 으로 문의
    ```
    sh restart_server.sh [원격접속 비밀번호]
    ```
    - 실행 안 될 경우, 아래 명령을 먼저 내려 권한 부여 후 sh 파일 실행
    ```
    chmod 755 restart_server.sh
    ```