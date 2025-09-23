# 🌙 달빛톤 프론트엔드 (Hackathon Submission)

본 레포지토리는 **화장 수요 예측 대시보드 서비스**의 프론트엔드 애플리케이션입니다.
React + Vite + TailwindCSS 기반으로 제작되어, **빠른 개발 속도**, **일관된 디자인 시스템**, **확장 가능한 구조**를 제공합니다.

---

## 🚀 기술 스택

* **Framework**: React 18 + Vite (빠른 HMR & 빌드 최적화)
* **Styling**: TailwindCSS, tailwind-merge, class-variance-authority (컴포넌트 변형 관리)
* **Icons**: lucide-react (SVG 기반 아이콘)
* **Linting/품질 관리**: ESLint (+ React Hooks/Refresh 플러그인)
* **구조 최적화**: Vite `alias` 설정(`@ → src`)

> 개발 환경: Node.js LTS (≥ 18) + npm

---

## 📂 프로젝트 구조

```
src/
 ├─ components/             # 공통 UI 컴포넌트
 │   ├─ layouts/            # 전체 레이아웃(AppLayout)
 │   ├─ Sidebar.jsx         # 사이드 내비게이션
 │   ├─ TopBar.jsx          # 상단 바(검색, 알림, 프로필)
 │   └─ ui/                 # 원자 단위 UI(Card, Table, Badge 등)
 │
 ├─ sections/               # 대시보드 섹션 단위 컴포넌트
 │   ├─ AnalyticsSection.jsx
 │   ├─ RecentOrdersSection.jsx
 │   └─ TopSellingProductsSection.jsx
 │
 ├─ App.jsx                 # 앱 진입 컴포넌트 (레이아웃+섹션 조립)
 ├─ main.jsx                # ReactDOM 렌더링 엔트리
 ├─ index.jsx               # 앱 루트 관리 (중복 진입 관리)
 └─ index.css               # TailwindCSS 전역 스타일
```

---

## 🖥️ 실행 방법

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

> 기본 주소: [http://localhost:5173](http://localhost:5173)

### 3. 프로덕션 빌드

```bash
npm run build
```

### 4. 빌드 미리보기 (선택)

```bash
npm run preview
```

---

## 🎨 주요 기능

* **사이드바**: 실시간 현황, 지표 분석, 가동 스케줄 등 내비게이션 메뉴
* **상단바**: 검색, 알림, 사용자 프로필 인터페이스
* **지표 분석 섹션 (AnalyticsSection)**: 월별 수요, 주간 예약률, 실시간 지표 카드
* **예약 현황 섹션 (RecentOrdersSection)**: 실시간 예약 내역 테이블
* **지역별 현황 섹션 (TopSellingProductsSection)**: 인접 지역 수요 현황 카드
* **Card 기반 UI**: 일관성 있는 대시보드 레이아웃 제공

---

## 📌 해커톤 제출 정보

* **팀명**: 달빛톤 (에이문아이)
* **주제**: 특정 기간 화장터 사용 폭증에 대비한 수요 예측 프로그램
* **분야**: AI를 활용한 사회 문제 해결

### 👥 역할 분담

* **Frontend**: React 기반 대시보드 UI 설계 및 개발
* **Backend**: 데이터 처리 및 API 서버 구축
* **AI Modeling**: 화장 수요 예측 모델 설계 및 학습
* **Planning & Research**: 문제 정의, 데이터 수집 및 정책 자료 조사

---

## ⚡ 엔지니어링 고려사항

* **반응형 레이아웃**: Grid & Flexbox 기반으로 다양한 해상도 대응
* **상태 관리**: 경량 구조(useState/useEffect) → 확장 시 React Query/RTK Query 적용 가능
* **컴포넌트 재사용성**: Card/Table/Badge 등 원자 단위 컴포넌트로 확장성 확보
* **성능 최적화**: 코드 스플리팅, React.memo/useMemo로 불필요한 렌더링 최소화
* **배포 친화성**: Vite 기반 정적 빌드 → Netlify/Vercel/S3+CloudFront 배포 가능

---

## ✅ 체크리스트 (제출 전)

* [ ] `npm run build` 성공 여부 확인
* [ ] UI 반응형 및 크로스 브라우저 테스트 완료
* [ ] API 연동 시 `.env` 환경 변수 적용
* [ ] ESLint 경고/에러 제거
* [ ] 시연 영상 및 스크린샷 포함

---

## 📄 라이선스

본 프로젝트는 **Hackathon 제출용**으로 제작되었으며, 외부 활용 시 팀 내부 규정을 준수해야 합니다.
