import React from "react";

const Recipes = ({ title, image, calories, cuisine, labels }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{calories}</p>
      <h5>Cuisine Type: {cuisine}</h5>
      <p>Diet Labels: {labels}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipes;
