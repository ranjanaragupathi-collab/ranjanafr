const BASE =
  import.meta.env.VITE_MEALDB_BASE_URL ||
  "https://www.themealdb.com/api/json/v1/1";

const safeFetch = async (path) => {
  const res = await fetch(`${BASE}${path}`);
  if (!res.ok) throw new Error(`API error ${res.status}`);
  return res.json();
};

export const MealAPI = {
  listCategories: () => safeFetch("/list.php?c=list"),
  listAreas: () => safeFetch("/list.php?a=list"),
  byCategory: (category) =>
    safeFetch(`/filter.php?c=${encodeURIComponent(category)}`),
  byArea: (area) => safeFetch(`/filter.php?a=${encodeURIComponent(area)}`),
  search: (q) => safeFetch(`/search.php?s=${encodeURIComponent(q)}`),
  lookup: (id) => safeFetch(`/lookup.php?i=${encodeURIComponent(id)}`),
};
