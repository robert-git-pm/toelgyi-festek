import { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import heroVideo from '../assets/HeroVideo.mp4';

export default function Hero() {
  const { t } = useTranslation();
  const videoRef = useRef(null);
  const rafRef = useRef(null);
  const lastTimestampRef = useRef(0);
  const [showText, setShowText] = useState(false);

  // Fade in the tagline 3 seconds after mount
  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Ping-pong loop: play forward until `ended`, then drive reverse
  // playback by manually stepping `currentTime` with rAF, then resume
  // forward playback at time 0.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const stopRaf = () => {
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lastTimestampRef.current = 0;
    };

    const reverseStep = (timestamp) => {
      if (!videoRef.current) return;
      const v = videoRef.current;
      if (lastTimestampRef.current === 0) {
        lastTimestampRef.current = timestamp;
        rafRef.current = requestAnimationFrame(reverseStep);
        return;
      }
      const delta = (timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      const newTime = v.currentTime - delta;
      if (newTime <= 0) {
        v.currentTime = 0;
        stopRaf();
        // Resume forward playback seamlessly
        const playPromise = v.play();
        if (playPromise && typeof playPromise.catch === 'function') {
          playPromise.catch(() => {});
        }
        return;
      }
      v.currentTime = newTime;
      rafRef.current = requestAnimationFrame(reverseStep);
    };

    const handleEnded = () => {
      // Switch into reverse mode
      video.pause();
      lastTimestampRef.current = 0;
      rafRef.current = requestAnimationFrame(reverseStep);
    };

    video.addEventListener('ended', handleEnded);
    return () => {
      video.removeEventListener('ended', handleEnded);
      stopRaf();
    };
  }, []);

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Background video (ping-pong loop, no native loop attribute) */}
      <video
        ref={videoRef}
        src={heroVideo}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Semi-transparent dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-bark-900/80 via-bark-900/60 to-terracotta-900/50" />

      {/* Centered tagline — fades in 3s after load with blur-to-sharp */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6">
        <h1
          className={`text-center font-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight max-w-4xl mx-auto drop-shadow-lg transition-all ease-out ${
            showText
              ? 'opacity-100 blur-none translate-y-0'
              : 'opacity-0 blur-md translate-y-4'
          }`}
          style={{ transitionDuration: '1200ms' }}
        >
          {t('hero.tagline')}
        </h1>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
