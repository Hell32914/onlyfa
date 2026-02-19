import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Star, TrendingUp, Users } from 'lucide-react';
import { useI18n } from '../i18n';

const Spotlight = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useI18n();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/girl3.png"
          alt={t('spotlight.alt') as string}
          className={`w-full h-full object-cover transition-transform duration-1000 ${
            isVisible ? 'scale-100' : 'scale-110'
          }`}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-elite-black/70 via-elite-black/40 to-elite-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-elite-black/60 via-transparent to-elite-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-24">
        {/* Top Headline */}
        <div
          className={`text-center mb-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-elite-purple mb-4">
            <Star className="w-4 h-4" />
            {t('spotlight.eyebrow') as string}
            <Star className="w-4 h-4" />
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-elite-white uppercase tracking-tight">
            {t('spotlight.headline.line1') as string}
            <br />
            <span className="text-gradient">{t('spotlight.headline.line2') as string}</span>
          </h2>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-16 lg:mt-24">
          {/* Profile Card */}
          <div
            className={`glass-card-strong rounded-3xl p-6 sm:p-8 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-elite-purple to-elite-pink flex items-center justify-center">
                <span className="font-display text-2xl font-black text-white">M</span>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-elite-white">{t('spotlight.profile.name') as string}</h3>
                <p className="text-sm text-elite-gray">{t('spotlight.profile.role') as string}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-white/10">
                <span className="text-sm text-elite-gray">{t('spotlight.profile.labels.niche') as string}</span>
                <span className="text-sm font-medium text-elite-white">{t('spotlight.profile.values.niche') as string}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-white/10">
                <span className="text-sm text-elite-gray">{t('spotlight.profile.labels.growth') as string}</span>
                <span className="text-sm font-medium text-elite-purple flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  {t('spotlight.profile.values.growth') as string}
                </span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-sm text-elite-gray">{t('spotlight.profile.labels.fanBase') as string}</span>
                <span className="text-sm font-medium text-elite-white flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {t('spotlight.profile.values.fanBase') as string}
                </span>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div
            className={`glass-card-strong rounded-3xl p-6 sm:p-8 flex flex-col justify-center transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <h3 className="font-display text-xl font-bold text-elite-white mb-3">
              {t('spotlight.cta.title') as string}
            </h3>
            <p className="text-sm text-elite-gray mb-6 leading-relaxed">
              {t('spotlight.cta.body') as string}
            </p>
            <a 
              href="https://www.loom.com/share/19341c8fbadc4c31b7e9b7aa46805ea6"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto px-6 py-3 text-sm font-semibold text-elite-white neon-border neon-border-hover rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>{t('spotlight.cta.button') as string}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-elite-black to-transparent z-10" />
    </section>
  );
};

export default Spotlight;
