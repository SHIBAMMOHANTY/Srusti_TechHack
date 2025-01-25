import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/marketing/Home';
import About from './pages/marketing/About';
import Doc from './pages/marketing/Doc';
import Login from './component/Login';
import SignUp from './component/SignUp';
import Settings from './pages/Dashboard/Settings';
import Analytics from './pages/Dashboard/Analytics';
import Dashboard from './pages/Dashboard/Dashboard';
import AddData from './pages/Dashboard/AddData';
import Reports from './pages/Dashboard/Reports';
import Surveys from './pages/Dashboard/Surveys';

// Marketing Layout
function MarketingLayout() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/doc" element={<Doc />} />
      </Routes>
    </>
  );
}

// Dashboard Layout with Nested Routes
function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <Dashboard /> {/* Static dashboard content */}
      {/* <Outlet />  */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="w-[100vw] h-[100vh]">
        <Routes>
          {/* Marketing Layout */}
          <Route path="/*" element={<MarketingLayout />} />

          {/* Dashboard Layout */}
          <Route path="/dashboard/*" element={<DashboardLayout />}>
            <Route path="reports" element={<Reports />} />
            <Route path="survey" element={<Surveys />} />
            <Route path="adddata" element={<AddData />} />
            <Route path="settings" element={<Settings />} />
            <Route path="analytics" element={<Analytics />} />
          </Route>

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
