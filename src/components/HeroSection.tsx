import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1>세대를 잇는 혁신의 네트워크</h1>
          <p>지역 경제의 미래를 이끌어갈 2세대 경영인과 창업가들의 지식 교류와 협업의 장</p>
          <p className="hero-date">
            <span className="date-icon">📅</span> 2023년 9월 15일 | 
            <span className="location-icon">📍</span> 충북 MBC 공개홀
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="hero-button primary">참가 신청하기</a>
            <a href="#program" className="hero-button secondary">프로그램 살펴보기</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            {/* 포럼 이미지 */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 