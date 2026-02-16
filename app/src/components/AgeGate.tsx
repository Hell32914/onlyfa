import { useEffect, useState } from 'react';

const STORAGE_KEY = 'age_gate_status';

type AgeStatus = 'unknown' | 'yes' | 'no';

const AgeGate = () => {
  const [status, setStatus] = useState<AgeStatus>('unknown');

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'yes' || stored === 'no') {
      setStatus(stored);
    }
  }, []);

  const handleYes = () => {
    localStorage.setItem(STORAGE_KEY, 'yes');
    setStatus('yes');
  };

  const handleNo = () => {
    localStorage.setItem(STORAGE_KEY, 'no');
    setStatus('no');
  };

  if (status === 'yes') {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-elite-black/95 px-4">
      <div className="glass-card-strong w-full max-w-lg rounded-3xl p-8 text-center">
        <h2 className="font-display text-2xl sm:text-3xl font-black text-elite-white mb-4">
          18+ Only
        </h2>
        {status === 'no' ? (
          <>
            <p className="text-elite-gray mb-6">
              This website is available only to users who are 18 years of age or older.
            </p>
            <a
              href="https://www.google.com"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-elite-white neon-border neon-border-hover rounded-xl transition-all"
            >
              Leave site
            </a>
          </>
        ) : (
          <>
            <p className="text-elite-gray mb-6">
              Please confirm that you are at least 18 years old to enter.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleYes}
                className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-elite-white neon-border neon-border-hover rounded-xl transition-all"
              >
                Yes, I am 18+
              </button>
              <button
                onClick={handleNo}
                className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-elite-white/80 border border-white/20 rounded-xl transition-all hover:text-elite-white hover:border-white/40"
              >
                No
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AgeGate;
