import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './SignupPage.css'; // Import your CSS file

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    captcha: '',
  });

  const [captchaCode, setCaptchaCode] = useState(generateCaptcha()); // State for CAPTCHA code

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (formData.captcha !== captchaCode) {
      alert('Incorrect CAPTCHA');
      return;
    }

    console.log('Form data:', formData);
    // Here you can add your API request logic

    // Redirect to home page after successful signup
    navigate('/'); // Redirect to the home page
  };

  // Function to generate a random CAPTCHA code
  function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
  }

  const refreshCaptcha = () => {
    setCaptchaCode(generateCaptcha());
  };

  return (
    <div className="signup-page">
      <div className="form-container"> {/* Form wrapper for centering */}
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          {/* CAPTCHA Field */}
          <div className="form-group captcha-group">
            <label>Captcha: <strong>{captchaCode}</strong></label>
            <input
              type="text"
              name="captcha"
              placeholder="Enter CAPTCHA"
              value={formData.captcha}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={refreshCaptcha}>Refresh Captcha</button>
          </div>
          <button type="submit" className="styled-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
