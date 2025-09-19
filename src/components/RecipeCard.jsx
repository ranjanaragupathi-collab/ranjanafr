import React from "react";

export default function RecipeCard({ recipe, openRecipeModal }) {
  return (
    <div
      className="bg-white rounded-lg shadow hover:shadow-lg cursor-pointer"
      onClick={openRecipeModal}
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="p-3">
        <h3 className="font-semibold">{recipe.title}</h3>
        <p className="text-sm text-gray-500">{recipe.description}</p>
      </div>
    </div>
  );
}
