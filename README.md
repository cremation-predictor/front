# 🌙 달빛톤 프론트엔드

본 프로젝트는 **대시보드 기반의 화장 수요 예측 서비스**를 제공하기 위해 제작된 프론트엔드 애플리케이션입니다.  
React + Vite + TailwindCSS를 활용하여 직관적인 UI와 빠른 성능을 구현했습니다.

---

## 🚀 기술 스택

- **Framework**: React + Vite
- **Styling**: TailwindCSS, tailwind-merge, class-variance-authority
- **Icons**: Lucide React
- **Linting**: ESLint + React Hooks/Refresh 플러그인

---

## 📂 프로젝트 구조

src/
├─ components/ # 공통 UI 컴포넌트 (Sidebar, TopBar, Card 등)
│ └─ ui/ # 테이블, 뱃지 등 세부 UI 요소
├─ sections/ # 대시보드 섹션 (Analytics, RecentOrders, TopSellingProducts 등)
├─ layouts/ # 전체 레이아웃 (AppLayout)
├─ App.jsx # 메인 앱 컴포넌트
├─ main.jsx # 진입점 (ReactDOM 렌더링)
└─ index.css # TailwindCSS 스타일 설정


---

## 🖥️ 실행 방법

### 1. 패키지 설치
```bash
npm install
2. 개발 서버 실행
npm run dev

3. 빌드
npm run build
🎨 주요 기능
사이드바: 네비게이션 메뉴 (실시간 현황, 지표 분석, 가동 스케줄 등)

상단바: 검색, 알림, 사용자 프로필 UI

지표 분석 섹션: 월별/주간 수요 차트, 실시간 지표 표시

예약 현황 섹션: 실시간 예약 내역 테이블

지역별 현황 섹션: 인접 지역 예약 현황 카드

Card 컴포넌트 기반 UI: 일관된 대시보드 레이아웃 제공

