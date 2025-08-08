import React, { useState, useEffect } from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import ProjectOverview from './components/ProjectOverview.jsx';
import Architecture from './components/Architecture.jsx';
import Features from './components/Features.jsx';
import Demo from './components/Demo.jsx';
import Conclusion from './components/Conclusion.jsx';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // 스크롤 위치에 따른 활성 섹션 업데이트
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPos = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* 헤더 */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-gray-800">
              Jung Seunghoon's Portfolio
            </div>
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'hero' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'about' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('overview')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'overview' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Overview
              </button>
              <button 
                onClick={() => scrollToSection('architecture')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'architecture' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Architecture
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'features' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('demo')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'demo' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Demo
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="pt-16">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="overview">
          <ProjectOverview />
        </section>
        <section id="architecture">
          <Architecture />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="demo">
          <Demo />
        </section>
        <section id="conclusion">
          <Conclusion />
        </section>
      </main>

      {/* 푸터 */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Jung Seunghoon. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App; 