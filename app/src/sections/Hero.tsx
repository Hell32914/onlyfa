import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger entrance animations after mount
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSystem = () => {
    const element = document.querySelector('#system');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-portrait.jpg"
          alt="Hero background"
          className="w-full h-full object-cover scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 gradient-overlay-strong" />
        {/* Additional dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-elite-black via-transparent to-elite-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 pt-[72px]">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Eyebrow */}
          <div
            className={`flex items-center gap-2 mb-6 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Sparkles className="w-4 h-4 text-elite-purple" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-elite-purple">
              Premium Creator Management
            </span>
            <Sparkles className="w-4 h-4 text-elite-purple" />
          </div>

          {/* Main Headline */}
          <h1
            className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-elite-white uppercase tracking-tight leading-[0.95] mb-6 transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Turn Content
            <br />
            <span className="text-gradient">Into Empire</span>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-base sm:text-lg md:text-xl text-elite-gray max-w-2xl mb-10 transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Creator management for brands that want scale—without the chaos.
            We handle strategy, chat, marketing, and monetization. You create.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center gap-4 mb-16 transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <button
              onClick={scrollToContact}
              className="group relative px-8 py-4 text-base font-semibold text-elite-white neon-border neon-border-hover rounded-2xl transition-all duration-300 flex items-center gap-3"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToSystem}
              className="px-8 py-4 text-base font-medium text-elite-white/80 hover:text-elite-white transition-colors flex items-center gap-2"
            >
              See how it works
            </button>
          </div>
        </div>

        {/* Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto pb-12">
          {/* Left Card */}
          <div
            className={`glass-card-strong rounded-3xl p-6 sm:p-8 transition-all duration-700 delay-400 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-elite-purple/20 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-elite-purple" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-elite-white mb-2">
                  Full-Service Management
                </h3>
                <p className="text-sm text-elite-gray leading-relaxed">
                  From content strategy to fan engagement, we handle every aspect of your 
                  brand growth. Our team works 24/7 to support sustainable performance.
                </p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div
            className={`glass-card-strong rounded-3xl p-6 sm:p-8 transition-all duration-700 delay-500 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-elite-pink/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-elite-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-elite-white mb-2">
                  Case Studies
                </h3>
                <p className="text-sm text-elite-gray leading-relaxed">
                  We share transparent examples of strategy and execution. Results vary by 
                  creator, market, and consistency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-elite-black to-transparent z-10" />
    </section>
  );
};

export default Hero;
