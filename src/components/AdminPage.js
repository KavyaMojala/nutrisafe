import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './AdminPage.css'; // Import CSS for styling

const AdminPage = () => {
  const navigate = useNavigate(); // Initialize navigate for redirection
  const [users, setUsers] = useState([
    { id: 1, username: 'Alice', age: 30, email: 'alice@example.com', weight: 65, height: 1.65, caloriesGoal: 2000 },
    { id: 2, username: 'Bob', age: 28, email: 'bob@example.com', weight: 80, height: 1.75, caloriesGoal: 2200 },
    { id: 3, username: 'Charlie', age: 25, email: 'charlie@example.com', weight: 70, height: 1.70, caloriesGoal: 1800 },
  ]);

  const [healthData, setHealthData] = useState([
    { id: 1, username: 'Alice', foodIntake: 'Fruits, Vegetables', calories: 1500, steps: 7000 },
    { id: 2, username: 'Bob', foodIntake: 'Meat, Rice', calories: 1800, steps: 9000 },
    { id: 3, username: 'Charlie', foodIntake: 'Fish, Salad', calories: 1600, steps: 6000 },
  ]);

  // Function to calculate BMI
  const calculateBMI = (weight, height) => {
    return (weight / (height * height)).toFixed(2);
  };

  // Function to handle deleting a user
  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  // Function to handle deleting health data
  const handleDeleteHealthData = (id) => {
    setHealthData(healthData.filter(data => data.id !== id));
  };

  // Function to calculate progress percentage
  const calculateProgress = (value, goal) => {
    return Math.min((value / goal) * 100, 100); // Ensure progress doesn't exceed 100%
  };

  // Function to identify specific problems for users
  const identifyProblems = (user, data) => {
    const problems = [];
    const bmi = calculateBMI(user.weight, user.height);

    // BMI-related issues
    if (bmi < 18.5) {
      problems.push("Underweight (BMI < 18.5)");
    } else if (bmi > 24.9) {
      problems.push("Overweight (BMI > 24.9)");
    }

    // Nutrition Deficiency: Less than 85% of the calorie goal
    if (data.calories < user.caloriesGoal * 0.85) {
      problems.push("Nutrition Deficiency");
    }

    // Low Activity: Less than 5000 steps
    if (data.steps < 5000) {
      problems.push("Low Activity");
    }

    return problems.length > 0 ? problems.join(', ') : "None";
  };

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout logic here (e.g., clear tokens, reset state)
    navigate('/'); // Redirect to home page
  };

  return (
    <div className="admin-page">
      <h2>Admin Dashboard</h2>
      
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>

      {/* User Management Section */}
      <div className="section">
        <h3>User Management</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Age</th>
              <th>Weight (kg)</th>
              <th>Height (m)</th>
              <th>BMI</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.weight}</td>
                <td>{user.height}</td>
                <td>{calculateBMI(user.weight, user.height)}</td>
                <td>
                  <button className="update-btn">update+</button>
                  <button className="delete-btn" onClick={() => handleDeleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Health Data Section */}
      <div className="section">
        <h3>Track User Health Progress</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Food Intake</th>
              <th>Calories</th>
              <th>Steps</th>
              <th>Calories Progress</th>
              <th>Steps Progress</th>
              <th>Problems</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {healthData.map(data => {
              const user = users.find(u => u.username === data.username);
              const caloriesProgress = calculateProgress(data.calories, user?.caloriesGoal);
              const stepsProgress = calculateProgress(data.steps, 10000); // Assume 10,000 steps as a default goal
              const problems = identifyProblems(user, data);

              return (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.username}</td>
                  <td>{data.foodIntake}</td>
                  <td>{data.calories} kcal</td>
                  <td>{data.steps} steps</td>
                  <td>
                    <div className="progress-bar">
                      <div className="progress-bar-inner" style={{ width: `${caloriesProgress}%` }}>
                        {caloriesProgress.toFixed(0)}%
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-bar">
                      <div className="progress-bar-inner" style={{ width: `${stepsProgress}%` }}>
                        {stepsProgress.toFixed(0)}%
                      </div>
                    </div>
                  </td>
                  <td>{problems}</td>
                  <td>
                    <button className="update-btn">update</button>
                    <button className="delete-btn" onClick={() => handleDeleteHealthData(data.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
