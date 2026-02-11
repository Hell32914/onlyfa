import { useEffect, useRef, useState } from 'react';
import { Quote, Heart, MessageCircle, Users } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  delay: number;
}

const Testimonial = ({ quote, author, delay }: TestimonialProps) => {
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
      className={`glass-card rounded-3xl p-6 sm:p-8 transition-all duration-700 hover:bg-white/[0.08] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <Quote className="w-8 h-8 text-elite-purple/50 mb-4" />
      <p className="text-base sm:text-lg text-elite-white leading-relaxed mb-6">
        "{quote}"
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-elite-purple to-elite-pink flex items-center justify-center">
          <span className="font-display text-sm font-bold text-white">
            {author.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <span className="font-medium text-elite-gray">{author}</span>
      </div>
    </div>
  );
};

const Community = () => {
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

  const testimonials = [
    {
      quote: "They turned my page into a real business. I went from struggling to find time for everything to having a team that handles it all.",
      author: "Lena R.",
    },
    {
      quote: "I finally have boundaries—and bigger months. The team respects my time while maximizing my earnings.",
      author: "Sofia M.",
    },
    {
      quote: "The team feels like family, but professional. They truly care about my success and it shows in the results.",
      author: "Ava T.",
    },
  ];

  return (
    <section
      id="community"
      ref={sectionRef}
      className="relative py-20 sm:py-28 lg:py-32 w-full overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-elite-pink/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Left Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-elite-white uppercase tracking-tight leading-tight mb-6">
              You're not doing
              <br />
              <span className="text-gradient">this alone.</span>
            </h2>

            {/* Body */}
            <p className="text-base sm:text-lg text-elite-gray leading-relaxed mb-8 max-w-xl">
              Our creators get access to a private network, weekly strategy calls, 
              and a support team that actually replies. Join a community of 
              ambitious creators who lift each other up.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Users className="w-4 h-4 text-elite-purple" />
                <span className="text-sm text-elite-white">Private Network</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <MessageCircle className="w-4 h-4 text-elite-purple" />
                <span className="text-sm text-elite-white">Weekly Calls</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Heart className="w-4 h-4 text-elite-purple" />
                <span className="text-sm text-elite-white">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden">
              <img
                src="/community-top.jpg"
                alt="Community"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-elite-black/60 to-transparent" />
            </div>
            <div className="relative aspect-video rounded-3xl overflow-hidden">
              <img
                src="/community-bottom.jpg"
                alt="Community member"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-elite-black/60 to-transparent" />
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 lg:mt-24 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={testimonial.author}
              quote={testimonial.quote}
              author={testimonial.author}
              delay={index * 150 + 400}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
