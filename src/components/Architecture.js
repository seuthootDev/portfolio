import React from 'react';
import { FaDesktop, FaProjectDiagram, FaThLarge, FaPuzzlePiece, FaCheckCircle } from 'react-icons/fa';

const Architecture = () => {
  return (
    <section className="min-h-[50vh] bg-gray-100 py-16">
      <div className="container mx-auto px-8">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row min-h-[50vh]">
          {/* Left Column - Architecture Diagram */}
          <div className="w-full lg:w-1/2 relative flex flex-col justify-center items-center mb-8 lg:mb-0">
            {/* Layer 1: UI Layer */}
            <div className="layer-box bg-green-100 w-64 p-4 rounded-lg shadow-md mb-4 z-10 hover:transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center">
                <div className="w-15 h-15 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <FaDesktop className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-700">UI Layer</h3>
                  <p className="text-green-600">PySide6 (Qt for Python)</p>
                </div>
              </div>
            </div>
            
            {/* Connector */}
            <div className="w-1 h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
            
            {/* Layer 2: Workflow Engine */}
            <div className="layer-box bg-blue-100 w-64 p-4 rounded-lg shadow-md mb-4 z-10 hover:transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center">
                <div className="w-15 h-15 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <FaProjectDiagram className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-700">Workflow Engine Layer</h3>
                  <p className="text-blue-600">노드 기반 워크플로우</p>
                </div>
              </div>
            </div>
            
            {/* Connector */}
            <div className="w-1 h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
            
            {/* Layer 3: Widget Layer */}
            <div className="layer-box bg-orange-100 w-64 p-4 rounded-lg shadow-md mb-4 z-10 hover:transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center">
                <div className="w-15 h-15 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <FaThLarge className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-orange-700">Widget Layer</h3>
                  <p className="text-orange-600">DW / DVW</p>
                </div>
              </div>
            </div>
            
            {/* Connector */}
            <div className="w-1 h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
            
            {/* Layer 4: External Libraries */}
            <div className="layer-box bg-purple-100 w-64 p-4 rounded-lg shadow-md z-10 hover:transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center">
                <div className="w-15 h-15 bg-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <FaPuzzlePiece className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-700">External Libraries Layer</h3>
                  <p className="text-purple-600">VTK, Chama, NumPy, Pandas</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Detailed Descriptions */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <div className="bg-white rounded-lg shadow-md p-4 h-full">
              <h2 className="text-xl font-bold text-gray-800 mb-3">4계층 구조: 유지보수성과 확장성</h2>
              
              <div className="mb-3">
                <h3 className="text-base font-bold text-green-600 mb-1 flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500" />
                  UI Layer (PySide6)
                </h3>
                <p className="text-gray-700 ml-7">
                  사용자가 시스템과 상호작용하는 최상위 계층으로, 
                  전체적인 그래픽 인터페이스를 담당합니다.
                  PySide6를 사용하여 직관적이고 반응성이 뛰어난 
                  사용자 경험을 제공합니다.
                </p>
              </div>
              
              <div className="mb-5">
                <h3 className="text-lg font-bold text-blue-600 mb-2 flex items-center">
                  <FaCheckCircle className="mr-2 text-blue-500" />
                  Workflow Engine Layer
                </h3>
                <p className="text-gray-700 ml-7">
                  시스템의 두뇌 역할을 하는 핵심 계층입니다. 
                  노드 기반 워크플로우의 생성, 연결, 데이터 흐름을 
                  관리하며, 위젯 간의 실시간 데이터 동기화를 처리합니다. 
                  전체 애플리케이션의 로직과 상태를 제어합니다.
                </p>
              </div>
              
              <div className="mb-5">
                <h3 className="text-lg font-bold text-orange-600 mb-2 flex items-center">
                  <FaCheckCircle className="mr-2 text-orange-500" />
                  Widget Layer (DW/DVW)
                </h3>
                <p className="text-gray-700 ml-7">
                  실제 데이터 처리와 시각화 기능이 모듈화된 
                  위젯 형태로 구현된 계층입니다. 데이터 처리 위젯(DW)은 
                  STL 파일 로딩, 시뮬레이션 실행 등의 연산을 수행하고, 
                  시각화 위젯(DVW)은 그 결과를 3D 모델, 등고선, 
                  애니메이션 등으로 시각화합니다.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-purple-600 mb-2 flex items-center">
                  <FaCheckCircle className="mr-2 text-purple-500" />
                  External Libraries Layer
                </h3>
                <p className="text-gray-700 ml-7">
                  프로젝트의 핵심 기능을 구현하기 위해 사용된 
                  외부 라이브러리 집합입니다. 3D 렌더링(VTK), 
                  수치 연산(NumPy), 데이터 처리(Pandas), 
                  최적화(Chama) 등 전문적인 기능을 제공하여 
                  개발 효율성을 높입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
