import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Proof from './sections/Proof';
import System from './sections/System';
import Spotlight from './sections/Spotlight';
import Community from './sections/Community';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import AgeGate from './components/AgeGate';

function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-animate class
    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const element = document.querySelector(location.hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div ref={mainRef} className="relative min-h-screen bg-elite-black overflow-x-hidden">
      <AgeGate />
      {/* Noise overlay */}
      <div className="noise-overlay" />
      
      {/* Background glow orbs */}
      <div className="glow-orb glow-orb-purple w-[600px] h-[600px] -top-[200px] -left-[200px]" />
      <div className="glow-orb glow-orb-pink w-[500px] h-[500px] top-[30%] -right-[150px]" />
      <div className="glow-orb glow-orb-purple w-[400px] h-[400px] top-[60%] left-[10%]" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <Proof />
        <System />
        <Spotlight />
        <Community />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
