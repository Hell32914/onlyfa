import { useEffect, useMemo, useRef, useState } from 'react';

interface CountUpProps {
  value: number;
  startValue?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  start?: boolean;
  className?: string;
}

const CountUp = ({
  value,
  startValue = 0,
  duration = 1800,
  decimals,
  prefix = '',
  suffix = '',
  start,
  className,
}: CountUpProps) => {
  const [displayValue, setDisplayValue] = useState(startValue);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const spanRef = useRef<HTMLSpanElement>(null);

  const precision = useMemo(() => {
    if (typeof decimals === 'number') {
      return Math.max(0, decimals);
    }

    const parts = value.toString().split('.');
    return parts[1]?.length ?? 0;
  }, [decimals, value]);

  useEffect(() => {
    const node = spanRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const shouldStart = typeof start === 'boolean' ? start : isInView;

  useEffect(() => {
    if (!shouldStart) {
      setHasAnimated(false);
      setDisplayValue(startValue);
      return;
    }

    if (hasAnimated) {
      return;
    }

    setHasAnimated(true);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayValue(value);
      return;
    }

    let startTime: number | null = null;
    let rafId = 0;

    const step = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const nextValue = startValue + (value - startValue) * eased;

      setDisplayValue(nextValue);

      if (progress < 1) {
        rafId = window.requestAnimationFrame(step);
      }
    };

    rafId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(rafId);
  }, [duration, hasAnimated, shouldStart, startValue, value]);

  const formattedValue = displayValue.toFixed(precision);

  return (
    <span
      ref={spanRef}
      className={className}
      aria-label={`${prefix}${value.toFixed(precision)}${suffix}`}
    >
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
};

export default CountUp;
