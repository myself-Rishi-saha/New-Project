import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import SignUp from './pages/sign_up';
import ResetPassword from './pages/resetPassword';
import Homepage from './pages/homepage';
import './designs/style.css';
import './designs/style2.css';
import './designs/util.css';
import './designs/loginbackground.css';
import './designs/sign_up.css';
import './designs/log-in_page.css'
// import './designs/resetPassword.css'
import FindProds from './pages/findProds';
import './designs/util.css'
//import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
 // Import Font Awesome CSS

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/FindProds" element={<FindProds />} />
      </Routes>
    </Router>
  );
}

export default App;
