// Recipes.js
import React, { useEffect, useState } from 'react';
import './recipes.css'; // Ensure this path is correct

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Sample recipe data
    const sampleRecipes = [
      {
        title: "Pumpkin Pancakes",
        description: "With hints of pumpkin pie spice and brown sugar, these mouthwatering pancakes can be enjoyed any time of day.",
        category: "Kid-Friendly",
        foodGroup: "Vegetables, Grains",
        cuisine: "Vegetarian",
        imageUrl: require('../assets/images/pumpkin-pancakes.jpg') // Correctly reference the image
      },
      {
        title: "Stuffed Peppers",
        description: "Delightful bell peppers filled with a savory mixture of rice, vegetables, and protein, baked to perfection.Serve this recipe before heading out for trick or treating.Kids will love these stuffed peppers",
        category: "Kid-Friendly",
        foodGroup: "Vegetables, Protein",
        cuisine: "Vegetarian",
        imageUrl: require('../assets/images/stuffed-peppers.jpg') // Correctly reference the image
      },
      {
        title: "Chile Colorado (Mexican Chili)",
        description: "A flavorful Mexican dish featuring tender beef or pork simmered in a rich, vibrant red chili sauce made from dried chiles, garlic, and spices.",
        category: "30 Minutes or Less, Kid-Friendly",
        foodGroup: "Protein (meat) and Vegetables",
        cuisine: "Mexican",
        imageUrl: require('../assets/images/chile-colorado.jpg') // Correctly reference the image
      },
      {
        title: "Quinoa Salad",
        description: "A refreshing salad packed with protein-rich quinoa, colorful veggies, and a zesty lemon dressing. It's a perfect dish for a light lunch or as a side to complement any meal, providing essential nutrients and vibrant flavors.",
        category: "Salad",
        foodGroup: "Grains, Vegetables",
        cuisine: "Vegetarian",
        imageUrl: require('../assets/images/Quinoa-Salad.jpg')
      },
    ];

    // Set the sample data
    setRecipes(sampleRecipes);
  }, []);

  return (
    <div className="recipes-container">
      <h2>Healthy Recipes</h2>
      <div className="recipe-cards">
        {recipes.length === 0 ? (
          <p>No recipes available.</p>
        ) : (
          recipes.map((recipe, index) => (
            <div key={index} className="recipe-card">
              <img src={recipe.imageUrl} alt={recipe.title} className="recipe-image" />
              <h3 className="recipe-title">{recipe.title}</h3>
              <p className="recipe-description">{recipe.description}</p>
              <p className="recipe-uses"><strong>Uses:</strong> {recipe.category}</p>
              <p className="recipe-food-group"><strong>Food Group:</strong> {recipe.foodGroup}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Recipes;
