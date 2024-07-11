# Recoble - Landing

## # 프로젝트 개요
___
- node: v20.11.1
- 디자인 패턴
    - 앱라우트 페이지 MVVM 패턴 정의
        - `constants.tsx`: 상수 모음 [M]
        - `types.ts`: 모델 모음 [M]
        - `repositories.ts`: DB 소통 쿼리 계층 [M]
            - `services.ts` 또는 `actions.ts`에서 호출
            - 클라이언트 컴포넌트는 훅에서 직접 `repositories.ts` 함수를 호출할 수도 있다.
        - `page.ts`: 화면 [V]. (단, `route.ts`가 있다면 단순 경유 페이지에 불과하므로 해당 파일이 없다.)
        - `components`: `page.ts` 구성요소를 여러 컴포넌트로 분리한 경우, 자식 컴포넌트가 위치 [V]
        - `styles`: CSS 모듈 스타일 모음 폴더 [V]
        - `schemas.ts`: Zod 등 유효성 검사 스키마 및 타입 위치 [V]
        - `actions.ts`: 사용자 요청에 맞는 서비스를 호출해 화면에 응답하는 계층 [VM]
        - `services.ts`: `actions.ts`에서 호출되는 로직 계층. 로직 없으면 `repositories.ts`로 건너 뜀 [VM+]
            - 서버 컴포넌트 전용 함수 위치 - `'use server'` 적용
        - `hooks.ts`
            - 클라이언트 컴포넌트 전용 함수 위치 - `'use client'` 적용
        - `services.ts`
            - 서비스 로직을 제외한 기타 연산 모음
            - 의미 상, 모든 계층에서 공통으로 사용할 성격의 함수들이 위치
            - 대부분의 공통 유틸은 `libs` 폴더 아래 존재
    - 함수가 너무 많아지면, 파일명과 동일 폴더를 생성하고 그 하위에 여러 파일로 구분해 함수를 분류 저장한다.
        - Ex. `services / commandServices.ts, queryServices.ts`
    - CQRS 패턴은 굳이 무리해서 적용하지 않는다.
- 출시 서비스가 아니므로, `Prisma`, `Debezium`, `Kafka` 조합의 데이터베이스 비동기 복제 설정은 생략한다.
## #3. Tailwind css
___

1. tailwind css 반응형 수정자의 경우, 기본 가장 작은 사이즈부터 스타일을 적용하도록 설계돼 있다.

    ```html
    <main className='bg-gray-100 sm:bg-red-100' />;
      {children}
    </main>
   ```

   위 코드에서 main 은 배경색이 회색100에서 가로 640px이 되는 순간 빨강100으로 변경된 이후부터 계속 빨강 100이 유지된다.
   md, lg, xl과 같은 더 큰 사이즈가 적용됐을 때 추가 테일윈드 유틸리티 클래스 수정자가 여기서는 존재하지 않기 때문이다.


2. 그라디안트 효과 주기
   <br/>
    ```
    bg-gradient-to-tr from-cyan-500 via-yellow-400 to-purple-400
    ```


3. peer
   <br/><br/>
   if input className includes peer,<br/>
   other brother elements includes className like 'peer-invalid:block' will activate style.
   <br/><br/>
   형제의 peer 가 지정된 폼 요소 속성 변경을 감지해
   <br/>peer- 접두어를 같은 형제에 사용함으로써
   조건부 스타일을 활성화하는 수정자<br/>
   같은 형제 요소끼리만 적용 가능 - peer 영역을 벗어나면 peer-[className] 효과가 발동하지 않는다.


4. `*:[className]`
    ```
    *:outline-none
    ```

   자식 요소 전부 공통 스타일을 적용하고자 할 때 부모 요소에서 걸 수 있는 수정자<br/>
   자식만 될 뿐, 손자 이상 깊은 스타일의 상속은 불가하다.<br/><br/>

5. `has-[.className | #idName | :modifier | ...]:`

    ```
    has-[.peer]:bg-green-100
    has-[#logInBtn]:bg-green-100
    has-[:invalid]:bg-red-100
    ```

   자식 요소들 중 특정 식별자 또는 테일윈드 수정자 등을 포함하는 요소가 하나라도 있다면 지정한 스타일을 적용한다.
   <br/>
   손자 이상 깊은 요소까지 감별하는 듯하다.
   <br/><br/>
   이러한 동적 스타일 적용은 최근 업데이트 된 강력한 CSS 고유 기능으로 제공되며 가상 클래스 기반으로 작동한다.
   <br/><br/>

6. 배열 스타일
   <br/><br/>
   6-1. `odd:[className] even:[className]`<br/><br/>

   ```odd:bg-gray-100 even:bg-cyan-100```<br/><br/>

   map 배열 메서드로 처리한 배열 컴포넌트 부모에서 적용 가능

   odd - 홀수, even - 짝수<br/><br/>

   6.2 `first:[className], last:[className]`

    ```
    first:border-t-0
    last:border-b-0
    ```

   배열 요소 중 맨 처음(first) 또는 마지막(last)에만 지정 스타일 적용

   6.3 `empty:[className]`
   <br/><br/>
   ```empty:w-24 empty:h-5 empty:rounded-full empty:animate-pulse empty:bg-gray-300```
   <br/><br/>
   자식으로 배치되어야 할 배열 정보가 빈 문자열 처럼 비어 있다고 판명된 경우, 지정된 스타일 적용<br/><br/>

7. group - group-[className]:
   <br/><br/>
   부모 - ```group```

   자식 - ```group-hover:text-red-500 group-focus-within:block hidden```
   <br/><br/>
   이 관계는 group 클래스가 속한 부모와 그 자식 요소들에 적용된다.
    * group-focus-within:block - 해당 요소가 안쪽으로 포커싱 돼 있을 때 요소를 보여준다는 의미


8. JIT 컴파일러 활용하기
   <br/><br/>
   테일윈드는 부트스트랩처럼 단순히 무겁고 거대한 유틸리티 클래스 모음집이 아니며,

   수정 즉시 CSS 리컴파일링을 수행하는 JIT 컴파일러다.
   <br/><br/>
   다양한 수정자들을 조합해 천차만별의 CSS 코드를 생성하는 것도 테일윈드가 컴퍼일러인 까닭이다.

   당연히 JIT 컴파일러로서 테일윈드는 아주 가벼워 설치 부담도 적다.
   <br/><br/>
   컴파일러인 점을 감안할 때, 테일윈드는 반복적으로 사용할 특정 스타일 속성을

   아래와 같이 설정 파일 안에 추가 지정해서 기존 유틸리티 클래스처럼 사용하는 것도 가능하다.

    ```javascript
    // tailwind.config.ts
    contents: {
        ...
    },
    theme: {
        extend: {
            margin: {
                tomato: '120px',
            },
            borderRadius: {
                'sexy-name': '11.11px',
            },
        },
    },
    plugins: [],
    ```

   이렇게 추가된 클래스는 tailwind intellisense 에서도 자동 감지된다.

    ```html
       <button className="text-white px-3 py-2 rounded-sexy-name bg-[#543cb8]">
         Submit
       </button>
    ```
    ```css
        // rounded-sexy-name 에 마우스 올려뒀을 때 컴파일된 css 정보
        .rounded-sexy-name {
            border-radius: 11.11px;
        }
    ```

9. 디렉티브
   ```css
   // global.css
   @tailwind base; // 테일윈드가 지정한 기본 스타일이 적용된 CSS
   @tailwind components;
   @tailwind utilities; // 테일윈드 유틸리티 클래스 모음집(placeholder). 테일윈드 인텔리센스는 여기서 개발자가 입력한 클래스들을 찾아내고, 테일윈드 또한 이를 기반으로 스타일을 찾아 CSS 를 컴파일링한다.

    위 순서대로 돼 있는건, 아래 코드가 윗 코드를 재정의(오버라이드)하거나
    코드를 추가하는 방식으로 작동하기 때문
    
    디렉티브는 아래와 같이 각각 레이어를 추가해 css 를 오버라이드할 수도 있다.
    
    @layer base {
        a {
            @apply text-blue-500 // 모든 a 태그 요소에 파랑500 색상 적용
        }
    }
    
    // 아래와 같이 유틸리티 클래스를 재정의하는 것도 가능하다.
    // 물론, tailwind.config.ts 에서 extends 를 사용하는 것과 결과가 같다.
    @layer utilities {
        .text-bigger-hello {
            @apply text-3xl font-semibold
        }
    }
    
    // 아래는 컴포넌트 계층을 직접 재정의한 경우
    // 유틸리티 클래스 조합을 다시 한 번 추상화해 btn 클래스로 재정의한 것
    @layer components {
        .btn {
            @apply w-full bg-black h-10 text-white rounded-sexy-name mt-tomato;
        }
    }
    ```

10. 플러그인

    테일윈드 플러그인은 9항에서 언급한 레이어 코드를 종합해

    특수한 목적에 따라 CSS 코드로 완성해 제공하고 있는 npm 패키지들을 지칭한다.
    <br/><br/>
    테일윈드 플러그인은 tailwind.config.ts 에 plugins 배열 안에 모듈을 추가하면

    간단하게 프로젝트에 해당 플러그인을 추가 및 적용(오버라이드)할 수 있다.
    <br/><br/>
    예를 들어, [daisyUI](https://daisyui.com)는 @layer components 를 오버라이드한 플러그인을 제공하며

    여기서 다양한 종류의 UI 스타일들을 특정 클래스명을 입력하는 것만으로 간단하게 스타일링할 수 있다.
    <br/><br/>
    테일윈드에서 기본 제공하는

    [4종의 공식 플러그인](https://tailwindcss.com/docs/plugins)도 아주 쓸 만하다.

    ```javascript
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ]
    ```

    플러그인 적용 시 미리 npm 설치 후 서버를 재시작해야 함에 주의!


## # 기타
---
1. 웹스톰 설정 > 에디터 > 자연어 > 철자 > 사용자 사전 추가
    - Recoble
    - Catchers's
    - svgr
    - nanumgothic


2. 웹스톰 > *.md 파일 > 오류 > 'HTML: 없음', 'Markdown: 없음' 선택