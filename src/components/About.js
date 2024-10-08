import React, { useState } from 'react';
import './About.css'; // Ensure this CSS is linked
import nutritionImage from '../assets/images/nutrition.jpg'; // Example image import

const About = () => {
  const [feedback, setFeedback] = useState('');
  const [useful, setUseful] = useState(null);
  const [comments, setComments] = useState('');

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleUsefulChange = (value) => {
    setUseful(value);
  };

  const handleCommentChange = (e) => {
    setComments(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your feedback!');
  };

  return (
    <div className="about-container">
      <div className="form-container">
        <h1>About Us</h1>
        <h2>“Track your Nutrition & Stay Healthy”</h2>
        <img src={nutritionImage} alt="Nutrition" className="about-image" />
        <p>
        <h3>What Is A Balanced Diet?</h3>
        A balanced diet provides all the essential nutritional value of food to the body in appropriate quantities necessary for its growth, repair, and maintenance. A well-rounded and balanced diet includes vegetables, fruits, grains, protein, and dairy. 

        An adequate amount of carbohydrates, proteins, fibres, fats, vitamins, and minerals are essential to keep the body healthy and functioning correctly. Consuming a balanced diet regularly is crucial for promoting proper growth and development in children and maintaining an ideal weight, muscle tone, and immunity.

        A well-balanced diet has benefits for both physical and mental health. In addition, it reduces the risk of chronic diseases. It can also help with recovery from illness. Various food choices from the five food groups should be consumed in specific recommended amounts to attain a well-balanced diet. 
        </p>
        <p>
          Our mission is simple, but powerful: keep it clear, unbiased, and always focused on public good.
          Plus, we’re big on equity, diversity, and inclusion—because making nutrition science accessible means it should be for everyone.
        </p>

        <h3>What is Nutrition and Why is it Important?</h3>
        <p>
        Nutrition is the science that studies the interactions between living organisms and the substances they consume for sustenance. It encompasses the processes through which our bodies obtain and utilize nutrients from food. Nutrients are the compounds found in food that are essential for growth, development, metabolism, and overall health. The primary categories of nutrients include:At the most basic level, nutrition is about eating a regular, balanced diet. Good nutrition helps fuel your body.
          The foods you eat supply the nutrients your body needs to maintain your brain, muscle, bone, nerves, skin, blood circulation, and immune system.
        </p>

        <h3>What Do We Offer?</h3>
        <ul>
          <h4>Personalized Meal Plans:</h4>
          <li>Tailored meal plans based on individual dietary needs, preferences, and goals (e.g., weight loss, muscle gain, health conditions).</li>

          <h4>Nutritional Counseling:</h4>
          <li>One-on-one consultations with certified nutritionists to discuss dietary habits, health goals, and personalized advice.</li>

            <h4>Healthy Recipes Database:</h4>
            <li>A comprehensive collection of healthy recipes categorized by meal type, dietary restrictions, and ingredients.</li>

            <h4>Nutrition Tracking Tools:</h4>
            <li>Tools and apps to help users track their daily food intake, nutrient levels, and overall progress toward their health goals.</li>

            <h4>Educational Articles and Resources:</h4>
            <li>In-depth articles on various nutrition-related topics, including vitamins and minerals, dietary guidelines, and the impact of nutrition on health.</li>

            <h4>Diet Challenges and Programs:</h4>
            <li>Structured challenges (e.g., 30-day clean eating challenge) to encourage users to adopt healthier habits in a supportive environment.</li>

            <h4>Success Stories and Testimonials:</h4>
            <li>Inspirational stories from users who have achieved their health goals through the program, providing motivation and community.</li>

        </ul>

        <h4>Did you find this page useful?</h4>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              <input 
                type="radio" 
                name="useful" 
                value="yes" 
                checked={useful === 'yes'} 
                onChange={() => handleUsefulChange('yes')} 
              />
              Yes
            </label>
            <label>
              <input 
                type="radio" 
                name="useful" 
                value="no" 
                checked={useful === 'no'} 
                onChange={() => handleUsefulChange('no')} 
              />
              No
            </label>
          </div>
          <div>
            <label htmlFor="visit-reason">Why did you visit the page?</label>
            <input 
              type="text" 
              id="visit-reason" 
              value={feedback} 
              onChange={handleFeedbackChange} 
            />
          </div>
          <div>
            <label htmlFor="comments">Would you like to add any comments?</label>
            <textarea 
              id="comments" 
              value={comments} 
              onChange={handleCommentChange} 
            />
          </div>
          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
};

export default About;
