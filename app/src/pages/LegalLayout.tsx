import type { ReactNode } from 'react';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';

interface LegalLayoutProps {
  children: ReactNode;
}

const LegalLayout = ({ children }: LegalLayoutProps) => {
  return (
    <div className="relative min-h-screen bg-elite-black overflow-x-hidden">
      <div className="noise-overlay" />

      <div className="glow-orb glow-orb-purple w-[600px] h-[600px] -top-[200px] -left-[200px]" />
      <div className="glow-orb glow-orb-pink w-[500px] h-[500px] top-[30%] -right-[150px]" />
      <div className="glow-orb glow-orb-purple w-[400px] h-[400px] top-[60%] left-[10%]" />

      <Navigation />

      <main className="relative z-10 pt-[72px]">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default LegalLayout;
