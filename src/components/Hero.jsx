import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-[50vh] gradient-bg grid-pattern relative overflow-hidden flex items-center justify-center">
      {/* Decorative nodes and connections - responsive design */}
      {/* Mobile: 3 nodes, Tablet: 4 nodes, Desktop: 5 nodes */}
      <div className="node bg-green-400 bg-opacity-30 hidden sm:block" style={{top: '120px', left: '200px'}}></div>
      <div className="node bg-green-400 bg-opacity-30" style={{top: '220px', left: '350px'}}></div>
      <div className="node bg-orange-400 bg-opacity-30 hidden md:block" style={{top: '300px', left: '180px'}}></div>
      <div className="node bg-purple-400 bg-opacity-30" style={{top: '400px', left: '320px'}}></div>
      <div className="node bg-green-400 bg-opacity-30 hidden lg:block" style={{top: '500px', left: '220px'}}></div>
      
      {/* Connections - responsive visibility */}
      <div className="connection hidden sm:block" style={{top: '140px', left: '220px', width: '150px', transform: 'rotate(20deg)'}}></div>
      <div className="connection hidden md:block" style={{top: '230px', left: '350px', width: '120px', transform: 'rotate(-80deg)'}}></div>
      <div className="connection hidden lg:block" style={{top: '300px', left: '200px', width: '140px', transform: 'rotate(50deg)'}}></div>
      <div className="connection hidden xl:block" style={{top: '400px', left: '320px', width: '130px', transform: 'rotate(-60deg)'}}></div>
      
      {/* 3D Cube representation - responsive design */}
      {/* Mobile: Small 2D square, Tablet: Medium cube, Desktop: Full cube */}
      <div className="absolute right-4 sm:right-8 md:right-16 lg:right-32 top-1/2 transform -translate-y-1/2">
        <div className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 xl:w-64 xl:h-64">
          {/* Mobile: Simple 2D square */}
          <div className="absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 xl:w-48 xl:h-48 border-2 border-green-400 border-opacity-50 transform rotate-45 translate-x-2 sm:translate-x-4 md:translate-x-6 lg:translate-x-8"></div>
          
          {/* Tablet and up: Additional cube faces */}
          <div className="absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 xl:w-48 xl:h-48 border-2 border-green-400 border-opacity-50 transform rotate-45 translate-y-4 sm:translate-y-6 md:translate-y-8 lg:translate-y-12 xl:translate-y-16 hidden sm:block"></div>
          <div className="absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 xl:w-48 xl:h-48 border-2 border-green-400 border-opacity-50 transform rotate-45 translate-x-4 sm:translate-x-6 md:translate-x-8 lg:translate-x-12 xl:translate-x-16 translate-y-2 sm:translate-y-3 md:translate-y-4 lg:translate-y-6 xl:translate-y-8 hidden md:block"></div>
          
          {/* Gas cloud representation - responsive size and animation */}
          <div className="absolute w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-32 xl:h-32 rounded-full bg-orange-500 bg-opacity-20 animate-pulse" style={{top: '8px', left: '8px'}}></div>
          <div className="absolute w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-24 xl:h-24 rounded-full bg-orange-400 bg-opacity-15 animate-pulse" style={{top: '12px', left: '6px'}}></div>
          <div className="absolute w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 xl:w-20 xl:h-20 rounded-full bg-orange-300 bg-opacity-10 animate-pulse" style={{top: '10px', left: '10px'}}></div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col justify-center min-h-[50vh]">
          <div className="mb-4">
            <span className="inline-block bg-green-500 bg-opacity-30 text-green-100 px-4 py-1 rounded-full text-sm font-medium tracking-wider">2023.08 ~ 2025.12</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            DAS3D <span className="text-green-400">-</span> 3D 누출 시뮬레이션 및 센서배치 최적화 프로그램
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-green-300 font-light mb-6 md:mb-12">
            PySide6 + VTK 기반 워크플로우 방식의 QUI
          </h2>
          <div className="flex items-center mt-1">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-500 bg-opacity-20 flex items-center justify-center">
              <i className="fas fa-user text-green-300 text-base md:text-lg"></i>
            </div>
            <div className="ml-4">
              <p className="text-white text-base sm:text-lg">정승훈</p>
              <p className="text-gray-400 text-xs sm:text-sm">소프트웨어 개발자</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer with icons representing key technologies */}
      <div className="absolute bottom-8 md:bottom-20 left-0 right-0">
        <div className="container mx-auto px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-gray-400">
            <div className="flex items-center">
              <i className="fab fa-python mr-1.5 md:mr-2 text-sm md:text-base"></i>
              <span className="text-xs md:text-sm">Python 3.10</span>
            </div>
            <div className="flex items-center">
              <i className="fas mr-1.5 md:mr-2 text-[10px] md:text-base">QT</i>
              <span className="text-xs md:text-sm">PySide6</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-cubes mr-1.5 md:mr-2 text-sm md:text-base"></i>
              <span className="text-xs md:text-sm">VTK</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-chart-line mr-1.5 md:mr-2 text-sm md:text-base"></i>
              <span className="text-xs md:text-sm">NumPy + Pandas</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-cogs mr-1.5 md:mr-2 text-sm md:text-base"></i>
              <span className="text-xs md:text-sm">Chama</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-database mr-1.5 md:mr-2 text-sm md:text-base"></i>
              <span className="text-xs md:text-sm">MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
