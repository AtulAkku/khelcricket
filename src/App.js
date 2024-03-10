import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import Home from "./Componet/Home";
import Login from "./Componet/Login";
import SignUp from './Componet/SignUp';
import NavBar from './Componet/partials/NavBar';
import Footer from './Componet/partials/Footer';
import Dashboard from './Componet/Dashboard';
import GLogIn from './Componet/GLogIn';
import { AuthProvider } from './Utils/AuthContext';
import GSignAdd from './Componet/GSignAdd';
import AdminDashboard from './Componet/AdminDashboard';
import VenueDetails from './Componet/VenueDetails';
import Venues from './Componet/Venues';
import TaskList from './Componet/TaskList';
import TaskForm from './Componet/TaskForm';
import Redirecting from './Componet/Redirecting';
import AvatarSelect from './Componet/AvatarSelect';
import Preloader from './Componet/Preloader';
import Error404 from './Componet/Error404';
import ThankYouPage from './Componet/ThankYouPage';

function App() {
  return (
    <>
      <AuthProvider>
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
            <Route path='/taskList' element={<TaskList />} />
            <Route path='/add-task' element={<TaskForm />} />
            <Route path='/redirecting' element={<Redirecting />} />
            <Route path='/avatarSelect' element={<AvatarSelect />} />
            <Route path='/preloader' element={<Preloader />} />
            <Route path='/*' element={<Error404 />} />
            <Route path='/thankYouPage' element={<ThankYouPage />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
