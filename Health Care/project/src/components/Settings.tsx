import React from 'react';
import { Bell, Shield, Eye, Moon, Globe, User, Mail, Phone } from 'lucide-react';

const Settings = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold dark:text-white">Settings</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Account Settings</h3>
            <div className="space-y-4">
              {[
                { icon: User, label: 'Profile Information' },
                { icon: Mail, label: 'Email Preferences' },
                { icon: Phone, label: 'Phone Number' },
                { icon: Shield, label: 'Password & Security' }
              ].map((setting, index) => (
                <button
                  key={index}
                  className="flex items-center justify-between w-full p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <setting.icon className="text-gray-400" size={20} />
                    <span className="dark:text-white">{setting.label}</span>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Appearance</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center space-x-3">
                  <Moon className="text-gray-400" size={20} />
                  <span className="dark:text-white">Dark Mode</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center space-x-3">
                  <Globe className="text-gray-400" size={20} />
                  <span className="dark:text-white">Language</span>
                </div>
                <select className="bg-gray-100 dark:bg-gray-700 border-0 rounded-lg px-3 py-1">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Notifications</h3>
            <div className="space-y-4">
              {[
                { title: 'Appointment Reminders', description: 'Get notified about upcoming appointments' },
                { title: 'Medicine Reminders', description: 'Receive alerts for medicine schedules' },
                { title: 'Lab Results', description: 'Get notified when new results are available' },
                { title: 'Health Tips', description: 'Receive personalized health recommendations' }
              ].map((notification, index) => (
                <div key={index} className="flex items-center justify-between p-3">
                  <div>
                    <p className="font-medium dark:text-white">{notification.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {notification.description}
                    </p>
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
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Privacy</h3>
            <div className="space-y-4">
              {[
                { 
                  icon: Eye, 
                  title: 'Profile Visibility',
                  description: 'Control who can see your profile information'
                },
                { 
                  icon: Bell, 
                  title: 'Communication Preferences',
                  description: 'Manage how we communicate with you'
                },
                { 
                  icon: Shield, 
                  title: 'Data Usage',
                  description: 'Control how your data is used and shared'
                }
              ].map((setting, index) => (
                <div key={index} className="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <setting.icon className="text-gray-400" size={20} />
                    <div>
                      <p className="font-medium dark:text-white">{setting.title}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {setting.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;