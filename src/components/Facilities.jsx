import React from 'react';
import { FaWifi, FaHotel, FaMapMarkerAlt, FaCoffee } from 'react-icons/fa';
import Reveal from './Reveal';

// Component: Facilities
export default function Facilities() {
  // Array data fasilitas hotel
  const facilitiesList = [
    {
      name: "Free WiFi",
      localName: "Koneksi WiFi Gratis",
      desc: "Stay connected anywhere across the resort grounds with high-speed fiber-optic internet connectivity.",
      icon: <FaWifi />
    },
    {
      name: "Comfortable Lobby",
      localName: "Lobi yang Nyaman",
      desc: "Relax in our spacious, elegantly designed lobby equipped with cozy premium seating and warm Sasak hospitality.",
      icon: <FaHotel />
    },
    {
      name: "Close to City Center",
      localName: "Dekat dengan Pusat Kota",
      desc: "Strategically located near the heart of the city, giving you convenient access to local shopping, dining, and landmarks.",
      icon: <FaMapMarkerAlt />
    },
    {
      name: "Free Welcome Drink",
      localName: "Gratis Minuman Pilihan",
      desc: "Complimentary refreshment of your choice upon arrival and during your stay. Choose between fresh mineral water or premium coffee.",
      icon: <FaCoffee />
    }
  ];

  return (
    <section id="facilities" className="facilities-section">
      <Reveal direction="up">
        <h2 className="section-title">Resort Facilities</h2>
        <div className="gold-divider"></div>
        <p className="section-subtitle">
          Immerse yourself in world-class amenities designed to make your tropical getaway in Lombok unforgettable.
        </p>
      </Reveal>

      <div className="facilities-grid">
        {facilitiesList.map((facility, index) => (
          <Reveal key={index} direction="up" delay={index * 120}>
            <div className="facility-card">
              <div className="facility-icon-container">
                {facility.icon}
              </div>
              <h3 className="facility-name">{facility.name}</h3>
              <p className="facility-desc">{facility.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
