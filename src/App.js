import React, { useState, useEffect } from "react";
import Recipes from "./components/Recipes";
import axios from "axios";

const appId = "3681a864";
const appKey = "e69c2c126b0e1f9d6bd7e7a5e90d78f9";
const url = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${appId}&app_key=${appKey}`;

function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getRecipe();
  }, []);

  // const getRecipes = async () => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log(data);
  // };

  const getRecipe = async () => {
    const data = await axios.get(url);
    setRecipes(data.data.hits);
    console.log(data);
  };

  return (
    <div className="content">
      {recipes.map((recipe) => (
        <Recipes
          key={recipe.recipe.image}
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          calories={Math.floor(recipe.recipe.calories) * 1 + " cal"}
          cuisine={recipe.recipe.cuisineType}
          labels={recipe.recipe.dietLabels}
        />
      ))}
    </div>
  );
}

export default App;
