import React, { useState, useEffect } from "react";
import Recipes from "./components/Recipes";
import axios from "axios";

const appId = "3681a864";
const appKey = "e69c2c126b0e1f9d6bd7e7a5e90d78f9";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipe();
  }, [query]);

  // const getRecipes = async () => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log(data);
  // };

  const getRecipe = async () => {
    const data = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appId}&app_key=${appKey}`
    );
    setRecipes(data.data.hits);
  };

  const searchHandler = (event) => {
    setSearch(event.target.value);
    //for input
  };

  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
    //for form submission
  };
  return (
    <div className="content">
      <form className="search-form" onSubmit={getSearch}>
        <input
          type="text"
          onChange={searchHandler}
          className="search-bar"
          value={search}
          placeholder="Search for recipes..."
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipes
            key={recipe.recipe.image}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            calories={Math.floor(recipe.recipe.calories) * 1 + " cal"}
            cuisine={recipe.recipe.cuisineType}
            labels={recipe.recipe.dietLabels}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
