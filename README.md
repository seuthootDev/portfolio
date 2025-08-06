# DAS3D Portfolio

3D 가스 누출 감지 시스템 포트폴리오 웹사이트

## 📋 프로젝트 개요

DAS3D는 산업 시설 내 가스 누출 사고를 사전에 예방하기 위해 개발된 3D 기반의 CFD 시뮬레이션 센서 배치 최적화 시스템입니다.

### 🎯 주요 목표
- 3D 도면을 기반으로 가스 확산 시뮬레이션 수행
- 최적의 센서 배치를 도출하여 안전 관리의 효율성 극대화
- VTK 기반 워크플로우 시각화 플랫폼 구축

## 🚀 기술 스택
- **Python 3.10** - 메인 개발 언어
- **PySide6** - Qt 기반 GUI 프레임워크
- **VTK** - 3D 시각화 라이브러리
- **Chama** - 센서 최적화 라이브러리
- **NumPy + Pandas** - 수치 연산 및 데이터 처리

### 웹 실행 방법

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