import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/marketing/Home';
import About from './pages/marketing/About';
import Doc from './pages/marketing/Doc';
import Login from './component/Login';
import SignUp from './component/SignUp';

// import Profile from './pages/Dashboard/Profile';
import Settings from './pages/Dashboard/Settings';
import Analytics from './pages/Dashboard/Analytics';
import Dashboard from './pages/Dashboard/Dashboard'
import AddData from './pages/Dashboard/AddData';
import Reports from './pages/Dashboard/Reports';
import Surveys from './pages/Dashboard/Surveys';


// // Dashboard pages

function App() {
  // const location = useLocation();
  // const isDashboardRoute = false

  return (
    <Router>
      <div className="w-[100vw]  h-[100vh]">
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
            {/* <Route path="profile" element={<Profile/>} /> */}
            <Route path="reports" element={<Reports/>} />
            <Route path="survey" element={<Surveys/>} />
            <Route path="adddata" element={<AddData/>} />
            <Route path="settings" element={<Settings />} />
            <Route path="analytics" element={<Analytics />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
