import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import SignupPage from './components/SignupPage'; 
import SignInPage from './components/SignInPage'; 
import About from './components/About';
import Contact from './components/contact';
import SuccessStories from './components/SuccessStories';
import AdminLogin from './components/AdminLogin';
import AdminPage from './components/AdminPage';
import Recipes from './components/recipes';
import Rewards from './components/Rewards';
import UserPage from './components/userPage';  // Import UserPage component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* The Navbar will appear across all routes */}
        <Routes>
          <Route path="/" element={<Banner />} /> 
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/about"  element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/success-stories" element={<SuccessStories/>} /> {/* URL adjusted to avoid space */}
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/rewards" element={<Rewards/>} />

          {/* New Route for UserPage after login */}
          <Route path="/user" element={<UserPage />} />  {/* Redirect after successful sign-in */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
