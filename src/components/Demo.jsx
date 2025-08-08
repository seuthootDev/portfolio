import React from 'react';

const Demo = () => {
  return (
    <section className="min-h-[60vh] bg-gray-50 py-16">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">시스템 데모</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            DAS3D 시스템의 실제 동작을 보여주는 데모 영상과 스크린샷을 제공합니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Demo Video */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">시스템 데모 영상</h3>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <i className="fas fa-play-circle text-6xl text-gray-400 mb-4"></i>
                <p className="text-gray-600">데모 영상이 여기에 표시됩니다</p>
                <p className="text-sm text-gray-500 mt-2">시스템 동작 과정을 보여주는 영상</p>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="font-bold text-gray-800 mb-2">주요 기능</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 3D 모델 로딩 및 시각화</li>
                <li>• 가스 확산 시뮬레이션 실행</li>
                <li>• 센서 배치 최적화 과정</li>
                <li>• 워크플로우 구성 및 실행</li>
              </ul>
            </div>
          </div>
          
          {/* Screenshots */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">시스템 스크린샷</h3>
            <div className="space-y-4">
              <div className="bg-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-2">메인 인터페이스</h4>
                <div className="aspect-video bg-gray-300 rounded flex items-center justify-center">
                  <i className="fas fa-desktop text-2xl text-gray-500"></i>
                  <img
                    src="https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754533823/1123.png"
                    alt="프로젝트 개요 이미지"
                    className="max-w-full max-h-full object-contain"
                    onError={handleImageError}
                  />
                </div>
              </div>
              
              <div className="bg-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-2">워크플로우 에디터</h4>
                <div className="aspect-video bg-gray-300 rounded flex items-center justify-center">
                  <i className="fas fa-project-diagram text-2xl text-gray-500"></i>
                </div>
              </div>
              
              <div className="bg-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-2">3D 시각화</h4>
                <div className="aspect-video bg-gray-300 rounded flex items-center justify-center">
                  <i className="fas fa-cube text-2xl text-gray-500"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
