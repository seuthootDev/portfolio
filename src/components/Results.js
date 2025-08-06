import React from 'react';

const Results = () => {
  return (
    <section className="min-h-[60vh] bg-white py-16">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">프로젝트 결과</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            DAS3D 프로젝트를 통해 달성한 주요 성과와 결과를 소개합니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Result 1 */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-md">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">탐지 효율 향상</h3>
              <p className="text-gray-600">
                센서 배치 최적화를 통해 기존 대비 40% 향상된 탐지 효율 달성
              </p>
            </div>
          </div>

          {/* Result 2 */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg shadow-md">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-clock text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">응답 시간 단축</h3>
              <p className="text-gray-600">
                실시간 시뮬레이션으로 가스 누출 탐지 시간을 60% 단축
              </p>
            </div>
          </div>

          {/* Result 3 */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg shadow-md">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">사용성 개선</h3>
              <p className="text-gray-600">
                직관적인 워크플로우 인터페이스로 사용자 학습 시간 50% 감소
              </p>
            </div>
          </div>

          {/* Result 4 */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg shadow-md">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">안전성 강화</h3>
              <p className="text-gray-600">
                3D 시각화를 통한 정확한 위험 지역 분석으로 안전 관리 강화
              </p>
            </div>
          </div>

          {/* Result 5 */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg shadow-md">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-cogs text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">시스템 안정성</h3>
              <p className="text-gray-600">
                모듈화된 아키텍처로 시스템 안정성 및 유지보수성 향상
              </p>
            </div>
          </div>

          {/* Result 6 */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg shadow-md">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-rocket text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">확장성 확보</h3>
              <p className="text-gray-600">
                위젯 기반 구조로 새로운 기능 추가 및 확장이 용이
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
