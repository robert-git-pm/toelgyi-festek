import { useRef, useEffect, useCallback } from 'react';
import heroVideo from '../assets/HeroVideo.mp4';

const FADE_DURATION = 0.3; // seconds before end to start fading

export default function Hero() {
  const videoRef = useRef(null);
  const durationRef = useRef(0);

  const handleLoadedMetadata = useCallback(() => {
    if (videoRef.current) {
      durationRef.current = videoRef.current.duration;
    }
  }, []);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (!video || !durationRef.current) return;
    const timeLeft = durationRef.current - video.currentTime;
    if (timeLeft <= FADE_DURATION) {
      video.style.opacity = String(timeLeft / FADE_DURATION);
    } else if (parseFloat(video.style.opacity) < 1) {
      video.style.opacity = '1';
    }
  }, []);

  const handleSeeked = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    // When the video loops back to the start, fade back in
    if (video.currentTime < 1) {
      video.style.opacity = '0';
      requestAnimationFrame(() => {
        video.style.transition = `opacity ${FADE_DURATION}s ease-in`;
        video.style.opacity = '1';
        setTimeout(() => {
          video.style.transition = '';
        }, FADE_DURATION * 1000);
      });
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('seeked', handleSeeked);
    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('seeked', handleSeeked);
    };
  }, [handleLoadedMetadata, handleTimeUpdate, handleSeeked]);

  return (
    <section
      id="hero"
      className="relative h-screen overflow-hidden"
    >
      {/* Background video */}
      <video
        ref={videoRef}
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Semi-transparent dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-bark-900/80 via-bark-900/60 to-terracotta-900/50" />

      {/* Centered text container (empty for now) */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Text content will be added later */}
        </div>
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
