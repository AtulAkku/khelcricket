// import {} from 'react-router-dom'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
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
import {AuthProvider} from './Utils/AuthContext';

function App () {
  return (
    <>
    <AuthProvider>
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/gLogin' element={<GLogIn/>}/>

      </Routes>
      <Footer/>
    </Router>
    </AuthProvider>
    </>
  );
}

export default App;
