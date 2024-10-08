// SuccessStories.js
import React from 'react';
import SuccessStory from './SuccessStory';
import './SuccessStories.css'; // Import CSS for styling

// Import the images
import aliceImage from '../assets/images/alice.jpg'; // Adjust the path as necessary
import bobImage from '../assets/images/bob.jpg'; // Add the correct path for Bob's image
import charlieImage from '../assets/images/charlie.jpg'; // Add the correct path for Charlie's image
import dianaImage from '../assets/images/diana.jpg'; // Add the correct path for Diana's image

const successStoriesData = [
  {
    name: 'Alice Johnson',
    image: aliceImage, // Use the imported image
    description: 'After joining the program, I lost 30 pounds and feel more energetic than ever. The personalized meal plans helped me stay on track! I now have more confidence and a better outlook on life.Im so grateful...',
  },
  {
    name: 'Bob Smith',
    image: bobImage, // Replace with actual image path
    description: 'I struggled with my weight for years. The support from the team and the community has been invaluable. I’ve lost over 40 pounds and feel great! My family has noticed a positive change in my mood and energy levels.',
  },
  {
    name: 'Charlie Brown',
    image: charlieImage, // Replace with actual image path
    description: 'The nutrition tips I learned transformed my eating habits. I’ve never felt better, and I owe it all to NutriSafe! The journey has been tough, but every meal is now a step towards my goal.',
  },
  {
    name: 'Diana Prince',
    image: dianaImage, // Replace with actual image path
    description: 'Thanks to the program, I’ve been able to maintain my weight loss for over a year. It has truly changed my life! I have a new passion for cooking and enjoy exploring new healthy recipes.',
  },
];

const SuccessStories = () => {
  return (
    <div className="success-stories">
      <h2>Success Stories</h2>
      <div className="stories-container">
        {successStoriesData.map((story, index) => (
          <SuccessStory key={index} {...story} />
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
