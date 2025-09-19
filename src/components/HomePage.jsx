import React, { useEffect, useState } from "react";
import { MealAPI } from "../services/api";

export default function HomePage({
  categories,
  areas,
  onPickCategory,
  onPickArea,
  openRecipeModal,
}) {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    Promise.all([
      MealAPI.search("Chicken"),
      MealAPI.search("Curry"),
      MealAPI.search("Pasta"),
    ]).then((results) => {
      const pool = results.flatMap((r) => r.meals || []);
      setFeatured(pool.slice(0, 8));
    });
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-500 to-green-600 text-white text-center py-16 rounded-lg mx-4 my-6">
        <h1 className="text-3xl md:text-5xl font-light mb-4">
          Discover delicious recipes from around the world
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Browse by category, explore world cuisines, or search by name —
          then dive into step-by-step instructions.
        </p>
      </section>

      {/* Categories */}
      <section className="my-8 px-4">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Most Popular Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.slice(0, 12).map((c) => (
            <div
              key={c}
              onClick={() => onPickCategory(c)}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg cursor-pointer"
            >
              <h3 className="p-2 text-center text-gray-700">{c}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Trending */}
      <section className="bg-green-50 py-8 px-4 rounded-lg mx-4">
        <h2 className="text-2xl font-semibold text-center mb-6 text-green-600">
          Trending Dishes
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((meal) => (
            <div
              key={meal.idMeal}
              className="bg-white rounded-lg shadow hover:shadow-lg cursor-pointer"
              onClick={() => openRecipeModal(meal.idMeal)}
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-40 object-cover"
              />
              <div className="p-3">
                <h3 className="font-semibold">{meal.strMeal}</h3>
                <p className="text-sm text-gray-500">
                  {meal.strArea} • {meal.strCategory}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
