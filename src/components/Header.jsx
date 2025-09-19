import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Header({
  showPage,
  categories,
  areas,
  searchTerm,
  setSearchTerm,
  onPickCategory,
  onPickArea,
  handleSearch,
}) {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Logo */}
        <div
          className="text-2xl font-bold text-green-600 italic cursor-pointer"
          onClick={() => showPage("home")}
        >
          CookBook
        </div>

        {/* Nav */}
        <nav>
          <ul className="flex gap-6">
            <li>
              <button
                className="text-gray-600 hover:text-green-600"
                onClick={() => showPage("home")}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="text-gray-600 hover:text-green-600"
                onClick={() => showPage("categories")}
              >
                Explore
              </button>
            </li>
          </ul>
        </nav>

        {/* Search */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="border rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-green-300"
          />
          <button
            onClick={handleSearch}
            className="bg-green-600 text-white rounded-full px-4 py-2 flex items-center gap-2 hover:bg-green-700"
          >
            <FaSearch /> Search
          </button>
        </div>
      </div>

      {/* Quick Pickers */}
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex flex-wrap gap-2 mb-2">
          {categories.slice(0, 8).map((c) => (
            <button
              key={c}
              onClick={() => onPickCategory(c)}
              className="px-3 py-1 border border-gray-300 rounded-full hover:border-green-600 hover:text-green-600"
            >
              {c}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {areas.slice(0, 10).map((a) => (
            <button
              key={a}
              onClick={() => onPickArea(a)}
              className="px-3 py-1 border border-gray-300 rounded-full hover:border-green-600 hover:text-green-600"
            >
              {a}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
