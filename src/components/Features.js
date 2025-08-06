import React from 'react';

const Features = () => {
  return (
    <section className="min-h-[60vh] bg-white py-16">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">주요 기능</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            DAS3D 시스템의 핵심 기능들을 소개합니다. 각 기능은 독립적인 위젯으로 구현되어 
            워크플로우를 통해 유연하게 조합할 수 있습니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-cube text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">3D 모델 시각화</h3>
            <p className="text-gray-600">
              VTK를 활용한 고성능 3D 렌더링으로 산업 시설의 복잡한 구조를 
              직관적으로 표현합니다.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-wind text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">CFD 시뮬레이션</h3>
            <p className="text-gray-600">
              OpenFOAM 기반의 전산유체역학 시뮬레이션으로 가스 확산 패턴을 
              정확하게 예측합니다.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-search-location text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">센서 최적화</h3>
            <p className="text-gray-600">
              Chama 라이브러리를 활용한 센서 배치 최적화로 탐지 효율을 
              극대화합니다.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-project-diagram text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">워크플로우</h3>
            <p className="text-gray-600">
              노드 기반 워크플로우로 복잡한 분석 과정을 시각적으로 
              구성할 수 있습니다.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-chart-line text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">실시간 모니터링</h3>
            <p className="text-gray-600">
              실시간 데이터 연동으로 시뮬레이션 결과를 즉시 확인하고 
              분석할 수 있습니다.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-users text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">사용자 친화적 UI</h3>
            <p className="text-gray-600">
              PySide6 기반의 직관적인 사용자 인터페이스로 전문가가 아닌 
              사용자도 쉽게 활용할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
