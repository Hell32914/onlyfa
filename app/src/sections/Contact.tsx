import { useEffect, useRef, useState } from 'react';
import { Send, Mail, MessageCircle, Phone } from 'lucide-react';
import { useI18n } from '../i18n';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    handle: '',
    goals: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', handle: '', goals: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/cta-portrait.jpg"
          alt={t('contact.alt') as string}
          className="w-full h-full object-cover"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-elite-black via-elite-black/90 to-elite-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-elite-black via-transparent to-elite-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            {/* Headline */}
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-elite-white uppercase tracking-tight leading-tight mb-6">
              {t('contact.headline.line1') as string}
              <br />
              <span className="text-gradient">{t('contact.headline.line2') as string}</span>
            </h2>

            {/* Body */}
            <p className="text-base sm:text-lg text-elite-gray leading-relaxed mb-8 max-w-lg">
              {t('contact.body') as string}
            </p>

            {/* Contact info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-elite-purple/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-elite-purple" />
                </div>
                <div>
                  <p className="text-sm text-elite-gray">{t('contact.infoLabels.email') as string}</p>
                  <p className="text-elite-white font-medium">vd.agency2024@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-elite-purple/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-elite-purple" />
                </div>
                <div>
                  <p className="text-sm text-elite-gray">{t('contact.infoLabels.whatsapp') as string}</p>
                  <p className="text-elite-white font-medium">+380 75 699 95 31</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-elite-purple/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-elite-purple" />
                </div>
                <div>
                  <p className="text-sm text-elite-gray">{t('contact.infoLabels.telegram') as string}</p>
                  <p className="text-elite-white font-medium">@rosa_flor1</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="glass-card-strong rounded-3xl p-6 sm:p-8 lg:p-10">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-elite-purple/20 flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-elite-purple" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-elite-white mb-3">
                    {t('contact.form.submittedTitle') as string}
                  </h3>
                  <p className="text-elite-gray">
                    {t('contact.form.submittedBody') as string}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-elite-gray mb-2">
                      {t('contact.form.nameLabel') as string}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-elite-white placeholder-elite-gray/50 focus:outline-none focus:border-elite-purple/50 focus:ring-1 focus:ring-elite-purple/50 transition-all"
                      placeholder={t('contact.form.namePlaceholder') as string}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-elite-gray mb-2">
                      {t('contact.form.emailLabel') as string}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-elite-white placeholder-elite-gray/50 focus:outline-none focus:border-elite-purple/50 focus:ring-1 focus:ring-elite-purple/50 transition-all"
                      placeholder={t('contact.form.emailPlaceholder') as string}
                    />
                  </div>

                  <div>
                    <label htmlFor="handle" className="block text-sm font-medium text-elite-gray mb-2">
                      {t('contact.form.handleLabel') as string}
                    </label>
                    <input
                      type="text"
                      id="handle"
                      name="handle"
                      value={formData.handle}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-elite-white placeholder-elite-gray/50 focus:outline-none focus:border-elite-purple/50 focus:ring-1 focus:ring-elite-purple/50 transition-all"
                      placeholder={t('contact.form.handlePlaceholder') as string}
                    />
                  </div>

                  <div>
                    <label htmlFor="goals" className="block text-sm font-medium text-elite-gray mb-2">
                      {t('contact.form.goalsLabel') as string}
                    </label>
                    <textarea
                      id="goals"
                      name="goals"
                      value={formData.goals}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-elite-white placeholder-elite-gray/50 focus:outline-none focus:border-elite-purple/50 focus:ring-1 focus:ring-elite-purple/50 transition-all resize-none"
                      placeholder={t('contact.form.goalsPlaceholder') as string}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 text-base font-semibold text-elite-white neon-border neon-border-hover rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-elite-white/30 border-t-elite-white rounded-full animate-spin" />
                        <span>{t('contact.form.submitting') as string}</span>
                      </>
                    ) : (
                      <>
                        <span>{t('contact.form.submit') as string}</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
