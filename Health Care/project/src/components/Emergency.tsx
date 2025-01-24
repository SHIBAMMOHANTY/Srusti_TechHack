import React from 'react';
import { Ambulance, Phone, MapPin } from 'lucide-react';

const Emergency = () => {
  return (
    <div className="space-y-6">
      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-lg">
        <div className="flex items-center space-x-3">
          <Phone className="text-red-500" size={24} />
          <div>
            <h3 className="text-lg font-semibold dark:text-white">Emergency Hotline</h3>
            <p className="text-red-500 text-2xl font-bold">911</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4 dark:text-white">Book Emergency Service</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Patient Name
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700"
                placeholder="Enter patient name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Contact Number
              </label>
              <input
                type="tel"
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700"
                placeholder="Enter contact number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Location
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full p-2 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700"
                  placeholder="Enter pickup location"
                />
                <MapPin className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Emergency Type
              </label>
              <select className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700">
                <option>Medical Emergency</option>
                <option>Accident</option>
                <option>Heart Attack</option>
                <option>Other</option>
              </select>
            </div>
            <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2">
              <Ambulance size={20} />
              <span>Request Emergency Service</span>
            </button>
          </form>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4 dark:text-white">Nearby Emergency Facilities</h3>
          <div className="space-y-4">
            {[
              {
                name: 'City General Hospital',
                distance: '0.8 km',
                time: '5 mins',
                beds: 12
              },
              {
                name: 'St. Mary\'s Medical Center',
                distance: '2.3 km',
                time: '12 mins',
                beds: 8
              },
              {
                name: 'Memorial Hospital',
                distance: '3.5 km',
                time: '15 mins',
                beds: 15
              }
            ].map((facility, index) => (
              <div key={index} className="border dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold dark:text-white">{facility.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {facility.distance} • {facility.time} away
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-green-500 font-semibold">{facility.beds}</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400">beds available</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 h-48 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <div className="h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
              Map will be implemented here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;