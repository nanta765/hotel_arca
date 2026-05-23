import axios from 'axios';

// Buat instance Axios dengan konfigurasi dasar (HTTPS)
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // URL dummy public untuk demo POST request
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // Timeout 10 detik
});

/**
 * Mengirim data pemesanan kamar (POST HTTPS Request)
 * @param {Object} bookingData - Data dari form pemesanan
 * @returns {Promise<Object>} data respon dari server
 */
export const submitBooking = async (bookingData) => {
  try {
    // Melakukan POST ke endpoint dummy
    const response = await api.post('/posts', {
      title: `Booking oleh ${bookingData.guestName} untuk ${bookingData.roomType}`,
      body: JSON.stringify(bookingData),
      userId: 1,
    });
    return response.data;
  } catch (error) {
    console.error('Gagal mengirim pemesanan via Axios:', error);
    throw error;
  }
};

/**
 * Mengambil cuaca Lombok secara langsung (GET HTTPS Request)
 * Menggunakan API Cuaca Terbuka (Open-Meteo) tanpa perlu API Key
 * @returns {Promise<Object>} data cuaca saat ini
 */
export const getLombokWeather = async () => {
  try {
    // GET request ke API cuaca Lombok (Lombok coordinates: Lat -8.65, Lon 116.32)
    const response = await axios.get(
      'https://api.open-meteo.com/v1/forecast?latitude=-8.65&longitude=116.32&current_weather=true'
    );
    return response.data.current_weather;
  } catch (error) {
    console.error('Gagal mengambil data cuaca Lombok via Axios:', error);
    throw error;
  }
};

export default api;
