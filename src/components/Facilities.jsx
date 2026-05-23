import React from 'react';
import { FaSwimmingPool, FaSpa, FaUtensils, FaUmbrellaBeach, FaWifi } from 'react-icons/fa';

// Component: Facilities
export default function Facilities() {
  // Array data fasilitas hotel
  const facilitiesList = [
    {
      name: "Infinity Pool",
      localName: "Kolam Renang",
      desc: "Our stunning main infinity pool overlooking the turquoise ocean of Lombok. Complete with daybeds and poolside bar services.",
      icon: <FaSwimmingPool />
    },
    {
      name: "The Arca Spa & Wellness",
      localName: "Spa & Pusat Kebugaran",
      desc: "Indulge in authentic traditional Sasak massages and modern therapeutic body treatments designed to restore body and mind.",
      icon: <FaSpa />
    },
    {
      name: "Segara Restaurant",
      localName: "Restoran",
      desc: "A premium open-air dining venue offering fresh local catches, traditional Indonesian dishes, and international gastronomy.",
      icon: <FaUtensils />
    },
    {
      name: "Beach Access",
      localName: "Akses Pantai Pribadi",
      desc: "Step directly onto the pristine, warm white sands of Lombok beach with dedicated guest services and seaside lounge spaces.",
      icon: <FaUmbrellaBeach />
    },
    {
      name: "Free WiFi",
      localName: "Koneksi WiFi Gratis",
      desc: "Stay connected anywhere across the resort grounds with high-speed fiber-optic internet connectivity.",
      icon: <FaWifi />
    }
  ];

  return (
    <section id="facilities" className="facilities-section">
      <h2 className="section-title">Resort Facilities</h2>
      <div className="gold-divider"></div>
      <p className="section-subtitle">
        Immerse yourself in world-class amenities designed to make your tropical getaway in Lombok unforgettable.
      </p>

      <div className="facilities-grid">
        {facilitiesList.map((facility, index) => (
          <div key={index} className="facility-card">
            <div className="facility-icon-container">
              {facility.icon}
            </div>
            <h3 className="facility-name">{facility.name}</h3>
            <p className="facility-desc">{facility.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
