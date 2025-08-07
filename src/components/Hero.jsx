import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-[50vh] gradient-bg grid-pattern relative overflow-hidden flex items-center justify-center">
      {/* Decorative nodes and connections to represent workflow */}
      <div className="node bg-green-400 bg-opacity-30" style={{top: '120px', left: '200px'}}></div>
      <div className="node bg-green-400 bg-opacity-30" style={{top: '220px', left: '350px'}}></div>
      <div className="node bg-orange-400 bg-opacity-30" style={{top: '300px', left: '180px'}}></div>
      <div className="node bg-purple-400 bg-opacity-30" style={{top: '400px', left: '320px'}}></div>
      <div className="node bg-green-400 bg-opacity-30" style={{top: '500px', left: '220px'}}></div>
      <div className="connection" style={{top: '140px', left: '220px', width: '150px', transform: 'rotate(20deg)'}}></div>
      <div className="connection" style={{top: '230px', left: '350px', width: '120px', transform: 'rotate(-80deg)'}}></div>
      <div className="connection" style={{top: '300px', left: '200px', width: '140px', transform: 'rotate(50deg)'}}></div>
      <div className="connection" style={{top: '400px', left: '320px', width: '130px', transform: 'rotate(-60deg)'}}></div>
      
      {/* 3D Cube representation using CSS */}
      <div className="absolute right-32 top-1/2 transform -translate-y-1/2">
        <div className="relative w-64 h-64">
          <div className="absolute w-48 h-48 border-2 border-green-400 border-opacity-50 transform rotate-45 translate-x-8"></div>
          <div className="absolute w-48 h-48 border-2 border-green-400 border-opacity-50 transform rotate-45 translate-y-16"></div>
          <div className="absolute w-48 h-48 border-2 border-green-400 border-opacity-50 transform rotate-45 translate-x-16 translate-y-8"></div>
          {/* Gas cloud representation */}
          <div className="absolute w-32 h-32 rounded-full bg-orange-500 bg-opacity-20 animate-pulse" style={{top: '40px', left: '40px'}}></div>
          <div className="absolute w-24 h-24 rounded-full bg-orange-400 bg-opacity-15 animate-pulse" style={{top: '60px', left: '30px'}}></div>
          <div className="absolute w-20 h-20 rounded-full bg-orange-300 bg-opacity-10 animate-pulse" style={{top: '50px', left: '50px'}}></div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="relative w-full h-full flex flex-col justify-center px-24 z-10">
        <div className="mb-4">
          <span className="inline-block bg-green-500 bg-opacity-30 text-green-100 px-4 py-1 rounded-full text-sm font-medium tracking-wider">2023.08 ~ 2025.12</span>
        </div>
        <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
          DAS3D <span className="text-green-400">-</span> 3D 가스 누출 감지 시스템
        </h1>
        <h2 className="text-2xl text-green-300 font-light mb-12">
          VTK 기반 워크플로우 시각화 플랫폼
        </h2>
        <div className="flex items-center mt-1">
          <div className="w-12 h-12 rounded-full bg-green-500 bg-opacity-20 flex items-center justify-center">
            <i className="fas fa-user text-green-300"></i>
          </div>
          <div className="ml-4">
            <p className="text-white text-lg">정승훈</p>
            <p className="text-gray-400 text-sm">소프트웨어 개발자</p>
          </div>
        </div>
        
        
        
      </div>
      {/* Footer with icons representing key technologies */}
      <div className="absolute bottom-20 left-24 right-24 flex justify-between text-gray-400">
          <div className="flex items-center">
            <i className="fab fa-python mr-2"></i>
            <span>Python 3.10</span>
          </div>
          <div className="flex items-center">
            <i className="fas mr-2">QT</i>
            <span>PySide6</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-cubes mr-2"></i>
            <span>VTK</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-chart-line mr-2"></i>
            <span>NumPy + Pandas</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-cogs mr-2"></i>
            <span>Chama</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-database mr-2"></i>
            <span>MongoDB</span>
          </div>
        </div>
    </section>
  );
};

export default Hero;
