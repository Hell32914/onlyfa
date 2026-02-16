import { useEffect, useRef, useState } from 'react';
import { TrendingUp, DollarSign, Award } from 'lucide-react';
import CountUp from '../components/CountUp';
import { useI18n } from '../i18n';

interface StatCardProps {
  value: number;
  label: string;
  icon: React.ReactNode;
  delay: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

const StatCard = ({ value, label, icon, delay, prefix, suffix, decimals }: StatCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`glass-card rounded-3xl p-6 sm:p-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-elite-purple/10 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="stat-shimmer">
        <CountUp
          value={value}
          prefix={prefix}
          suffix={suffix}
          decimals={decimals}
          start={isVisible}
          className="font-display text-4xl sm:text-5xl font-black text-elite-white"
        />
      </div>
      <p className="mt-2 text-sm text-elite-gray">{label}</p>
    </div>
  );
};

const Proof = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      value: 4.2,
      prefix: '$',
      suffix: 'M',
      decimals: 1,
      label: t('proof.stats.revenue') as string,
      icon: <DollarSign className="w-6 h-6 text-elite-purple" />,
    },
    {
      value: 1.1,
      prefix: '$',
      suffix: 'M',
      decimals: 1,
      label: t('proof.stats.adSpend') as string,
      icon: <TrendingUp className="w-6 h-6 text-elite-purple" />,
    },
    {
      value: 0.1,
      prefix: t('proof.stats.percentilePrefix') as string,
      suffix: t('proof.stats.percentileSuffix') as string,
      decimals: 1,
      label: t('proof.stats.percentile') as string,
      icon: <Award className="w-6 h-6 text-elite-purple" />,
    },
  ];

  return (
    <section
      id="proof"
      ref={sectionRef}
      className="relative py-20 sm:py-28 lg:py-32 w-full overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-elite-purple/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            {/* Eyebrow */}
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-elite-purple mb-4">
              {t('proof.eyebrow') as string}
            </span>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-elite-white uppercase tracking-tight leading-tight mb-6">
              {t('proof.headline.line1') as string}
              <br />
              <span className="text-gradient">{t('proof.headline.line2') as string}</span>
            </h2>

            {/* Body */}
            <p className="text-base sm:text-lg text-elite-gray leading-relaxed max-w-xl">
              {t('proof.body') as string}
            </p>

            {/* Stats Grid - Desktop */}
            <div className="hidden lg:grid grid-cols-3 gap-4 mt-10">
              {stats.map((stat, index) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  icon={stat.icon}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  delay={index * 150}
                />
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
              <img
                src="/proof-portrait.jpg"
                alt={t('proof.alt') as string}
                className="w-full h-full object-cover"
              />
              {/* Neon edge line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-elite-purple via-elite-pink to-elite-purple opacity-60" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 glass-card-strong rounded-2xl p-4 sm:p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-elite-purple/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-elite-purple" />
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-elite-white">{t('proof.badge.title') as string}</p>
                  <p className="text-xs text-elite-gray">{t('proof.badge.subtitle') as string}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid - Mobile */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              prefix={stat.prefix}
              suffix={stat.suffix}
              decimals={stat.decimals}
              delay={index * 150 + 300}
            />
          ))}
        </div>

        <p className="mt-8 text-sm text-elite-gray text-center max-w-3xl mx-auto">
          {t('proof.disclaimer') as string}
        </p>
      </div>
    </section>
  );
};

export default Proof;
