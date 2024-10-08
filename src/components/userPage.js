import React from 'react';
import './UserPage.css'; // Import the CSS file
import profileImage from '../assets/images/abhi.jpg'; // Adjust the path to your image file
import ProgressBar from './ProgressBar'; // Import the ProgressBar component

const UserPage = () => {
    // User Profile Data
    const userProfile = {
        name: "Abhimanyu",
        age: 25,
        gender: "Male",
        height: "6' feet",
        weight: "70 kg"
    };

    // Goal Progress Data
    let goalProgress = {
        waterGoal: 8,         // Water goal in glasses
        waterConsumed: 6,     // Water consumed so far
        goalProgress: function () {
            return (this.waterConsumed / this.waterGoal) * 100;
        }
    };

    // Calories and Activity Data
    let calories = {
        diet: 3000,
        food: 500,
        exercise: 2022,
        remaining: function () {
            return this.diet - this.food - this.exercise;
        }
    };

    // Weekly Report Data
    const weeklyReport = [
        { day: "Monday", water: 6, caloriesConsumed: 1500, exercise: 30 },
        { day: "Tuesday", water: 5, caloriesConsumed: 1800, exercise: 45 },
        { day: "Wednesday", water: 7, caloriesConsumed: 2000, exercise: 20 },
        { day: "Thursday", water: 8, caloriesConsumed: 1600, exercise: 35 },
        { day: "Friday", water: 4, caloriesConsumed: 2200, exercise: 50 },
        { day: "Saturday", water: 8, caloriesConsumed: 1900, exercise: 60 },
        { day: "Sunday", water: 7, caloriesConsumed: 1700, exercise: 40 },
    ];

    // Function to check water goal and redirect
    function checkWaterGoalAndRedirect() {
        let waterPercentage = goalProgress.goalProgress();

        if (waterPercentage >= 100) {
            alert("Congratulations! You have reached your water goal!");
        } else {
            alert("Keep going! You haven't reached your water goal yet.");
        }
    }

    // Function to check remaining calories and redirect
    function checkCaloriesAndRedirect() {
        let remainingCalories = calories.remaining();
        
        if (remainingCalories <= 0) {
            alert("Calorie limit exceeded! Please adjust your diet.");
        } else {
            alert("Calories remaining: " + remainingCalories + ". You are on track!");
        }
    }

    // Function to simulate finishing the weekly report and redirect
    function finishWeeklyReport() {
        alert("Weekly report finished! Redirecting to the detailed report page...");
    }

    // Function to simulate a logout and redirect to login page
    function logout() {
        alert("Logging out... Redirecting to the login page.");
        window.location.href = "/";  // Redirect to login page
    }

    return (
        <div className="user-page-container"> {/* Add a container class */}
            <h1>User Profile</h1>
            {/* Flex container for image and text */}
            <div className="profile-container">
                {/* Display Profile Image */}
                <img src={profileImage} alt="Profile" className="profile-image" />
                <div className="profile-info">
                    <p>Name: {userProfile.name}</p>
                    <p>Age: {userProfile.age}</p>
                    <p>Gender: {userProfile.gender}</p>
                    <p>Height: {userProfile.height}</p>
                    <p>Weight: {userProfile.weight}</p>
                </div>
            </div>

            {/* Goal Progress and Actions */}
            <div className="section">
                <p>Water Goal Progress: {goalProgress.waterConsumed}/{goalProgress.waterGoal} glasses</p>
                <ProgressBar progress={goalProgress.goalProgress()} /> {/* Add the ProgressBar here */}
                <button onClick={checkWaterGoalAndRedirect}>Check Water Goal</button>
            </div>

            {/* Calorie Info */}
            <div className="section">
                <p>Total Calories: {calories.diet}</p>
                <p>Food Intake: {calories.food}</p>
                <p>Exercise: {calories.exercise}</p>
                <button onClick={checkCaloriesAndRedirect}>Check Calories</button>
            </div>

            {/* Weekly Report */}
            <div className="section">
                <h2>Weekly Report</h2>
                <table className="weekly-report-table">
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Water Consumed (glasses)</th>
                            <th>Calories Consumed</th>
                            <th>Exercise (minutes)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {weeklyReport.map((report, index) => (
                            <tr key={index}>
                                <td>{report.day}</td>
                                <td>{report.water}</td>
                                <td>{report.caloriesConsumed}</td>
                                <td>{report.exercise}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={finishWeeklyReport}>Finish Weekly Report</button>
            </div>

            {/* Logout Button */}
            <button className="danger" onClick={logout}>Logout</button>
        </div>
    );
};

export default UserPage;
