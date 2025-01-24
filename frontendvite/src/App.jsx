import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/marketing/Home';
import About from './pages/marketing/About';
import Doc from './pages/marketing/Doc';
import Login from './component/Login';
import SignUp from './component/SignUp';

import Profile from './pages/Dashboard/Profile';
import Settings from './pages/Dashboard/Settings';
import Analytics from './pages/Dashboard/Analytics';
import Dashboard from './pages/Dashboard/Dashboard'


// // Dashboard pages

function App() {
  // const location = useLocation();
  // const isDashboardRoute = false

  return (
    <Router>
      <div className="w-[100vw] bg-yellow-400 h-[100vh]">
        <Navbar/>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doc" element={<Doc />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />

          {/* Protected Dashboard Routes */}
          <Route path="/dashboard/" element={<Dashboard/>}>
            <Route path="profile" element={<Profile/>} />
            <Route path="settings" element={<Settings />} />
            <Route path="analytics" element={<Analytics />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
