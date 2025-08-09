import React from 'react';

const Conclusion = () => {
  return (
    <section className="min-h-[30vh] bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 text-white py-16">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">프로젝트 요약 / 결론</h2>
          <p className="text-blue-100 max-w-3xl mx-auto">
            DAS3D는 산업 시설의 안전성을 높이기 위한 3D 가스 누출 감지·시각화 플랫폼입니다. 
            워크플로우 설계부터 3D 렌더링, 최적화까지 전 과정을 직접 설계·구현·배포했습니다.
          </p>
        </div>

        {/* 상단 2열: 핵심 성과(7) / 보유 역량(5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 핵심 성과 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 lg:col-span-7">
            <h3 className="text-2xl font-bold mb-4">핵심 성과</h3>
            <ul className="space-y-2 text-blue-100">
              <li>• 위젯 워크플로우 엔진 설계 및 위젯 시스템 구축</li>
              <li>• VTK 기반 3D 시각화(컨투어, 클리핑, 가스 클라우드) 구현</li>
              <li>• Chama 활용 센서 배치 최적화 설계 및 구현</li>
            </ul>
          </div>

          {/* 보유 역량 키워드 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 lg:col-span-5">
            <h3 className="text-2xl font-bold mb-4">보유 역량 키워드</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Python', 'PySide6(QT)', 'VTK', 'React', 'Vite', 'Tailwind','NestJS',
                'FastAPI', 'MongoDB', 'Chama', 'Vercel', 'AWS', '데이터 시각화'
              ].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white/20 text-blue-100 text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 하단 전체 폭: 문의 바 */}
        <div className="mt-8 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-1">함께할 기회를 찾고 있습니다.</h3>
              <p className="text-blue-100 text-sm">백엔드 · 풀스택 분야 제안을 환영합니다.</p>
            </div>
            <div className="flex justify-center items-center gap-3">
              <a
                href="mailto:seuthootDev@gmail.com"
                className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-indigo-500 hover:bg-indigo-400 transition-colors"
                aria-label="이메일 문의"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href="https://github.com/seuthootDev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-white/20 hover:bg-white/30 transition-colors"
                aria-label="GitHub 보기"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
