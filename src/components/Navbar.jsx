import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaConciergeBell } from 'react-icons/fa';

// Component: Navbar
export default function Navbar({ onBookingClick }) {
  // useState() - Menyimpan status buka/tutup menu navigasi mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // useState() - Menyimpan status apakah halaman telah di-scroll ke bawah
  const [isScrolled, setIsScrolled] = useState(false);

  // useEffect() - Mengatur event listener scroll saat pertama kali render
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      // Membersihkan event listener saat component di-unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <a href="#home" className="navbar-logo" onClick={closeMobileMenu}>
        <FaConciergeBell /> HOTEL ARCA<span>LOMBOK</span>
      </a>

      {/* Mobile Menu Icon */}
      <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle navigation menu">
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation Links */}
      <div className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#home" className="navbar-link" onClick={closeMobileMenu}>
          Home
        </a>
        <a href="#rooms" className="navbar-link" onClick={closeMobileMenu}>
          Rooms
        </a>
        <a href="#facilities" className="navbar-link" onClick={closeMobileMenu}>
          Facilities
        </a>
        <a href="#about" className="navbar-link" onClick={closeMobileMenu}>
          About
        </a>
        <a href="#booking" className="navbar-link" onClick={closeMobileMenu}>
          Booking
        </a>
        <button 
          onClick={() => {
            closeMobileMenu();
            onBookingClick();
          }} 
          className="btn-gold navbar-btn"
        >
          Book Now
        </button>
      </div>
    </nav>
  );
}
