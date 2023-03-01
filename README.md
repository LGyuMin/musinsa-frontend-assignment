# 무신사 글로벌개발팀 프론트엔드 사전 과제

## 설명 및 기능

Vite + React.js + TypeScript 베이스의 프로젝트로 상태관리 라이브러리로 recoil을 사용

위 기술 사용 이유

- Vite는 Webpack 보다 빌드 속도가 빠르기 때문에 빠른 개발 서버 실행과 HMR(Hot Module Replacement)을 위해 사용했습니다.
- SPA를 쉽게 만들고 컴포넌트 단위 개발을 위해 React.js 사용했습니다.
- 런타임 전에 오류를 포착할 수 있고 IDE에서 제공하는 자동 완성 기능을 이용하면 생산성이 향상되므로 타입스크립트를 사용했습니다.
- 러닝커브가 낮고 사용법이 React Hook과 비슷하며, redux와 비교했을 때 보일러 플레이트와 장황한 코드를 작성이 필요하지 않기 때문에 recoil 사용했습니다.

## 스펙

vite: v4.1.0

react: v18.2.0

recoil: v0.7.6

typescript: v4.9.3

styled-components: v5.3.6

## 설치 및 실행

### 설치

```bash
npm install
```

### 실행

- 개발모드

```bash
npm run dev
```

- 배포

```bash
npm run build
```
