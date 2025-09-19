import React, { useEffect, useState } from "react";
import { MealAPI } from "../services/api";
import RecipeCard from "./RecipeCard";

export default function CategoriesPage({
  category,
  area,
  searchTerm,
  openRecipeModal,
}) {
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const title = category
    ? `Category: ${category}`
    : area
    ? `Cuisine: ${area}`
    : searchTerm
    ? `Search: ${searchTerm}`
    : "Explore Recipes";

  useEffect(() => {
    let fn;
    setLoading(true);

    if (category) fn = MealAPI.byCategory(category);
    else if (area) fn = MealAPI.byArea(area);
    else if (searchTerm) fn = MealAPI.search(searchTerm);
    else fn = MealAPI.search("");

    Promise.resolve(fn)
      .then(({ meals }) => setRecipes(meals || []))
      .finally(() => setLoading(false));
  }, [category, area, searchTerm]);

  return (
    <section className="px-4 py-8">
      <h2 className="text-2xl font-semibold text-center mb-6">{title}</h2>

      {loading && <p className="text-center text-gray-500">Loading…</p>}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recipes.map((meal) => (
          <RecipeCard
            key={meal.idMeal}
            recipe={{
              id: meal.idMeal,
              image: meal.strMealThumb,
              title: meal.strMeal,
              description: `${meal.strArea} • ${meal.strCategory}`,
            }}
            openRecipeModal={() => openRecipeModal(meal.idMeal)}
          />
        ))}
      </div>

      {!loading && recipes.length === 0 && (
        <p className="text-center text-gray-500 mt-4">
          No recipes found. Try a different search.
        </p>
      )}
    </section>
  );
}
