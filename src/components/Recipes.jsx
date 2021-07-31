import React from "react";
import style from "../recipe.module.css";

const Recipes = ({ title, image, calories, cuisine, labels, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h3 className={style.header}>{title}</h3>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p>{calories}</p>
      <h5>Cuisine Type: {cuisine}</h5>
      <p>Diet Labels: {labels}</p>
      <img className="image" src={image} alt={title} />
    </div>
  );
};

export default Recipes;
