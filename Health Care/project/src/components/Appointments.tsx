import React from 'react';
import { Calendar as CalendarIcon, Clock, User, MapPin, X } from 'lucide-react';

const Appointments = () => {
  const appointments = [
    {
      id: 1,
      doctor: 'Dr. Ramyaranjan Behera',
      specialty: 'Diagnostic Laproscopy',
      date: '2025-02-19',
      time: '09:30 AM',
      location: 'Sum Ultimate',
      status: 'upcoming'
    },
    {
      id: 2,
      doctor: 'Dr. Pradeep Kumar Mishra',
      specialty: 'Surgeon',
      date: '2025-02-19',
      time: '02:15 PM',
      location: 'Kalinga Hospital',
      status: 'upcoming'
    },
    {
      id: 3,
      doctor: 'Dr. Archana Samal',
      specialty: 'Eye Specialist',
      date: '2025-02-19',
      time: '11:00 AM',
      location: 'Health Care Life Science',
      status: 'upcoming'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold dark:text-white">My Appointments</h2>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <CalendarIcon size={20} />
          <span>Book New Appointment</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold dark:text-white">{appointment.doctor}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{appointment.specialty}</p>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                      <CalendarIcon size={18} />
                      <span>{appointment.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                      <Clock size={18} />
                      <span>{appointment.time}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                    <MapPin size={18} />
                    <span>{appointment.location}</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="px-4 py-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg">
                    Reschedule
                  </button>
                  <button className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-gray-700 rounded-lg">
                    <X size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4 dark:text-white">Calendar</h3>
          <div className="h-96 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <div className="h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
              Calendar will be implemented here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;