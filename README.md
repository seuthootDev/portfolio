# DAS3D Portfolio

3D 가스 누출 감지 시스템 포트폴리오 웹사이트

## 📋 프로젝트 개요

DAS3D는 산업 시설 내 가스 누출 사고를 사전에 예방하기 위해 개발된 3D 기반의 CFD 시뮬레이션 센서 배치 최적화 시스템입니다.

### 🎯 주요 목표
- 3D 도면을 기반으로 가스 확산 시뮬레이션 수행
- 최적의 센서 배치를 도출하여 안전 관리의 효율성 극대화
- VTK 기반 워크플로우 시각화 플랫폼 구축

## 🚀 기술 스택

### Frontend
- **React.js** - 사용자 인터페이스 구축
- **Tailwind CSS** - 스타일링 및 반응형 디자인
- **React Icons** - 아이콘 라이브러리
- **React Transition Group** - 애니메이션 효과

### Backend (DAS3D 시스템)
- **Python 3.10** - 메인 개발 언어
- **PySide6** - Qt 기반 GUI 프레임워크
- **VTK** - 3D 시각화 라이브러리
- **Chama** - 센서 최적화 라이브러리
- **NumPy + Pandas** - 수치 연산 및 데이터 처리

## 📁 프로젝트 구조

```
das3d-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Hero.js              # 메인 타이틀 섹션
│   │   ├── About.js             # 개발자 소개
│   │   ├── ProjectOverview.js   # 프로젝트 개요
│   │   ├── Architecture.js      # 시스템 아키텍처
│   │   ├── Features.js          # 주요 기능
│   │   ├── Implementation.js    # 구현 세부사항
│   │   ├── Results.js           # 프로젝트 결과
│   │   ├── Demo.js              # 시스템 데모
│   │   └── Conclusion.js        # 결론 및 향후 계획
│   ├── App.js                   # 메인 애플리케이션
│   ├── index.js                 # 진입점
│   └── index.css                # 글로벌 스타일
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🛠️ 설치 및 실행

### 필수 요구사항
- Node.js (v14 이상)
- npm 또는 yarn

### 설치 방법

1. **저장소 클론**
```bash
git clone https://github.com/seuthootDev/das3d-portfolio.git
cd das3d-portfolio
```

2. **의존성 설치**
```bash
npm install
```

3. **개발 서버 실행**
```bash
npm start
```

4. **브라우저에서 확인**
```
http://localhost:3000
```

### 빌드

프로덕션 빌드를 위해:
```bash
npm run build
```

## 🎨 주요 기능

### 포트폴리오 웹사이트
- **반응형 디자인**: 모든 디바이스에서 최적화된 경험
- **스크롤 네비게이션**: 부드러운 섹션 간 이동
- **인터랙티브 헤더**: 현재 섹션 표시
- **모던 UI/UX**: 깔끔하고 전문적인 디자인

### DAS3D 시스템 기능
- **3D 모델 시각화**: VTK 기반 고성능 렌더링
- **CFD 시뮬레이션**: OpenFOAM 기반 가스 확산 분석
- **센서 최적화**: Chama 라이브러리 활용
- **워크플로우**: 노드 기반 시각적 프로그래밍

## 🏗️ 시스템 아키텍처

### 4계층 구조
1. **UI Layer (PySide6)**: 사용자 인터페이스
2. **Workflow Engine Layer**: 노드 기반 워크플로우
3. **Widget Layer (DW/DVW)**: 데이터 처리 및 시각화 위젯
4. **External Libraries Layer**: VTK, Chama, NumPy, Pandas

## 👨‍💻 개발자

**정승훈** - 소프트웨어 개발자

### 연락처
- **Email**: seuthootDev@gmail.com
- **GitHub**: github.com/seuthootDev