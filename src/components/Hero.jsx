import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-[50vh] hero-bg relative overflow-hidden flex items-center justify-center">
      {/* 시뮬레이션 진행을 나타내는 스캔 라인 — "분석/시뮬레이션 실행 중" 의미 */}
      <div className="hero-scan-line z-0" aria-hidden="true" />

      {/* Main content */}
      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col justify-center min-h-[50vh]">
          <div className="mb-4">
            <span className="inline-block bg-green-500/20 border border-green-400/40 text-green-400 px-4 py-1 rounded-full text-sm font-medium tracking-wider">2023.08 ~ 2025.10</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            DAS3D <span className="text-green-400">-</span> 3D 누출 시뮬레이션 및 센서배치 최적화 프로그램
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-green-400 font-light mb-6 md:mb-12">
            QT 기반 WorkFlow 방식의 QUI
          </h2>
          <div className="flex items-center mt-1 mb-15">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-500/20 border border-green-400/40 flex items-center justify-center">
              <i className="fas fa-user text-green-400 text-base md:text-lg"></i>
            </div>
            <div className="ml-4">
              <p className="text-white text-base sm:text-lg">정승훈</p>
              <p className="text-gray-400 text-xs sm:text-sm">소프트웨어 개발자</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer with icons representing key technologies */}
      <div className="absolute bottom-8 md:bottom-10 left-0 right-0">
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
