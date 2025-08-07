import React from 'react';

const Conclusion = () => {
  return (
    <section className="min-h-[30vh] bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 text-white py-16">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">프로젝트 결론</h2>
          <p className="text-blue-100 max-w-3xl mx-auto">
            DAS3D 프로젝트를 통해 산업 시설의 안전 관리를 위한 혁신적인 3D 기반 가스 누출 감지 시스템을 성공적으로 개발했습니다.
          </p>
        </div>
        
        {/* Contact Information */}
        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">연락처</h3>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center">
                <i className="fas fa-user mr-2"></i>
                <span>정승훈</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                <span>seuthootDev@gmail.com</span>
              </div>
              <div className="flex items-center">
                <i className="fab fa-github mr-2"></i>
                <span>github.com/seuthootDev</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
