import React, { useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
 // Corrected image path
import './Banner.css';  // Add necessary styles here
import SuccessStories from './SuccessStories'; // Import SuccessStories component

function Banner() {
  const successStoriesRef = useRef(null); // Create a ref for the SuccessStories component

  const scrollToSuccessStories = () => {
    if (successStoriesRef.current) {
      successStoriesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="banner">
      
      <div className="banner-content">
        <h1>Healthy LIFESTYLE</h1>
        <p>Healthy food to start a diet lifestyle.</p>
        <div className="actions">
          <Link to="/signup">
            <button className="signup-btn">SIGN UP</button>
          </Link>
          <Link to="/signin">
            <button className="signin-btn">SIGN IN</button>
          </Link>
          <button className="find-more-btn" onClick={scrollToSuccessStories}>
            FIND MORE
          </button>
        </div>
      </div>
      <div ref={successStoriesRef}> {/* Attach the ref to the SuccessStories container */}
        <SuccessStories />
      </div>
    </div>
  );
}

export default Banner;
