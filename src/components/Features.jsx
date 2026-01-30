import React, { useState } from 'react';

// 색상 클래스를 명시적으로 정의하는 헬퍼 함수
const getColorClasses = (color, type) => {
  const colorMap = {
    blue: {
      bg: 'bg-blue-50',
      bgTo: 'bg-gradient-to-br from-blue-50 to-blue-100',
      border: 'border-blue-200',
      icon: 'bg-blue-500',
      text: 'text-blue-600'
    },
    green: {
      bg: 'bg-green-50',
      bgTo: 'bg-gradient-to-br from-green-50 to-green-100',
      border: 'border-green-200',
      icon: 'bg-green-500',
      text: 'text-green-600'
    },
    orange: {
      bg: 'bg-orange-50',
      bgTo: 'bg-gradient-to-br from-orange-50 to-orange-100',
      border: 'border-orange-200',
      icon: 'bg-orange-500',
      text: 'text-orange-600'
    },
    purple: {
      bg: 'bg-purple-50',
      bgTo: 'bg-gradient-to-br from-purple-50 to-purple-100',
      border: 'border-purple-200',
      icon: 'bg-purple-500',
      text: 'text-purple-600'
    },
    red: {
      bg: 'bg-red-50',
      bgTo: 'bg-gradient-to-br from-red-50 to-red-100',
      border: 'border-red-200',
      icon: 'bg-red-500',
      text: 'text-red-600'
    },
    teal: {
      bg: 'bg-teal-50',
      bgTo: 'bg-gradient-to-br from-teal-50 to-teal-100',
      border: 'border-teal-200',
      icon: 'bg-teal-500',
      text: 'text-teal-600'
    },
    indigo: {
      bg: 'bg-indigo-50',
      bgTo: 'bg-gradient-to-br from-indigo-50 to-indigo-100',
      border: 'border-indigo-200',
      icon: 'bg-indigo-500',
      text: 'text-indigo-600'
    },
    pink: {
      bg: 'bg-pink-50',
      bgTo: 'bg-gradient-to-br from-pink-50 to-pink-100',
      border: 'border-pink-200',
      icon: 'bg-pink-500',
      text: 'text-pink-600'
    }
  };
  
  return colorMap[color]?.[type] || '';
};

// 기능 데이터는 변동이 없으므로 컴포넌트 외부로 분리
const features = [
  {
    title: '워크플로우',
    description: '노드 기반 워크플로우로 복잡한 분석 과정을 시각적으로 구성할 수 있습니다.',
    subdescription1: '각 위젯은 독립적으로 실행되며, 데이터 흐름을 시각적으로 추적할 수 있어 분석 과정의 가독성과 효율성이 향상됩니다.',
    subdescription2: '사용자는 노드를 자유롭게 추가, 연결, 수정할 수 있어 다양한 분석 시나리오를 유연하게 구성할 수 있습니다.',
    subdescription3: '워크플로우 엔진은 위젯 간 데이터 흐름을 관리하고, 시각화 위젯으로의 데이터 전달을 자동화합니다.',
    icon: 'fas fa-project-diagram',
    color: 'blue',
    image: 'https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754553881/1-3.png',
    subimage1: 'https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754553799/1.png',
    subimage2: 'https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754553815/1-1.png'
  },
  {
    title: '3D 모델 시각화',
    description: 'VTK를 활용한 고성능 3D 렌더링으로 산업 시설의 복잡한 구조를 직관적으로 표현합니다.',
    subdescription1: '확대/축소, 회전 등 상호작용 기능을 제공하여 다양한 각도에서 모델을 분석할 수 있습니다.',
    subdescription2: '리스케일링, 회전 변환 등으로 프로젝트 기준에 맞게 모델을 조정할 수 있습니다.',
    subdescription3: '마우스 조작 등 인터랙션을 지원하며, UI 조작이 즉시 렌더링 창에 반영됩니다.',
    icon: 'fas fa-cube',
    color: 'green',
    image: 'https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754554450/2-2.png',
    subimage1: 'https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754554449/2-1.png',
    subimage2: 'https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754554451/2-3.png'
  },
  {
    title: '센서 최적화',
    description: 'Chama 라이브러리를 활용한 센서 배치 최적화로 탐지 효율을 극대화합니다.',
    subdescription1: '탐지 범위와 환경 변수를 종합적으로 고려하여 최소한의 센서로 최대 커버리지를 확보합니다.',
    subdescription2: '시뮬레이션 결과를 기반으로 최적 배치안을 자동으로 제안합니다.',
    subdescription3: '비동기 병렬 처리를 통해 여러 케이스를 동시에 최적화할 수 있습니다.',
    icon: 'fas fa-search-location',
    color: 'orange',
    image: 'https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754620354/6%EC%B8%B52_c5pqvd.png',
    subimage1: 'https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754624911/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2025-08-08_12-48-15_igiriy.png',
    subimage2: 'https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754554853/3-1.png'
  },
  {
    title: '가스 클라우드 시각화',
    description: '3D 가스 확산 시뮬레이션 결과를 직관적인 클라우드 형태로 시각화합니다.',
    subdescription1: '가스의 확산 범위와 농도 변화를 반투명 형태로 표현하여 위험 구역을 직관적으로 확인할 수 있습니다.',
    subdescription2: '시간 경과에 따른 변화도 애니메이션으로 재생 가능하여, 사고 시나리오 분석에 활용할 수 있습니다.',
    subdescription3: '원하는 특정 시나리오 또는 전체 시나리오를 선택하여 애니메이션으로 재생할 수 있습니다.',
    icon: 'fas fa-cloud',
    color: 'purple',
    image: 'https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754624654/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2025-08-08_12-43-51_ndpxmm.png',
    subimage1: 'https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754624707/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2025-08-08_12-44-41_dbnez6.png',
    subimage2: 'https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754624857/image_u4fnrg.png'
  },
  {
    title: '컨투어 시각화',
    description: '가스 농도 분포를 컨투어 맵으로 표현하여 위험 구역을 명확하게 표시합니다.',
    subdescription1: '색상 구간별로 농도 수준을 구분해 시각적으로 위험도를 파악할 수 있습니다.',
    subdescription2: '평면 또는 단면을 기준으로 데이터 분포를 분석할 수 있어, 시설 내 특정 구역의 위험도 비교가 가능합니다.',
    subdescription3: '다층 컨투어 맵을 생성하여 시간에 따른 변화 추세를 한눈에 확인할 수 있습니다.',
    icon: 'fas fa-chart-area',
    color: 'red',
    image: 'https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754555354/4-3.png',
    subimage1: 'https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754555353/4-2.png',
    subimage2: 'https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754555375/6-2.png'
  },
  {
    title: '클립퍼',
    description: '3D 모델의 특정 영역을 클리핑하여 내부 구조를 자세히 분석할 수 있습니다.',
    subdescription1: '모델 외부를 잘라내어 내부 장치나 배관 구조를 쉽게 확인할 수 있습니다.',
    subdescription2: '복잡한 구조물의 내부를 단계적으로 노출해 점진적으로 분석할 수 있습니다.',
    subdescription3: '절단된 모델을 익스포트할 수 있으며, 클립퍼 이력을 저장해 이전 버전과 비교할 수 있습니다.',
    icon: 'fas fa-cut',
    color: 'teal',
    image: 'https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754625226/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2025-08-08_12-53-18_vzedt4.png',
    subimage1: 'https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754625129/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2025-08-08_12-51-50_pmq9ud.png',
    subimage2: 'https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754625181/screenshot_20250808_125035_b0ytwi.png'
  },
  {
    title: '대시보드',
    description: '센서 최적화 결과를 시각화한 대시보드를 제공합니다.',
    subdescription1: '주요 지표와 그래프를 한 화면에서 확인할 수 있어 빠른 의사결정이 가능합니다.',
    subdescription2: '분석 인사이트를 제공해 사용자의 이해를 돕습니다.',
    subdescription3: 'PDF와 CSV로 내보낼 수 있습니다.',
    icon: 'fas fa-tachometer-alt',
    color: 'indigo',
    image: 'https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754555365/5-3.png',
    subimage1: 'https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754555364/5-1.png',
    subimage2: 'https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754555366/5-2.png'
  },
  {
    title: '도면 편집',
    description: '3D 모델에 Transform(변환)을 적용해 모델을 쉽게 수정·편집할 수 있습니다.',
    subdescription1: '데이터베이스에 저장된 3D 모델을 불러와 새로운 모델을 생성할 수 있습니다.',
    subdescription2: '빠른 액션 버튼으로 여러 기능을 즉시 실행할 수 있습니다.',
    subdescription3: '사용자가 보유한 3D 모델 파일도 추가로 불러올 수 있습니다.',
    icon: 'fas fa-pencil-ruler',
    color: 'pink',
    image: 'https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754555353/4-1.png',
    subimage1: 'https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754625417/screenshot_20250808_125555_hgy1l6.png',
    subimage2: 'https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754625417/screenshot_20250808_125640_bvjnkr.png'
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

  // 이미지 로딩 에러 처리
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.nextSibling.style.display = 'flex';
  };

  return (
    <section className="bg-[#0f0f14] py-16">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">주요 기능</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            DAS3D 시스템의 핵심 기능들을 소개합니다. 각 기능은 독립적인 위젯으로 구현되어 
            워크플로우를 통해 유연하게 조합할 수 있습니다.
          </p>
        </div>

        {/* 그리드 레이아웃 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col p-6 rounded-lg border border-gray-400/30 bg-gray-800 hover:border-gray-400/50 transition-all duration-300 cursor-pointer"
              onClick={() => openPopup(feature)}
            >
              {/* 이미지 썸네일 */}
               <div className="mb-4 rounded-lg overflow-hidden border-2 h-32 bg-gray-900 relative border-gray-400/30">
                 <img 
                   src={feature.image} 
                   alt={feature.title} 
                   className="w-full h-full object-contain" 
                   onError={handleImageError}
                 />
                 <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                   <div className="text-white text-sm font-medium">클릭해서 확대</div>
                 </div>
               </div>
              
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-gray-500/20 border border-gray-400/40 rounded-full flex items-center justify-center mr-3">
                  <i className={`${feature.icon} text-gray-400 text-lg`}></i>
                </div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
            {/* 팝업 모달 */}
      {selectedFeature && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-xl max-w-6xl w-full max-h-[95vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-4xl font-bold text-white">{selectedFeature.title}</h3>
                <button 
                  onClick={closePopup}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fas fa-times text-3xl"></i>
                </button>
              </div>
              
              {/* 이미지와 설명을 나란히 배치 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <div className="w-full h-80 bg-gray-800 border-2 border-green-400/30 rounded-lg flex items-center justify-center overflow-hidden cursor-pointer">
                    <img 
                      src={selectedFeature.image} 
                      alt={selectedFeature.title} 
                      className="w-full h-full object-contain" 
                      onError={handleImageError}
                      onClick={() => window.open(selectedFeature.image, '_blank')}
                    />
                  </div>
                  {/* 추가 이미지 공간 */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-40 bg-gray-800 border-2 border-green-400/30 rounded-lg flex items-center justify-center cursor-pointer">
                      <img 
                        src={selectedFeature.subimage1} 
                        alt={selectedFeature.title} 
                        className="w-full h-full object-contain" 
                        onError={handleImageError}
                        onClick={() => window.open(selectedFeature.subimage1, '_blank')}
                      />
                    </div>
                    <div className="h-40 bg-gray-800 border-2 border-green-400/30 rounded-lg flex items-center justify-center cursor-pointer">
                      <img 
                        src={selectedFeature.subimage2} 
                        alt={selectedFeature.title} 
                        className="w-full h-full object-contain" 
                        onError={handleImageError}
                        onClick={() => window.open(selectedFeature.subimage2, '_blank')}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-2xl font-semibold mb-4 text-white">기능 설명</h4>
                    <p className="text-gray-300 leading-relaxed text-lg">{selectedFeature.description}</p>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <h4 className="text-xl font-semibold mb-3 text-white">작동 방식</h4>
                    <div className="space-y-4">
                      {selectedFeature.subdescription1 && (
                        <p className="text-gray-400 leading-relaxed">{selectedFeature.subdescription1}</p>
                      )}
                      {selectedFeature.subdescription2 && (
                        <p className="text-gray-400 leading-relaxed">{selectedFeature.subdescription2}</p>
                      )}
                      {selectedFeature.subdescription3 && (
                        <p className="text-gray-400 leading-relaxed">{selectedFeature.subdescription3}</p>
                      )}
                    </div>
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