"use client";

import React, { useEffect, useRef, useState } from 'react';

/**
 * Reveal
 * Membungkus elemen apa pun dan menganimasikannya (naik/turun + fade)
 * ketika elemen masuk ke dalam viewport saat scroll.
 *
 * Props:
 *  - direction: 'up' | 'down' | 'left' | 'right' (arah masuk animasi)
 *  - delay: delay animasi dalam ms
 *  - as: tag/elemen pembungkus (default 'div')
 *  - className: kelas tambahan
 */
export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  as: Tag = 'div',
  className = '',
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Hormati preferensi pengguna yang mengurangi gerakan
    const prefersReduced = typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${direction} ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
