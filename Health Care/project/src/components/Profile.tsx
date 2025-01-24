import React from 'react';
import { User, Phone, Mail, MapPin, Shield, FileText, Bell, Heart } from 'lucide-react';

const Profile = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="bg-blue-500 h-32"></div>
        <div className="p-6 relative">
          <div className="absolute -top-16 left-6">
            <div className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="mt-16">
            <h2 className="text-2xl font-bold dark:text-white">Sarah Anderson</h2>
            <p className="text-gray-500 dark:text-gray-400">Patient ID: #123456</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Personal Information</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Full Name
                  </label>
                  <div className="flex items-center space-x-2 p-2 border border-gray-300 dark:border-gray-600 rounded-lg">
                    <User size={20} className="text-gray-400" />
                    <input
                      type="text"
                      value="Sarah Anderson"
                      className="flex-1 bg-transparent focus:outline-none dark:text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Phone Number
                  </label>
                  <div className="flex items-center space-x-2 p-2 border border-gray-300 dark:border-gray-600 rounded-lg">
                    <Phone size={20} className="text-gray-400" />
                    <input
                      type="tel"
                      value="+1 (555) 123-4567"
                      className="flex-1 bg-transparent focus:outline-none dark:text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <div className="flex items-center space-x-2 p-2 border border-gray-300 dark:border-gray-600 rounded-lg">
                    <Mail size={20} className="text-gray-400" />
                    <input
                      type="email"
                      value="sarah.anderson@example.com"
                      className="flex-1 bg-transparent focus:outline-none dark:text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Address
                  </label>
                  <div className="flex items-center space-x-2 p-2 border border-gray-300 dark:border-gray-600 rounded-lg">
                    <MapPin size={20} className="text-gray-400" />
                    <input
                      type="text"
                      value="123 Healthcare St, Medical City"
                      className="flex-1 bg-transparent focus:outline-none dark:text-white"
                    />
                  </div>
                </div>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                Save Changes
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Medical History</h3>
            <div className="space-y-4">
              {[
                { icon: Heart, title: 'Blood Type', value: 'A+' },
                { icon: Shield, title: 'Allergies', value: 'Penicillin' },
                { icon: FileText, title: 'Chronic Conditions', value: 'None' }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <item.icon className="text-blue-500" size={24} />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.title}</p>
                    <p className="font-semibold dark:text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Notification Settings</h3>
            <div className="space-y-4">
              {[
                { title: 'Appointment Reminders', icon: Bell },
                { title: 'Medicine Reminders', icon: FileText },
                { title: 'Health Tips', icon: Heart }
              ].map((setting, index) => (
                <div key={index} className="flex items-center justify-between p-2">
                  <div className="flex items-center space-x-3">
                    <setting.icon className="text-gray-400" size={20} />
                    <span className="dark:text-white">{setting.title}</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Emergency Contacts</h3>
            <div className="space-y-4">
              {[
                { name: 'John Anderson', relation: 'Spouse', phone: '+1 (555) 987-6543' },
                { name: 'Mary Wilson', relation: 'Sister', phone: '+1 (555) 456-7890' }
              ].map((contact, index) => (
                <div key={index} className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold dark:text-white">{contact.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{contact.relation}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{contact.phone}</p>
                    </div>
                    <button className="text-blue-500 hover:text-blue-600">Edit</button>
                  </div>
                </div>
              ))}
              <button className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 px-4 py-2 rounded-lg">
                Add Emergency Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;