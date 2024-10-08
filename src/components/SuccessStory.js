// SuccessStory.js
import React from 'react';
import './SuccessStory.css'; // Ensure this file exists for styling

const SuccessStory = ({ name, image, description }) => {
  return (
    <div className="success-story">
      <img src={image} alt={name} className="success-image" />
      <div className="success-content">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SuccessStory;
