import React from 'react';

const Demo = () => {
  const handleImageError = (e) => {
    e.target.style.display = 'none';
  };

  return (
    <section className="min-h-[80vh] bg-gray-50 py-6">
      <div className="container mx-auto px-8">
        
        {/* Demo Video - 상단에 크게 배치 */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">시스템 데모 영상</h3>
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <video 
              controls 
              className="w-full h-full object-cover rounded-lg"
            >
              <source src="https://res.cloudinary.com/dvnfrjqcr/video/upload/v1755580144/123_hokgn7.mp4" type="video/mp4" />
              해당 브라우저는 동영상을 지원하지 않습니다.
            </video>
          </div>
          <div className="mt-4">
            <h4 className="font-bold text-gray-800 mb-2">영상 과정 설명</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 3D 모델 로딩 및 시각화</li>
              <li>• 센서 그리드 생성</li>
              <li>• 확산 데이터 임포트</li>
              <li>• 센서 배치 최적화 및 배치좌표 시각화</li>
            </ul>
          </div>
        </div>
        
        {/* Screenshots - 2x2 그리드로 배치 */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">기능별 데모 영상</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 스크린샷 1 - 메인 인터페이스 */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-bold text-gray-800 mb-3">워크플로우</h4>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754621161/123_yyljl7.gif"
                  alt="워크플로우"
                  className="w-full h-full object-contain cursor-pointer"
                  onError={handleImageError}
                  onClick={() => window.open("https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754621161/123_yyljl7.gif", '_blank')}
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">노드 기반 워크플로우를 구성하고 실행하는 화면</p>
            </div>
            
            {/* 스크린샷 2 - 워크플로우 에디터 */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-bold text-gray-800 mb-3">컨투어</h4>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754534421/5.gif"
                  alt="컨투어"
                  className="w-full h-full object-contain cursor-pointer"
                  onError={handleImageError}
                  onClick={() => window.open("https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754534421/5.gif", '_blank')}
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">가스 농도 컨투어 맵을 통해 위험 구역을 시각화</p>
            </div>
            
            {/* 스크린샷 3 - 3D 시각화 */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-bold text-gray-800 mb-3">클리핑</h4>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754555726/7-1.gif"
                  alt="클리핑"
                  className="w-full h-full object-contain cursor-pointer"
                  onError={handleImageError}
                  onClick={() => window.open("https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754555726/7-1.gif", '_blank')}
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">3D 모델을 절단해 내부 구조를 확인하는 클리핑 기능</p>
            </div>
            
            {/* 스크린샷 4 - 대시보드 */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-bold text-gray-800 mb-3">도면편집</h4>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754555727/7-2.gif"
                  alt="도면편집"
                  className="w-full h-full object-contain cursor-pointer"
                  onError={handleImageError}
                  onClick={() => window.open("https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754555727/7-2.gif", '_blank')}
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">트랙볼 등 입력 장치를 이용한 오브젝트 변환 및 추가·삭제</p>
            </div>

            {/* 스크린샷 5 - 가스 클라우드 */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-bold text-gray-800 mb-3">가스 클라우드</h4>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754624662/123_gec0gw.gif"
                  alt="가스 클라우드"
                  className="w-full h-full object-contain cursor-pointer"
                  onError={handleImageError}
                  onClick={() => window.open("https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754624662/123_gec0gw.gif", '_blank')}
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">가스 확산 데이터를 클라우드 형태로 시각화</p>
            </div>

            {/* 스크린샷 6 - 대시보드 */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-bold text-gray-800 mb-3">대시보드</h4>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754629043/123_mdbw3b.gif"
                  alt="대시보드"
                  className="w-full h-full object-contain cursor-pointer"
                  onError={handleImageError}
                  onClick={() => window.open("https://res.cloudinary.com/dvnfrjqcr/image/upload/v1754629043/123_mdbw3b.gif", '_blank')}
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">케이스 별 2가지 포뮬레이션 기반 분석 결과 확인</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
