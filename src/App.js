// import {} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './App.css'
import Home from "./Componet/Home";
import Login from "./Componet/Login";
import SignUp from './Componet/SignUp';
import NavBar from './Componet/partials/NavBar';
import Footer from './Componet/partials/Footer';
import Dashboard from './Componet/Dashboard';
import GLogIn from './Componet/GLogIn';
import { AuthProvider } from './Utils/AuthContext';
import GSignAdd from './Componet/GSignAdd'
import Vanues from './Componet/Venues'
import AdminDashboard from './Componet/AdminDashboard'
import VanueDetails from './Componet/VenueDetails'
import VenueDetails from './Componet/VenueDetails'
import Venues from './Componet/Venues'

function App() {
  return (
    <>
      <AuthProvider>s
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/gLogin' element={<GLogIn />} />
            <Route path='/gSignAdd' element={<GSignAdd />} />
            <Route path='/venues' element={<Venues />} />
            <Route path='/adminDashboard' element={<AdminDashboard />} />
            <Route path='/venueDetails' element={<VenueDetails />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
