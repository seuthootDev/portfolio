import React from 'react';

const Implementation = () => {
  return (
    <section className="min-h-[60vh] bg-gray-50 py-16">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">구현 세부사항</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            DAS3D 시스템의 핵심 구현 요소들을 상세히 설명합니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Technical Stack */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">기술 스택</h3>
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <i className="fab fa-python text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Python 3.10</h4>
                  <p className="text-sm text-gray-600">메인 개발 언어</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-green-50 rounded-lg">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-desktop text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">PySide6</h4>
                  <p className="text-sm text-gray-600">Qt 기반 GUI 프레임워크</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-orange-50 rounded-lg">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-cubes text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">VTK</h4>
                  <p className="text-sm text-gray-600">3D 시각화 라이브러리</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-cogs text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Chama</h4>
                  <p className="text-sm text-gray-600">센서 최적화 라이브러리</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Development Process */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">개발 과정</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">요구사항 분석</h4>
                  <p className="text-sm text-gray-600">산업 시설의 가스 누출 감지 요구사항 분석</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">아키텍처 설계</h4>
                  <p className="text-sm text-gray-600">4계층 구조의 시스템 아키텍처 설계</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">위젯 개발</h4>
                  <p className="text-sm text-gray-600">DW/DVW 위젯 모듈 개발</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">워크플로우 엔진</h4>
                  <p className="text-sm text-gray-600">노드 기반 워크플로우 엔진 구현</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">
                  5
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">UI/UX 개발</h4>
                  <p className="text-sm text-gray-600">사용자 친화적 인터페이스 개발</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Implementation;
