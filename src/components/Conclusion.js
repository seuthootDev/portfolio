import React from 'react';

const Conclusion = () => {
  return (
    <section className="min-h-[60vh] bg-gradient-to-br from-blue-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">프로젝트 결론</h2>
          <p className="text-blue-100 max-w-3xl mx-auto">
            DAS3D 프로젝트를 통해 산업 시설의 안전 관리를 위한 혁신적인 3D 기반 가스 누출 감지 시스템을 성공적으로 개발했습니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Key Achievements */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">주요 성과</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-4 mt-1">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
                <div>
                  <h4 className="font-bold">탐지 효율성 향상</h4>
                  <p className="text-blue-100 text-sm">센서 배치 최적화로 40% 향상된 탐지 효율 달성</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-4 mt-1">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
                <div>
                  <h4 className="font-bold">실시간 처리</h4>
                  <p className="text-blue-100 text-sm">워크플로우 기반 실시간 시뮬레이션 및 분석</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-4 mt-1">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
                <div>
                  <h4 className="font-bold">사용자 친화적 인터페이스</h4>
                  <p className="text-blue-100 text-sm">직관적인 3D 시각화 및 워크플로우 인터페이스</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-4 mt-1">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
                <div>
                  <h4 className="font-bold">확장 가능한 아키텍처</h4>
                  <p className="text-blue-100 text-sm">모듈화된 4계층 구조로 유지보수성 및 확장성 확보</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Future Plans */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">향후 계획</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-4 mt-1">
                  <i className="fas fa-rocket text-white text-xs"></i>
                </div>
                <div>
                  <h4 className="font-bold">AI/ML 통합</h4>
                  <p className="text-blue-100 text-sm">머신러닝을 활용한 예측 모델 개발</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-4 mt-1">
                  <i className="fas fa-rocket text-white text-xs"></i>
                </div>
                <div>
                  <h4 className="font-bold">클라우드 배포</h4>
                  <p className="text-blue-100 text-sm">클라우드 기반 서비스로 확장</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-4 mt-1">
                  <i className="fas fa-rocket text-white text-xs"></i>
                </div>
                <div>
                  <h4 className="font-bold">다양한 산업 적용</h4>
                  <p className="text-blue-100 text-sm">화학, 석유, 가스 등 다양한 산업 분야 적용</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-4 mt-1">
                  <i className="fas fa-rocket text-white text-xs"></i>
                </div>
                <div>
                  <h4 className="font-bold">실시간 모니터링</h4>
                  <p className="text-blue-100 text-sm">IoT 센서와 연동한 실시간 모니터링 시스템</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">연락처</h3>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center">
                <i className="fas fa-user mr-2"></i>
                <span>정승훈</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                <span>seuthootDev@gmail.com</span>
              </div>
              <div className="flex items-center">
                <i className="fab fa-github mr-2"></i>
                <span>github.com/seuthootDev</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
