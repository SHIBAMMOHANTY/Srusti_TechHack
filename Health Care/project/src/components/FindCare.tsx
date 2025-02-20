import React from 'react';
import { 
  Search, 
  MapPin, 
  Star, 
  Calendar,
  Filter
} from 'lucide-react';

const FindCare = () => {
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

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search doctors, specialties, or conditions"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700"
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold dark:text-white">{doctor.name}</h3>
              <p className="text-gray-500 dark:text-gray-400">{doctor.specialty}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{doctor.hospital}</p>
              
              <div className="flex items-center mt-4">
                <div className="flex items-center">
                  <Star className="text-yellow-400" size={20} fill="currentColor" />
                  <span className="ml-1 font-semibold dark:text-white">{doctor.rating}</span>
                </div>
                <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
                <span className="text-gray-500 dark:text-gray-400">{doctor.reviews} reviews</span>
              </div>
              
              <div className="mt-6 flex space-x-3">
                <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2">
                  <Calendar size={20} />
                  <span>Book Appointment</span>
                </button>
                <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-semibold mb-4 dark:text-white">Healthcare Facilities Near You</h3>
        <div className="h-96 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <div className="h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
            Map will be implemented here
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindCare;