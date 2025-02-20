import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Calendar as CalendarIcon, Clock, User, MapPin, X } from 'lucide-react';

const Appointments = () => {
  const [date, setDate] = useState(new Date());
  const [appointments, setAppointments] = useState([
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
      doctor: 'Dr. Sweta Mishra',
      specialty: 'Cardiology',
      date: '2025-02-20',
      time: '11:00 AM',
      location: 'AIIMS Bhubaneswar',
      status: 'upcoming'
    },
    {
      id: 3,
      doctor: 'Dr. Alok Das',
      specialty: 'Neurology',
      date: '2025-02-21',
      time: '02:00 PM',
      location: 'Kalinga Hospital',
      status: 'upcoming'
    }
  ]);
  const [showForm, setShowForm] = useState(false);
  const [newAppointment, setNewAppointment] = useState({ doctor: '', specialty: '', date: '', time: '', location: '' });
  const [rescheduleId, setRescheduleId] = useState(null);

  const handleAddAppointment = () => {
    if (rescheduleId) {
      setAppointments(appointments.map(app => app.id === rescheduleId ? { ...newAppointment, id: rescheduleId, status: 'upcoming' } : app));
      setRescheduleId(null);
    } else {
      setAppointments([...appointments, { ...newAppointment, id: appointments.length + 1, status: 'upcoming' }]);
    }
    setShowForm(false);
    setNewAppointment({ doctor: '', specialty: '', date: '', time: '', location: '' });
  };

  const handleCancelAppointment = (id) => {
    setAppointments(appointments.filter(appointment => appointment.id !== id));
  };

  const handleReschedule = (appointment) => {
    setNewAppointment(appointment);
    setRescheduleId(appointment.id);
    setShowForm(true);
  };

  return (
    <div className="space-y-6 dark:bg-black p-6 text-black dark:text-white">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">My Appointments</h2>
        <button onClick={() => setShowForm(true)} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <CalendarIcon size={20} />
          <span>Book New Appointment</span>
        </button>
      </div>

      {showForm && (
        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold">{rescheduleId ? 'Reschedule Appointment' : 'Create Appointment'}</h3>
          <input className="w-full p-2 mt-2 bg-white text-black" placeholder="Doctor's Name" value={newAppointment.doctor} onChange={(e) => setNewAppointment({ ...newAppointment, doctor: e.target.value })} />
          <input className="w-full p-2 mt-2 bg-white text-black" placeholder="Specialty" value={newAppointment.specialty} onChange={(e) => setNewAppointment({ ...newAppointment, specialty: e.target.value })} />
          <input className="w-full p-2 mt-2 bg-white text-black" type="date" value={newAppointment.date} onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })} />
          <input className="w-full p-2 mt-2 bg-white text-black" type="time" value={newAppointment.time} onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })} />
          <input className="w-full p-2 mt-2 bg-white text-black" placeholder="Location" value={newAppointment.location} onChange={(e) => setNewAppointment({ ...newAppointment, location: e.target.value })} />
          <button onClick={handleAddAppointment} className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">{rescheduleId ? 'Reschedule' : 'Add Appointment'}</button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{appointment.doctor}</h3>
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
                  <button onClick={() => handleReschedule(appointment)} className="px-4 py-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg">Reschedule</button>
                  <button onClick={() => handleCancelAppointment(appointment.id)} className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-gray-700 rounded-lg">
                    <X size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Calendar</h3>
          <Calendar onChange={setDate} value={date} className="w-full border-none rounded-lg shadow-lg dark:bg-gray-700 dark:text-white" />
        </div>
      </div>
    </div>
  );
};

export default Appointments;