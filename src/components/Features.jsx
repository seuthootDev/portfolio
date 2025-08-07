import React, { useState } from 'react';

// 기능 데이터는 변동이 없으므로 컴포넌트 외부로 분리
const features = [
  {
    title: '3D 모델 시각화',
    description: 'VTK를 활용한 고성능 3D 렌더링으로 산업 시설의 복잡한 구조를 직관적으로 표현합니다.',
    icon: 'fas fa-cube',
    color: 'blue',
    image: 'images/1.png',
    subimage1: 'images/1-1.png',
    subimage2: 'images/1-2.png' // 예시 이미지 URL
  },
  {
    title: 'CFD 시뮬레이션',
    description: 'OpenFOAM 기반의 전산유체역학 시뮬레이션으로 가스 확산 패턴을 정확하게 예측합니다.',
    icon: 'fas fa-wind',
    color: 'green',
    image: 'images/2.png',
    subimage1: 'images/2-1.png',
    subimage2: 'images/2-2.png' // 예시 이미지 URL
  },
  {
    title: '센서 최적화',
    description: 'Chama 라이브러리를 활용한 센서 배치 최적화로 탐지 효율을 극대화합니다.',
    icon: 'fas fa-search-location',
    color: 'orange',
    image: 'images/3.png',
    subimage1: 'images/3-1.png',
    subimage2: 'images/3-2.png' // 예시 이미지 URL
  },
  {
    title: '워크플로우',
    description: '노드 기반 워크플로우로 복잡한 분석 과정을 시각적으로 구성할 수 있습니다.',
    icon: 'fas fa-project-diagram',
    color: 'purple',
    image: 'images/4.png',
    subimage1: 'images/4-1.png',
    subimage2: 'images/4-2.png' // 예시 이미지 URL
  },
  {
    title: '실시간 모니터링',
    description: '실시간 데이터 연동으로 시뮬레이션 결과를 즉시 확인하고 분석할 수 있습니다.',
    icon: 'fas fa-chart-line',
    color: 'red',
    image: 'images/5.png',
    subimage1: 'images/5-1.png',
    subimage2: 'images/5-2.png' // 예시 이미지 URL
  },
  {
    title: '사용자 친화적 UI',
    description: 'PySide6 기반의 직관적인 사용자 인터페이스로 전문가가 아닌 사용자도 쉽게 활용할 수 있습니다.',
    icon: 'fas fa-users',
    color: 'teal',
    image: 'images/6.png',
    subimage1: 'images/6-1.png',
    subimage2: 'images/6-2.png' // 예시 이미지 URL
  },
  {
    title: '데이터 처리',
    description: 'STL 파일 로딩, 후보 감지기 생성, 누출 시나리오 등 다양한 데이터 처리 기능을 제공합니다.',
    icon: 'fas fa-database',
    color: 'indigo',
    image: 'images/7.png',
    subimage1: 'images/7-1.png',
    subimage2: 'images/7-2.png' // 예시 이미지 URL
  },
  {
    title: '자동화 시스템',
    description: '위젯 간 자동 연결 시스템으로 복잡한 워크플로우를 자동으로 구성할 수 있습니다.',
    icon: 'fas fa-cogs',
    color: 'pink',
    image: 'images/8.png',
    subimage1: 'images/8-1.png',
    subimage2: 'images/8-2.png' // 예시 이미지 URL
  },
];

const Features = () => {
  // 팝업에 표시할 기능을 관리하는 State
  const [selectedFeature, setSelectedFeature] = useState(null);

  // 팝업 열기
  const openPopup = (feature) => {
    setSelectedFeature(feature);
  };

  // 팝업 닫기
  const closePopup = () => {
    setSelectedFeature(null);
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">주요 기능</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            DAS3D 시스템의 핵심 기능들을 소개합니다. 각 기능은 독립적인 위젯으로 구현되어 
            워크플로우를 통해 유연하게 조합할 수 있습니다.
          </p>
        </div>

        {/* 그리드 레이아웃 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer
                         bg-gradient-to-br from-${feature.color}-50 to-${feature.color}-100`}
              onClick={() => openPopup(feature)}
            >
                             {/* 이미지 썸네일 */}
               <div className={`mb-4 rounded-lg overflow-hidden border-2 h-32 bg-gray-50 relative border-${feature.color}-200`}>
                 <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-black bg-opacity-15 flex items-center justify-center">
                   <div className="text-white text-sm font-medium">클릭해서 확대</div>
                 </div>
               </div>
              
              <div className="flex items-center mb-2">
                <div className={`w-10 h-10 bg-${feature.color}-500 rounded-full flex items-center justify-center mr-3`}>
                  <i className={`${feature.icon} text-white text-lg`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
            {/* 팝업 모달 */}
      {selectedFeature && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[95vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-4xl font-bold text-gray-800">{selectedFeature.title}</h3>
                <button 
                  onClick={closePopup}
                  className="text-gray-500 hover:text-gray-800 transition-colors"
                >
                  <i className="fas fa-times text-3xl"></i>
                </button>
              </div>
              
              {/* 이미지와 설명을 나란히 배치 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <div className={`w-full h-80 bg-gray-50 border-2 rounded-lg flex items-center justify-center border-${selectedFeature.color}-200 overflow-hidden`}>
                    <img src={selectedFeature.image} alt={selectedFeature.title} className="w-full h-full object-cover" />
                  </div>
                  {/* 추가 이미지 공간 */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className={`h-40 bg-gray-50 border-2 rounded-lg flex items-center justify-center border-${selectedFeature.color}-200`}>
                      <img src={selectedFeature.subimage1} alt={selectedFeature.title} className="w-full h-full object-cover" />
                    </div>
                    <div className={`h-40 bg-gray-50 border-2 rounded-lg flex items-center justify-center border-${selectedFeature.color}-200`}>
                      <img src={selectedFeature.subimage2} alt={selectedFeature.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-2xl font-semibold mb-4 text-gray-800">기능 설명</h4>
                    <p className="text-gray-700 leading-relaxed text-lg">{selectedFeature.description}</p>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h4 className="text-xl font-semibold mb-3 text-gray-800">기술 스택</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedFeature.title === '3D 모델 시각화' && 'VTK 라이브러리를 사용해 복잡한 3D 데이터를 효율적으로 렌더링하고 사용자 인터페이스와 상호작용합니다.'}
                      {selectedFeature.title === 'CFD 시뮬레이션' && 'OpenFOAM 기반의 병렬 처리를 통해 대규모 시뮬레이션을 빠르게 수행하며, 결과 데이터를 시각화합니다.'}
                      {selectedFeature.title === '센서 최적화' && 'Chama 라이브러리 외에 다양한 최적화 알고리즘을 적용하여 최적의 센서 위치를 자동으로 찾아냅니다.'}
                      {selectedFeature.title === '워크플로우' && '노드 기반의 그래픽 인터페이스를 통해 사용자가 분석 파이프라인을 드래그 앤 드롭으로 손쉽게 구성할 수 있습니다.'}
                      {selectedFeature.title === '실시간 모니터링' && 'MQTT 등 실시간 통신 프로토콜을 활용하여 현장 데이터를 수신하고 시뮬레이션 결과와 비교 분석합니다.'}
                      {selectedFeature.title === '사용자 친화적 UI' && 'PySide6의 Qt Designer를 사용해 디자인된 인터페이스는 직관적이며, 사용자 맞춤형 대시보드 기능을 제공합니다.'}
                      {selectedFeature.title === '데이터 처리' && '다양한 포맷의 3D 모델(STL, OBJ)과 센서 데이터를 처리하며, 데이터 전처리 및 후처리 모듈을 포함합니다.'}
                      {selectedFeature.title === '자동화 시스템' && '위젯 간의 데이터 흐름을 자동으로 감지하고 연결하여, 반복적인 작업 과정을 최소화합니다.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Features;