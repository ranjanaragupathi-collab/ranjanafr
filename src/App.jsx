import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import CategoriesPage from "./components/CategoriesPage";
import RecipeModal from "./components/RecipeModal";
import Footer from "./components/Footer";
import { MealAPI } from "./services/api";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    MealAPI.listCategories().then(({ meals }) =>
      setCategories(meals?.map((m) => m.strCategory) || [])
    );
    MealAPI.listAreas().then(({ meals }) =>
      setAreas(meals?.map((m) => m.strArea) || [])
    );
  }, []);

  const openRecipeModal = async (id) => {
    const { meals } = await MealAPI.lookup(id);
    if (meals && meals[0]) {
      setCurrentRecipe(meals[0]);
      setModalOpen(true);
    }
  };

  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    setCurrentPage("categories");
    setSelectedCategory("");
    setSelectedArea("");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        showPage={setCurrentPage}
        categories={categories}
        areas={areas}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onPickCategory={(c) => {
          setSelectedCategory(c);
          setSelectedArea("");
          setCurrentPage("categories");
        }}
        onPickArea={(a) => {
          setSelectedArea(a);
          setSelectedCategory("");
          setCurrentPage("categories");
        }}
        handleSearch={handleSearch}
      />

      <main className="flex-grow">
        {currentPage === "home" && (
          <HomePage
            categories={categories}
            areas={areas}
            onPickCategory={(c) => {
              setSelectedCategory(c);
              setCurrentPage("categories");
            }}
            onPickArea={(a) => {
              setSelectedArea(a);
              setCurrentPage("categories");
            }}
            openRecipeModal={openRecipeModal}
          />
        )}

        {currentPage === "categories" && (
          <CategoriesPage
            category={selectedCategory}
            area={selectedArea}
            searchTerm={searchTerm}
            openRecipeModal={openRecipeModal}
          />
        )}
      </main>

      {modalOpen && (
        <RecipeModal
          recipe={currentRecipe}
          closeModal={() => setModalOpen(false)}
        />
      )}

      <Footer
        onPickCategory={(c) => {
          setSelectedCategory(c);
          setCurrentPage("categories");
        }}
        onPickArea={(a) => {
          setSelectedArea(a);
          setCurrentPage("categories");
        }}
      />
    </div>
  );
}
