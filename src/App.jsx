import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CareerMarquee from './components/CareerMarquee';
import TemplateCarousel from './components/TemplateCarousel';
import CareerPlatform from './components/CareerPlatform';
import ATSAnalyzer from './components/ATSAnalyzer';
import HowItWorks from './components/HowItWorks';
import DocumentsSection from './components/DocumentsSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ResumeBuilder from './components/ResumeBuilder';

function Home() {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col font-sans">
      
      <Navbar />

      <main className="flex-grow">
        <Hero />

        <CareerMarquee />

        <TemplateCarousel />

        <CareerPlatform />

        <ATSAnalyzer />

        <HowItWorks />

        <DocumentsSection />

        <FinalCTA />
      </main>

      <Footer />

    </div>
  );
}

function App() {
  return (
    <Routes>

      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Resume Builder */}
      <Route path="/resume-builder" element={<ResumeBuilder />} />

    </Routes>
  );
}

export default App;