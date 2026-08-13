import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CareerMarquee from "./components/CareerMarquee";
import TemplateCarousel from "./components/TemplateCarousel";
import CareerPlatform from "./components/CareerPlatform";
import ATSAnalyzer from "./components/ATSAnalyzer";
import HowItWorks from "./components/HowItWorks";
import DocumentsSection from "./components/DocumentsSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans text-brand-text">
      
      {/* Header */}
      <Navbar />

      <main>
        
        {/* Hero */}
        <Hero />

        {/* Career / Job roles marquee */}
        <CareerMarquee />

        {/* Resume templates */}
        <TemplateCarousel />

        {/* AI Career Platform */}
        <CareerPlatform />

        {/* ATS Analyzer */}
        <ATSAnalyzer />

        {/* How it works */}
        <HowItWorks />

        {/* Documents */}
        <DocumentsSection />

        {/* Final CTA */}
        <FinalCTA />

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;