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
    icon: 'fas fa-project-diagram',
    color: 'blue',
    image: 'https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754553881/1-3.png',
    subimage1: 'https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754553799/1.png',
    subimage2: 'https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754553815/1-1.png'
  },
  {
    title: '3D 모델 시각화',
    description: 'VTK를 활용한 고성능 3D 렌더링으로 산업 시설의 복잡한 구조를 직관적으로 표현합니다.',
    icon: 'fas fa-cube',
    color: 'green',
    image: 'https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754554450/2-2.png',
    subimage1: 'https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754554449/2-1.png',
    subimage2: 'https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754554451/2-3.png'
  },
  {
    title: '센서 최적화',
    description: 'Chama 라이브러리를 활용한 센서 배치 최적화로 탐지 효율을 극대화합니다.',
    icon: 'fas fa-search-location',
    color: 'orange',
    image: 'https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754554853/3-1.png',
    subimage1: '/images/1.png',
    subimage2: '/images/1.png'
  },
  {
    title: '가스 클라우드 시각화',
    description: '3D 가스 확산 시뮬레이션 결과를 직관적인 클라우드 형태로 시각화합니다.',
    icon: 'fas fa-cloud',
    color: 'purple',
    image: '/images/1.png',
    subimage1: '/images/1.png',
    subimage2: '/images/1.png'
  },
  {
    title: '컨투어 시각화',
    description: '가스 농도 분포를 컨투어 맵으로 표현하여 위험 구역을 명확하게 표시합니다.',
    icon: 'fas fa-chart-area',
    color: 'red',
    image: '/images/1.png',
    subimage1: '/images/1.png',
    subimage2: '/images/1.png'
  },
  {
    title: '클립퍼',
    description: '3D 모델의 특정 영역을 클리핑하여 내부 구조를 자세히 분석할 수 있습니다.',
    icon: 'fas fa-cut',
    color: 'teal',
    image: '/images/1.png',
    subimage1: '/images/1.png',
    subimage2: '/images/1.png'
  },
  {
    title: '대시보드',
    description: '시뮬레이션 결과와 센서 데이터를 통합하여 실시간 모니터링 대시보드를 제공합니다.',
    icon: 'fas fa-tachometer-alt',
    color: 'indigo',
    image: 'https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754555365/5-3.png',
    subimage1: 'https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754555364/5-1.png',
    subimage2: 'https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754555366/5-2.png'
  },
  {
    title: '도면 편집',
    description: '3D 모델의 특정 영역을 클리핑하여 내부 구조를 자세히 분석할 수 있습니다.',
    icon: 'fas fa-pencil-ruler',
    color: 'pink',
    image: 'https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754555353/4-1.png',
    subimage1: '/images/1.png',
    subimage2: '/images/1.png'
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
                         ${getColorClasses(feature.color, 'bgTo')}`}
              onClick={() => openPopup(feature)}
            >
                             {/* 이미지 썸네일 */}
               <div className={`mb-4 rounded-lg overflow-hidden border-2 h-32 bg-gray-50 relative ${getColorClasses(feature.color, 'border')}`}>
                 <img 
                   src={feature.image} 
                   alt={feature.title} 
                   className="w-full h-full object-contain" 
                   onError={handleImageError}
                 />
                 <div className="absolute inset-0 bg-black bg-opacity-15 flex items-center justify-center">
                   <div className="text-white text-sm font-medium">클릭해서 확대</div>
                 </div>
               </div>
              
              <div className="flex items-center mb-2">
                <div className={`w-10 h-10 ${getColorClasses(feature.color, 'icon')} rounded-full flex items-center justify-center mr-3`}>
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
                  <div className={`w-full h-80 bg-gray-50 border-2 rounded-lg flex items-center justify-center ${getColorClasses(selectedFeature.color, 'border')} overflow-hidden cursor-pointer`}>
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
                    <div className={`h-40 bg-gray-50 border-2 rounded-lg flex items-center justify-center ${getColorClasses(selectedFeature.color, 'border')} cursor-pointer`}>
                      <img 
                        src={selectedFeature.subimage1} 
                        alt={selectedFeature.title} 
                        className="w-full h-full object-contain" 
                        onError={handleImageError}
                        onClick={() => window.open(selectedFeature.subimage1, '_blank')}
                      />
                    </div>
                    <div className={`h-40 bg-gray-50 border-2 rounded-lg flex items-center justify-center ${getColorClasses(selectedFeature.color, 'border')} cursor-pointer`}>
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
                    <h4 className="text-2xl font-semibold mb-4 text-gray-800">기능 설명</h4>
                    <p className="text-gray-700 leading-relaxed text-lg">{selectedFeature.description}</p>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h4 className="text-xl font-semibold mb-3 text-gray-800">기술 스택</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedFeature.title === '워크플로우' && '노드 기반 워크플로우로 복잡한 분석 과정을 시각적으로 구성할 수 있습니다.'}
                      {selectedFeature.title === '3D 모델 시각화' && 'VTK를 활용한 고성능 3D 렌더링으로 산업 시설의 복잡한 구조를 직관적으로 표현합니다.'}
                      {selectedFeature.title === '센서 최적화' && 'Chama 라이브러리를 활용한 센서 배치 최적화로 탐지 효율을 극대화합니다.'}
                      {selectedFeature.title === '가스 클라우드 시각화' && '3D 가스 확산 시뮬레이션 결과를 직관적인 클라우드 형태로 시각화합니다.'}
                      {selectedFeature.title === '컨투어 시각화' && '가스 농도 분포를 컨투어 맵으로 표현하여 위험 구역을 명확하게 표시합니다.'}
                      {selectedFeature.title === '클립퍼' && '3D 모델의 특정 영역을 클리핑하여 내부 구조를 자세히 분석할 수 있습니다.'}
                      {selectedFeature.title === '결과 대시보드' && '시뮬레이션 결과와 센서 데이터를 통합하여 실시간 모니터링 대시보드를 제공합니다.'}
                      {selectedFeature.title === '웹 버전' && '데스크톱 애플리케이션을 웹 기반으로 확장하여 원격 접근이 가능합니다.'}
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