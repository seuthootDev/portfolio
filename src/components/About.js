import React from 'react';

const About = () => {
  return (
    <section className="min-h-[60vh] bg-gray-100 py-16">
      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row min-h-[50vh]">
          {/* Left Column - Profile */}
          <div className="w-full lg:w-1/3 flex flex-col items-center justify-center lg:pr-8 mb-8 lg:mb-0">
            <div className="content-box w-full p-8 flex flex-col items-center">
              <div className="w-41 h-41 rounded-full bg-blue-100 flex items-center justify-center mb-6 border-4 border-blue-500 overflow-hidden">
                <img
                  src="https://github.com/seuthootDev.png" 
                  alt="정승훈 프로필"
                  className="w-full h-full object-cover"
                  fetchPriority="high"
                  decoding="async"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <i className="fas fa-user text-6xl text-blue-500 absolute" style={{display: 'none'}}></i>
              </div>
              <h2 className="text-3xl font-bold text-blue-700 mb-2">정승훈</h2>
              <p className="text-xl text-blue-600 mb-4">소프트웨어 개발자</p>
              <div className="w-20 h-1 bg-orange-500 mb-4"></div>
              <p className="text-center text-gray-700">
                DAS3D 프로젝트의 주요 개발자로<br/>
                3D 가스 누출 감지 시스템의<br/>
                개발 및 유지보수에 참여했습니다.
              </p>
            </div>
          </div>
          
          {/* Right Column - Skills and Experience */}
          <div className="w-full lg:w-2/3 lg:pl-8">
            <div className="content-box h-full p-8">
              <h3 className="text-2xl font-bold text-blue-700 mb-6">기술 스택 및 역할</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="skill-item flex items-start p-4 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-laptop-code text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-700">VTK</h4>
                    <p className="text-gray-700">3D 모델, CFD 가스 클라우드,<br/> 컨투어 시각화 및 인터랙션 구현</p>
                  </div>
                </div>
                <div className="skill-item flex items-start p-4 bg-green-50 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-project-diagram text-green-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-700">Workflow Engine</h4>
                    <p className="text-gray-700">노드 기반 워크플로우<br/>시스템 개발</p>
                  </div>
                </div>
                <div className="skill-item flex items-start p-4 bg-orange-50 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-cogs text-orange-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-700">센서 배치 최적화</h4>
                    <p className="text-gray-700">Chama를 활용한 가스 감지기<br/> 배치 최적화 시스템</p>
                  </div>
                </div>
                <div className="skill-item flex items-start p-4 bg-purple-50 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-users text-purple-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-purple-700">UX/UI</h4>
                    <p className="text-gray-700">직관적인 사용자 인터페이스<br/>및 경험 설계</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-blue-700 mb-3">프로젝트 기여</h3>
                <p className="text-gray-700">
                DAS3D 프로젝트에서 3D 시각화 기술과<br/>
                센서 배치 최적화 알고리즘을 중심으로<br/>
                개발을 진행하였으며, 전체 시스템의<br/>
                사용자 경험(UX)과 인터페이스(UI)를<br/>
                직접 설계하였습니다.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
