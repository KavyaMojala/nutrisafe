import React from 'react';
import './Rewards.css'; // Assuming you have a CSS file for styles

// Sample rewards data with specific image paths
const rewardsData = [
    {
        id: 1,
        title: 'Healthy Eater Badge',
        description: 'Awarded for maintaining a diet adherence above 80%.',
        points: 100,
        badge: require('../assets/images/healthy-eater.jpg'), // Path to your image
    },
    {
        id: 2,
        title: 'Consistency Award',
        description: 'Earned for following your diet plan for 7 consecutive days.',
        points: 150,
        badge: require('../assets/images/consistency-award.jpg'), // Path to your image
    },
    {
        id: 3,
        title: 'Nutrition Ninja',
        description: 'Achieved for providing feedback on 5 meals in a week.',
        points: 200,
        badge: require('../assets/images/nutrition-ninja.jpg'), // Path to your image
    },
    {
        id: 4,
        title: 'Meal Planner Master',
        description: 'Earn this badge for planning your meals for an entire month.',
        points: 250,
        badge: require('../assets/images/meal-planner-master.jpg'), // Path to your image
    },
    {
        id: 5,
        title: 'Community Contributor',
        description: 'Given for sharing healthy recipes with the community.',
        points: 300,
        badge: require('../assets/images/community-contributor.jpg'), // Path to your image
    },
];

const Rewards = () => {
    return (
        <div className="rewards-container">
            <h2>Available Rewards</h2>
            <div className="rewards-list">
                {rewardsData.map((reward) => (
                    <div key={reward.id} className="reward-card">
                        <img src={reward.badge} alt={reward.title} className="reward-badge" />
                        <h3>{reward.title}</h3>
                        <p>{reward.description}</p>
                        <p>Points: {reward.points}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rewards;
