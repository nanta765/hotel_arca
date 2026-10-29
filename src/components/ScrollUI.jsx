"use client";

import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

/**
 * ScrollUI
 * - Progress bar emas di atas yang mengikuti posisi scroll.
 * - Tombol "back to top" yang muncul setelah scroll turun.
 * Memberi nuansa interaktif saat scroll di seluruh website.
 */
export default function ScrollUI() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);
      setShowTop(scrollTop > 500);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <button
        type="button"
        onClick={scrollToTop}
        className={`back-to-top ${showTop ? 'show' : ''}`}
        aria-label="Scroll back to top"
        title="Kembali ke atas"
      >
        <FaArrowUp />
      </button>
    </>
  );
}
