import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  Ambulance, 
  UserCircle, 
  Search, 
  MessageSquare, 
  Settings, 
  HelpCircle,
  Moon,
  Sun,
  Bell
} from 'lucide-react';
import Dashboard from './components/Dashboard';
import Appointments from './components/Appointments';
import Emergency from './components/Emergency';
import Profile from './components/Profile';
import FindCare from './components/FindCare';
import Messages from './components/Messages';
import SettingsPanel from './components/Settings';
import Help from './components/Help';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [darkMode, setDarkMode] = useState(false);
  
  const getCurrentTime = () => {
    return `Time: ${new Date().toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    })}`;
  };
  
  console.log(getCurrentTime()); // Example output: "time: 12:30"
  

  const [time, setTime] = useState(getCurrentTime());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const renderContent = () => {
    switch(activeSection) {
      case 'dashboard': return <Dashboard />;
      case 'appointments': return <Appointments />;
      case 'emergency': return <Emergency />;
      case 'profile': return <Profile />;
      case 'findcare': return <FindCare />;
      case 'messages': return <Messages />;
      case 'settings': return <SettingsPanel />;
      case 'help': return <Help />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="flex">
        {/* Sidebar */}
        <div className={`w-64 min-h-screen fixed ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className={`p-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            <h1 className="text-2xl font-bold mb-8">HealthCare</h1>
            <nav className="space-y-2">
              {[
                { icon: <LayoutDashboard />, name: 'Dashboard', id: 'dashboard' },
                { icon: <Calendar />, name: 'Appointments', id: 'appointments' },
                { icon: <Ambulance />, name: 'Emergency', id: 'emergency' },
                { icon: <UserCircle />, name: 'Profile', id: 'profile' },
                { icon: <Search />, name: 'Find Care', id: 'findcare' },
                { icon: <MessageSquare />, name: 'Messages', id: 'messages' },
                { icon: <Settings />, name: 'Settings', id: 'settings' },
                { icon: <HelpCircle />, name: 'Help', id: 'help' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-colors
                    ${activeSection === item.id 
                      ? (darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600')
                      : (darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100')
                    }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64">
          {/* Header */}
          <header className={`h-16 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md flex items-center justify-between px-6`}>
            <div className={`flex items-center space-x-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              <span className="text-lg">{time}</span>
            </div>
            
            <div className="flex items-center space-x-6">
              {activeSection === 'emergency' && (
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                  <Ambulance size={20} />
                  <span>Book Ambulance</span>
                </button>
              )}
              
              <button className="relative">
                <Bell className={darkMode ? 'text-white' : 'text-gray-600'} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </button>
              
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${darkMode ? 'text-white' : 'text-gray-600'}`}
              >
                {darkMode ? <Sun /> : <Moon />}
              </button>
            </div>
          </header>

          {/* Main Content Area */}
          <main className={`p-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;