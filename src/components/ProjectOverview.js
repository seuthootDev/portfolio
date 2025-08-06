import React from 'react';

const ProjectOverview = () => {
  return (
    <section className="min-h-[50vh] bg-white py-16">
      <div className="container mx-auto px-8">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row min-h-[50vh]">
          {/* Left Column - Purpose and Image */}
          <div className="w-full lg:w-1/2 lg:pr-6 flex flex-col mb-8 lg:mb-0">
            {/* Purpose Section */}
            <div className="mb-6">
              <div className="bg-white p-5 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="icon-circle bg-blue-100 mr-6">
                    <i className="fas fa-bullseye text-3xl text-blue-600"></i>
                  </div>
                  <h2 className="text-xl font-bold text-blue-700">목적</h2>
                </div>
                <p className="text-base text-gray-700 mb-4">
                  DAS3D는 산업 시설 내 가스 누출 사고를 사전에 예방하기 위해 개발된 3D 기반의
                  <span className="font-semibold">CFD 시뮬레이션 센서 배치 최적화 시스템</span>입니다.
                </p>
                <p className="text-base text-gray-700">
                  본 프로젝트의 핵심 목표는 <span className="text-blue-600 font-semibold">3D 도면을 기반으로 가스 확산 시뮬레이션을 수행</span>하고, 
                  <span className="text-green-600 font-semibold">최적의 센서 배치를 도출</span>하여 
                  안전 관리의 효율성을 극대화하는 것입니다.
                </p>
              </div>
            </div>
            
            {/* Image Section */}
            <div className="flex-grow">
              <div className="image-container h-full">
                <div className="w-full h-full border-2 border-blue-400 rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    src="/images/1.png"
                    alt="프로젝트 개요 이미지"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Core Functions */}
          <div className="w-full lg:w-1/2 lg:pl-6">
            <h2 className="text-xl font-bold text-blue-700 mb-4">핵심 기능</h2>
            <div className="space-y-3">
              {/* Function 1 */}
              <div className="feature-card feature-card-blue bg-white p-4 rounded-lg shadow-md flex">
                <div className="icon-circle bg-blue-100 mr-4 flex-shrink-0">
                  <i className="fas fa-cube text-2xl text-blue-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-700 mb-2">3D 도면 처리 및 시각화</h3>
                  <p className="text-sm text-gray-700">
                    산업 시설의 3D 도면을 로드하고, 
                    VTK 기술을 이용하여 시각화합니다. 
                    사용자는 3D 모델을 직관적으로 조작하며 
                    분석할 수 있습니다.
                  </p>
                </div>
              </div>
              
              {/* Function 2 */}
              <div className="feature-card feature-card-green bg-white p-4 rounded-lg shadow-md flex">
                <div className="icon-circle bg-green-100 mr-4 flex-shrink-0">
                  <i className="fas fa-wind text-2xl text-green-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-green-700 mb-2">가스 확산 시뮬레이션</h3>
                  <p className="text-sm text-gray-700">
                    OpenFOAM 전산유체역학(CFD) 모델을 
                    사용하여 시간에 따른 가스의 3차원 농도 분포 
                    데이터를 계산합니다.
                  </p>
                </div>
              </div>
              
              {/* Function 3 */}
              <div className="feature-card feature-card-orange bg-white p-4 rounded-lg shadow-md flex">
                <div className="icon-circle bg-orange-100 mr-4 flex-shrink-0">
                  <i className="fas fa-search-location text-2xl text-orange-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-orange-700 mb-2">센서 배치 최적화</h3>
                  <p className="text-sm text-gray-700">
                    Chama 라이브러리를 활용하여 최소한의 비용으로 
                    최대의 탐지 효율을 달성하거나, 평균 탐지 시간을 
                    최소화하는 최적의 센서 위치를 계산합니다.
                  </p>
                </div>
              </div>
              
              {/* Function 4 */}
              <div className="feature-card feature-card-purple bg-white p-4 rounded-lg shadow-md flex">
                <div className="icon-circle bg-purple-100 mr-4 flex-shrink-0">
                  <i className="fas fa-project-diagram text-2xl text-purple-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-purple-700 mb-2">워크플로우 내 실시간 데이터 연동</h3>
                  <p className="text-sm text-gray-700">
                    노드 기반 워크플로우를 통해 복잡한 시뮬레이션 
                    과정을 손쉽게 구성하고, 위젯 간의 실시간 
                    데이터 동기화로 결과를 즉시 확인할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
