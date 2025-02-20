import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Star, 
  Calendar,
  Filter
} from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const FindCare = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const doctors = [
    {
      name: 'Dr. Archana Samal',
      specialty: 'Eye Specialist',
      hospital: 'Health Care Life Science',
      rating: 4.8,
      reviews: 127,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300'
    },
    {
      name: 'Dr. Pradeep Kumar Mishra',
      specialty: 'Surgeon',
      hospital: 'Kalinga Hospital',
      rating: 4.9,
      reviews: 184,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300'
    },
    {
      name: 'Dr. Ramyaranjan Behera',
      specialty: 'Diagnostic Laproscopy',
      hospital: 'Sum Ultimate',
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300'
    }
  ];

  const hospitalLocations = [
    { name: 'Health Care Life Science', lat: 20.2961, lng: 85.8245, beds: 120, doctors: 50 },
    { name: 'Kalinga Hospital', lat: 20.3174, lng: 85.8367, beds: 200, doctors: 80 },
    { name: 'Sum Ultimate', lat: 20.2945, lng: 85.8333, beds: 150, doctors: 60 },
    { name: 'Apollo Hospital', lat: 20.3050, lng: 85.8200, beds: 250, doctors: 100 },
    { name: 'AIIMS Bhubaneswar', lat: 20.2960, lng: 85.8270, beds: 500, doctors: 200 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search doctors, specialties, or conditions"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        
        <div className="flex gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Location"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700"
            />
            <MapPin className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
          
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <Filter size={20} />
            <span>Filters</span>
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-semibold mb-4 dark:text-white">Available Doctors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.filter(doctor => doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) || doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())).map((doctor, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex flex-col items-center text-center shadow-md">
              <img src={doctor.image} alt={doctor.name} className="w-24 h-24 rounded-full mb-3" />
              <h4 className="font-semibold text-lg dark:text-white">{doctor.name}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">{doctor.specialty}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{doctor.hospital}</p>
              <div className="flex items-center gap-1 mt-2">
                <Star className="text-yellow-400" size={16} />
                <span className="text-sm dark:text-white">{doctor.rating} ({doctor.reviews} reviews)</span>
              </div>
              <button className="mt-3 px-3 py-1 bg-green-500 text-white rounded-lg" onClick={() => window.location.href='/appointment'}>
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-semibold mb-4 dark:text-white">Healthcare Facilities Near You</h3>
        <div className="h-96 rounded-lg overflow-hidden">
          <MapContainer center={[20.2961, 85.8245]} zoom={13} className="h-full w-full">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {hospitalLocations.map((hospital, index) => (
              <Marker key={index} position={[hospital.lat, hospital.lng]}>
                <Popup>
                  <div>
                    <h3 className="font-bold">{hospital.name}</h3>
                    <p>Beds Available: {hospital.beds}</p>
                    <p>Doctors: {hospital.doctors}</p>
                    <div className="mt-2 flex space-x-2">
                      <button className="px-3 py-1 bg-blue-500 text-white rounded-lg" onClick={() => alert('Opening Profile')}>View Profile</button>
                      <button className="px-3 py-1 bg-green-500 text-white rounded-lg" onClick={() => window.location.href='/appointment'}>Book Appointment</button>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default FindCare;
