import React, { useState, useEffect, useRef } from 'react';
import lobbyImg from '../assets/lobby_resort.png';
import poolImg from '../assets/beach_pool.png';
import coastImg from '../assets/sunset_coast.png';

// Component: Hero Section
export default function Hero({ onBookNowClick }) {
  // useState() - Menyimpan index slide gambar aktif saat ini
  const [currentSlide, setCurrentSlide] = useState(0);

  // useRef() - Menyimpan ID interval untuk auto slideshow agar bisa di-clear
  const slideIntervalRef = useRef(null);

  // Array data gambar untuk slideshow
  const slides = [
    {
      image: lobbyImg,
      title: "Welcome to Hotel Arca Lombok",
      tagline: "Serenity meets luxury",
      subtitle: "Experience the ultimate sanctuary of premium beachfront living, warm Lombok hospitality, and state-of-the-art comfort."
    },
    {
      image: poolImg,
      title: "Indulge in Paradise",
      tagline: "Turquoise Horizons",
      subtitle: "Unwind by our gorgeous signature infinity pool blending seamlessly with the crystal clear waters of Lombok's ocean."
    },
    {
      image: coastImg,
      title: "Captivating Sunsets",
      tagline: "A Nature Masterpiece",
      subtitle: "Watch the sun dip below the volcanic peaks as the sea turns into a canvas of golden hues, straight from your private balcony."
    }
  ];

  // useEffect() - Membuat dan membersihkan interval untuk auto-slideshow
  useEffect(() => {
    // Memulai interval untuk memutar slide setiap 5 detik
    slideIntervalRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    // Clean-up function: membersihkan interval saat component di-unmount
    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, [slides.length]);

  return (
    <header id="home" className="hero">
      {/* Background Slideshow */}
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </div>

      {/* Hero Content Overlay */}
      <div className="hero-content">
        <span className="hero-tagline">{slides[currentSlide].tagline}</span>
        <h1 className="hero-title">{slides[currentSlide].title}</h1>
        <p className="hero-subtitle">{slides[currentSlide].subtitle}</p>
        <button 
          onClick={onBookNowClick} 
          className="btn-gold hero-btn"
          aria-label="Scroll to Booking Form"
        >
          Book Now
        </button>
      </div>
    </header>
  );
}
