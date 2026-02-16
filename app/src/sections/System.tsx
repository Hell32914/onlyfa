import { useEffect, useRef, useState } from 'react';
import { Calendar, Target, MessageCircle, BarChart3, Check } from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const Feature = ({ title, description, icon, delay }: FeatureProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const featureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={featureRef}
      className={`group flex items-start gap-4 p-4 rounded-2xl transition-all duration-500 hover:bg-white/5 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="w-10 h-10 rounded-xl border border-elite-purple/40 flex items-center justify-center flex-shrink-0 group-hover:border-elite-purple group-hover:shadow-neon transition-all duration-300">
        {icon}
      </div>
      <div>
        <h4 className="font-display text-base font-bold text-elite-white mb-1 flex items-center gap-2">
          {title}
          <Check className="w-4 h-4 text-elite-purple opacity-0 group-hover:opacity-100 transition-opacity" />
        </h4>
        <p className="text-sm text-elite-gray leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const System = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: 'Content Strategy',
      description: 'Weekly shoots, editing, and posting calendar optimized for maximum engagement.',
      icon: <Calendar className="w-5 h-5 text-elite-purple" />,
    },
    {
      title: 'Paid Traffic',
      description: 'Meta + Reddit + native ads with strict compliance and high ROAS.',
      icon: <Target className="w-5 h-5 text-elite-purple" />,
    },
    {
      title: 'Community Management',
      description: 'Fan retention, upsells, and brand safety handled 24/7 by our expert team.',
      icon: <MessageCircle className="w-5 h-5 text-elite-purple" />,
    },
    {
      title: 'Weekly Optimization',
      description: 'Data-led decisions, A/B testing, and pricing experiments for continuous growth.',
      icon: <BarChart3 className="w-5 h-5 text-elite-purple" />,
    },
  ];

  return (
    <section
      id="system"
      ref={sectionRef}
      className="relative py-20 sm:py-28 lg:py-32 w-full overflow-hidden bg-elite-blackSecondary"
    >
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-elite-purple/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Image */}
          <div
            className={`relative order-2 lg:order-1 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="/system-portrait.jpg"
                alt="Our system"
                className="w-full h-full object-cover"
              />
              {/* Neon top edge */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-elite-purple via-elite-pink to-elite-purple opacity-60" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 glass-card-strong rounded-2xl p-4 sm:p-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-elite-pink/20 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-elite-pink" />
                </div>
                <div>
                  <p className="font-display text-xl font-bold text-elite-white">Focus</p>
                  <p className="text-xs text-elite-gray">Performance varies</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div
            className={`order-1 lg:order-2 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-elite-white uppercase tracking-tight leading-tight mb-6">
              A system built
              <br />
              <span className="text-gradient">for growth.</span>
            </h2>

            {/* Body */}
            <p className="text-base sm:text-lg text-elite-gray leading-relaxed mb-8 max-w-xl">
              We combine content strategy, paid traffic, and 24/7 community management—
              so your brand stays consistent and measurable.
            </p>

            {/* Features List */}
            <div className="space-y-2">
              {features.map((feature, index) => (
                <Feature
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  delay={index * 100 + 400}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default System;
