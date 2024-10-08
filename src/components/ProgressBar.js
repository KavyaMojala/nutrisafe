import React from 'react';
import './ProgressBar.css'; // Import the CSS for the progress bar

const ProgressBar = ({ progress }) => {
    return (
        <div className="progress-bar-container">
            <div
                className="progress-bar-fill"
                style={{ width: `${progress}%` }} // Dynamic width based on progress
            ></div>
        </div>
    );
};

export default ProgressBar;
