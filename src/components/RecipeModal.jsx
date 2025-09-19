import React, { useMemo } from "react";
import { FaTimes } from "react-icons/fa";

function buildIngredients(meal) {
  if (!meal) return [];
  const list = [];
  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`];
    const meas = meal[`strMeasure${i}`];
    if (ing && ing.trim()) list.push({ name: ing.trim(), amount: (meas || "").trim() });
  }
  return list;
}

export default function RecipeModal({ recipe, closeModal }) {
  const ingredients = useMemo(() => buildIngredients(recipe), [recipe]);

  if (!recipe) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">{recipe.strMeal}</h2>
          <button
            className="text-gray-500 hover:text-gray-800"
            onClick={closeModal}
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-4">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-full h-64 object-cover rounded mb-4"
          />
          <div className="grid md:grid-cols-3 gap-4">
            {/* Procedure */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-2">Procedure</h3>
              <p className="whitespace-pre-line text-gray-700 leading-relaxed">
                {recipe.strInstructions}
              </p>

              {recipe.strYoutube && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">Video Tutorial</h3>
                  <button
                    onClick={() => window.open(recipe.strYoutube, "_blank")}
                    className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
                  >
                    Watch on YouTube
                  </button>
                </div>
              )}
            </div>

            {/* Ingredients */}
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
              <ul className="space-y-1">
                {ingredients.map((item, i) => (
                  <li key={i} className="flex justify-between text-sm">
                    <span>{i + 1} - {item.name}</span>
                    <span>{item.amount}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
