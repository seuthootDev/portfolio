import React, { useState, useEffect } from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import ProjectOverview from './components/ProjectOverview.jsx';
import Architecture from './components/Architecture.jsx';
import Features from './components/Features.jsx';
import Demo from './components/Demo.jsx';
import Conclusion from './components/Conclusion.jsx';
import ScrollReveal from './components/ScrollReveal.jsx';

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
      <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-white">
              Jung Seunghoon's Portfolio
            </div>
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'hero' ? 'text-green-400' : 'text-gray-400 hover:text-green-400'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('demo')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'demo' ? 'text-green-400' : 'text-gray-400 hover:text-green-400'
                }`}
              >
                Demo
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'about' ? 'text-green-400' : 'text-gray-400 hover:text-green-400'
                }`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('overview')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'overview' ? 'text-green-400' : 'text-gray-400 hover:text-green-400'
                }`}
              >
                Overview
              </button>
              <button 
                onClick={() => scrollToSection('architecture')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'architecture' ? 'text-green-400' : 'text-gray-400 hover:text-green-400'
                }`}
              >
                Architecture
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'features' ? 'text-green-400' : 'text-gray-400 hover:text-green-400'
                }`}
              >
                Features
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 - 스크롤 시 슬라이드인 */}
      <main className="pt-16">
        <section id="hero">
          <ScrollReveal>
            <Hero />
          </ScrollReveal>
        </section>
        <section id="demo">
          <ScrollReveal delay={0}>
            <Demo />
          </ScrollReveal>
        </section>
        <section id="about">
          <ScrollReveal delay={0}>
            <About />
          </ScrollReveal>
        </section>
        <section id="overview">
          <ScrollReveal delay={0}>
            <ProjectOverview />
          </ScrollReveal>
        </section>
        <section id="architecture">
          <ScrollReveal delay={0}>
            <Architecture />
          </ScrollReveal>
        </section>
        <section id="features">
          <ScrollReveal delay={0}>
            <Features />
          </ScrollReveal>
        </section>
        <section id="conclusion">
          <ScrollReveal delay={0}>
            <Conclusion />
          </ScrollReveal>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="bg-gray-950 border-t border-green-400/20 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-gray-400/80">
            © 2025 Jung Seunghoon. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App; 