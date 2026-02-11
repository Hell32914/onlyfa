import { useEffect, useRef } from 'react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Proof from './sections/Proof';
import System from './sections/System';
import Spotlight from './sections/Spotlight';
import Community from './sections/Community';
import Contact from './sections/Contact';

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={mainRef} className="relative min-h-screen bg-elite-black overflow-x-hidden">
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
    </div>
  );
}

export default App;
