import React from 'react';
import './AboutSection.css';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">포럼 소개</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              <strong>세대혁신 네트워크 포럼</strong>은 지역 내 2세대 경영인과 창업가들을 위한 네트워크 허브입니다.
              1세대 기업인의 경험과 2세대의 혁신을 연결하여 새로운 경영 패러다임을 만들어 갑니다.
            </p>
            <p>
              충북 MBC와 함께하는 이 포럼은 단순한 행사를 넘어 지속 가능한 비즈니스 네트워크 플랫폼으로
              발전하며, 콘텐츠 제작을 통해 지역 경제 혁신을 이끌어갑니다.
            </p>
          </div>
          
          <div className="about-features">
            <div className="feature-item">
              <div className="feature-icon">🔄</div>
              <h3>세대 간 브릿지</h3>
              <p>1세대와 2세대 경영자 간의 경영 철학과 방식의 차이를 이해하고 연결하는 소통의 장을 제공합니다.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🌐</div>
              <h3>네트워크 허브</h3>
              <p>다양한 산업군의 2세대 기업가들이 서로 교류하며 협업 기회를 발굴할 수 있는 플랫폼입니다.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📺</div>
              <h3>방송 콘텐츠화</h3>
              <p>충북 MBC와 협력하여 포럼 활동을 방송 콘텐츠로 제작, 지역 산업의 변화를 널리 알립니다.</p>
            </div>
          </div>
        </div>
        
        <div id="program" className="program-section">
          <h2 className="section-title">주요 프로그램</h2>
          <p className="section-subtitle">
            1세대와 2세대 경영자 간의 경영 철학과 방식의 연결을 통해 새로운 비즈니스 기회를 창출합니다
          </p>
          <div className="program-grid">
            <div className="program-item">
              <div className="program-header">
                <div className="program-icon">💡</div>
                <h3>세대혁신 포럼</h3>
              </div>
              <p>1세대와 2세대 경영자가 서로의 경영 스타일을 이해하고 공통 접점을 찾는 포럼을 통해 네트워크 구축</p>
              <ul className="program-details">
                <li>경영 철학 공유 및 비교</li>
                <li>세대 간 경영 실험 및 패널 토론</li>
                <li>성공적인 세대 협업 사례 발표</li>
              </ul>
            </div>
            
            <div className="program-item">
              <div className="program-header">
                <div className="program-icon">🔄</div>
                <h3>세대융합 경영 프로그램</h3>
              </div>
              <p>1세대와 2세대가 함께 실무적으로 변화를 적용해보는 맞춤형 프로그램 운영</p>
              <ul className="program-details">
                <li>디지털 트랜스포메이션 부트캠프</li>
                <li>리얼 경영 시뮬레이션</li>
                <li>위기관리 & 실전 협상 트레이닝</li>
              </ul>
            </div>
            
            <div className="program-item">
              <div className="program-header">
                <div className="program-icon">🎯</div>
                <h3>맞춤형 컨설팅</h3>
              </div>
              <p>1세대와 2세대가 협력하여 자신들의 기업에 적용할 액션 플랜을 수립하고 실행을 지원</p>
              <ul className="program-details">
                <li>1:1 멘토링 & 컨설팅</li>
                <li>1세대-2세대 경영 공동 프로젝트</li>
                <li>실제 기업 변화 프로젝트 진행</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div id="benefits" className="benefits-section">
          <h2 className="section-title">기대 효과</h2>
          <p className="section-subtitle">
            포럼 참여를 통해 얻을 수 있는 실질적 가치와 장기적 혁신 효과
          </p>
          <div className="benefits-wrapper">
            <div className="benefit-item">
              <h3>네트워크 강화</h3>
              <p>포럼을 통한 직접적인 만남과 후속 온라인 커뮤니티 운영으로 2세대 기업가들 간 협업, 투자, 파트너십 활성화</p>
            </div>
            <div className="benefit-item">
              <h3>방송 콘텐츠 시너지</h3>
              <p>충북 MBC가 포럼 전/중/후를 아우르는 콘텐츠를 제작하여 포럼의 인지도와 공감대 확산</p>
            </div>
            <div className="benefit-item">
              <h3>경제·산업 파급효과</h3>
              <p>다양한 산업군 2세대 경영자의 협력과 정보 교류로 지역 산업 생태계 업그레이드 및 경제 발전에 기여</p>
            </div>
            <div className="benefit-item">
              <h3>세대 간 갈등 해소</h3>
              <p>1세대의 경험과 2세대의 혁신이 결합된 새로운 경영 방식 도출로 세대 간 상호 존중 분위기 조성</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 