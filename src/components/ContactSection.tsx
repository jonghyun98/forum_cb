import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    position: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제 구현에서는 여기에 폼 데이터 전송 로직이 들어갑니다
    alert('참가 신청이 접수되었습니다. 감사합니다!');
    setFormData({
      name: '',
      company: '',
      position: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">참가 신청</h2>
        <p className="contact-subtitle">
          지역 경제의 미래를 이끌어갈 경영인들의 네트워크에 함께하세요.
          아래 양식을 작성하시면 세부 일정과 참가 정보를 안내해 드립니다.
        </p>
        
        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📅</div>
              <div className="info-text">
                <h3>일시</h3>
                <p>2023년 9월 15일</p>
                <p>오전 10시 - 오후 5시</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-text">
                <h3>장소</h3>
                <p>충북 MBC 공개홀</p>
                <p>충청북도 청주시 청원구 충청대로 233</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">👥</div>
              <div className="info-text">
                <h3>참가 대상</h3>
                <p>2세대 경영자 (가업 승계 기업인, 혁신 스타트업 창업자 등)</p>
                <p>1세대 기업인, 투자자, 지방정부·연구기관, 대학 창업 관련자</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">💼</div>
              <div className="info-text">
                <h3>주최/주관</h3>
                <p>주최: 2세대 기업가 모임</p>
                <p>주관: 충북 MBC</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">성함 <span className="required">*</span></label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="성함을 입력해주세요"
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">회사/기관명 <span className="required">*</span></label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    placeholder="회사명을 입력해주세요"
                    value={formData.company} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="position">직책 <span className="required">*</span></label>
                  <input 
                    type="text" 
                    id="position" 
                    name="position" 
                    placeholder="직책을 입력해주세요"
                    value={formData.position} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">이메일 <span className="required">*</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="이메일을 입력해주세요"
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">연락처 <span className="required">*</span></label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    placeholder="연락처를 입력해주세요" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">참가 목적 및 문의사항</label>
                <textarea 
                  id="message" 
                  name="message" 
                  placeholder="참가 목적이나 문의사항이 있으시면 입력해주세요"
                  value={formData.message} 
                  onChange={handleChange} 
                  rows={4}
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">참가 신청하기</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 