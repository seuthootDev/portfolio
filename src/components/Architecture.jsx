import React, { useEffect, useRef } from 'react';
import { FaDesktop, FaProjectDiagram, FaThLarge, FaCheckCircle } from 'react-icons/fa';
import mermaid from 'mermaid';

const Architecture = () => {
  const mermaidRef = useRef(null);
    
    useEffect(() => {
      mermaid.initialize({
        startOnLoad: true,
        theme: 'dark',
        themeVariables: {
          textColor: '#000000',
        background: '#1f2937',
        mainBkg: '#111111',
        },
        flowchart: {
          useMaxWidth: true,
          htmlLabels: true,
          curve: 'basis'
        }
      });
    
      
    if (mermaidRef.current) {
      mermaid.render('mermaid-diagram', `
        flowchart TD
            subgraph UI["사용자 인터페이스 레이어"]
                Main[main.py]
                Style[style.qss]
                WF[WorkFlowWindow]
                VW[VisualizationWindow]
            end
            
            subgraph ENGINE["워크플로우 엔진 레이어"]
                WFS[WorkFlowScene]
                NCM[NodeConnectionManager]
                NC[NodeConnection]
                AC[ArrowConnection]
            end
            
            subgraph WIDGET["위젯 레이어"]
                subgraph "Base 위젯"
                    BW[BaseWidget]
                    BVW[BaseVisualWidget]
                end
                
                subgraph "데이터 처리 위젯"
                    DW1[DWblueprint]
                    DW2[DWcandidate]
                    DW3[DWleakage]
                    DW4[DWdefusionModel]
                    DW5[DWoptimize]
                end
                
                subgraph "시각화 위젯"
                    DVW1[DVWcontour]
                    DVW2[DVWcoverage]
                    DVW3[DVWgascloud]
                end
            end

            %% 레이어 간 연결
            Main --> WF
            Main --> VW
            WF --> WFS
            
            %% 워크플로우 엔진 내부 연결
            WFS --> NCM
            NCM --> NC
            NCM --> AC
            
            %% 위젯 시스템 연결
            WFS --> BW
            WFS --> BVW
            
            %% 상속 관계
            BW -.-> DW1
            BW -.-> DW2
            BW -.-> DW3
            BW -.-> DW4
            BW -.-> DW5
            BVW -.-> DVW1
            BVW -.-> DVW2
            BVW -.-> DVW3
            
            %% 데이터 흐름 (실제 워크플로우)
            DW1 --> |도면 데이터| DW2
            DW2 --> |후보감지기 위치| DW4
            DW3 -.->|누출 시나리오| DW4
            DW4 --> |확산 데이터| DW5
            DW4 --> |확산 데이터| DVW1
            DW4 --> |확산 데이터| DVW2
            DW4 --> |확산 데이터| DVW3
            
            classDef uiLayer fill:#e8f5e8
            classDef engineLayer fill:#e1f5fe
            classDef widgetLayer fill:#f3e5f5
            
            class Main,Style,WF,VW uiLayer
            class WFS,NCM,NC,AC engineLayer
            class BW,BVW,DW1,DW2,DW3,DW4,DW5,DVW1,DVW2,DVW3 widgetLayer
      `).then(({ svg }) => {
        mermaidRef.current.innerHTML = svg;
      });
    }
  }, []);

  return (
    <section className="min-h-[51vh] bg-[#0f0f14] py-16">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold text-white mb-4">Architecture</h2>
        
        {/* Mermaid Diagram */}
        <div className="mb-12">
          <div className="bg-gray-800 border border-gray-400/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">DAS3D 시스템 아키텍처 다이어그램</h3>
            <div ref={mermaidRef} className="w-full overflow-x-auto"></div>
          </div>
        </div>

        {/* Layer Descriptions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* UI Layer */}
          <div className="bg-gray-800 border border-gray-400/30 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-500/20 border border-gray-400/40 rounded-full flex items-center justify-center mr-4">
                <FaDesktop className="text-2xl text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-white">사용자 인터페이스 레이어</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <FaCheckCircle className="text-gray-500 mr-2" />
                <span className="text-sm text-gray-300">main.py: 애플리케이션 진입점</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-gray-500 mr-2" />
                <span className="text-sm text-gray-300">WorkFlowWindow: 좌측 패널 제어</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-gray-500 mr-2" />
                <span className="text-sm text-gray-300">VisualizationWindow: 3D 뷰어</span>
              </div>
            </div>
          </div>

          {/* Workflow Engine Layer */}
          <div className="bg-gray-800 border border-gray-400/30 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-500/20 border border-gray-400/40 rounded-full flex items-center justify-center mr-4">
                <FaProjectDiagram className="text-2xl text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-white">워크플로우 엔진 레이어</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <FaCheckCircle className="text-gray-500 mr-2" />
                <span className="text-sm text-gray-300">WorkFlowScene: 워크플로우 시각화</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-gray-500 mr-2" />
                <span className="text-sm text-gray-300">NodeConnectionManager: 연결 관리</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-gray-500 mr-2" />
                <span className="text-sm text-gray-300">실시간 데이터 동기화</span>
              </div>
            </div>
          </div>

          {/* Widget Layer */}
          <div className="bg-gray-800 border border-gray-400/30 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-500/20 border border-gray-400/40 rounded-full flex items-center justify-center mr-4">
                <FaThLarge className="text-2xl text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-white">위젯 레이어</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <FaCheckCircle className="text-gray-500 mr-2" />
                <span className="text-sm text-gray-300">데이터 처리 위젯 (5개)</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-gray-500 mr-2" />
                <span className="text-sm text-gray-300">시각화 위젯 (3개)</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-gray-500 mr-2" />
                <span className="text-sm text-gray-300">모듈화된 기능</span>
              </div>
            </div>
          </div>
        </div>

        {/* System Features */}
        {/* <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">시스템 특징</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">레이어 분리</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• 관심사 분리: 각 레이어가 독립적인 책임</li>
                <li>• 모듈화: 레이어 간 느슨한 결합</li>
                <li>• 확장성: 새로운 위젯 쉽게 추가</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">데이터 흐름</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• DW to DW 위젯 간 실시간 동기화</li>
                <li>• DW to DVW 자동 연결 시스템</li>
                <li>• 시각화 연동: 설정 변경 시 렌더링 업데이트</li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Architecture;
