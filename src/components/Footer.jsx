import React from "react";

export default function Footer({ onPickCategory, onPickArea }) {
  return (
    <footer className="bg-green-600 text-white mt-8">
      <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-4 gap-6">
        <div>
          <h3 className="font-semibold mb-2">Recipes</h3>
          <ul className="space-y-1">
            <li><button onClick={() => onPickCategory("Chicken")} className="hover:underline">Chicken</button></li>
            <li><button onClick={() => onPickCategory("Beef")} className="hover:underline">Beef</button></li>
            <li><button onClick={() => onPickCategory("Seafood")} className="hover:underline">Seafood</button></li>
            <li><button onClick={() => onPickCategory("Vegetarian")} className="hover:underline">Vegetarian</button></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">World Cuisines</h3>
          <ul className="space-y-1">
            <li><button onClick={() => onPickArea("Indian")} className="hover:underline">Indian</button></li>
            <li><button onClick={() => onPickArea("Italian")} className="hover:underline">Italian</button></li>
            <li><button onClick={() => onPickArea("Mexican")} className="hover:underline">Mexican</button></li>
            <li><button onClick={() => onPickArea("Chinese")} className="hover:underline">Chinese</button></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Get Inspired</h3>
          <ul className="space-y-1">
            <li><button onClick={() => onPickCategory("Dessert")} className="hover:underline">Desserts</button></li>
            <li><button onClick={() => onPickCategory("Pasta")} className="hover:underline">Pasta</button></li>
            <li><button onClick={() => onPickCategory("Vegan")} className="hover:underline">Vegan</button></li>
            <li><button onClick={() => onPickCategory("Breakfast")} className="hover:underline">Breakfast</button></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Miscellaneous</h3>
          <ul className="space-y-1">
            <li><button onClick={() => onPickCategory("Miscellaneous")} className="hover:underline">International</button></li>
            <li><button onClick={() => onPickArea("American")} className="hover:underline">American</button></li>
            <li><button onClick={() => onPickArea("British")} className="hover:underline">British</button></li>
            <li><button onClick={() => onPickArea("Thai")} className="hover:underline">Thai</button></li>
          </ul>
        </div>
      </div>
      <div className="text-center bg-green-700 py-2 text-sm">
        © {new Date().getFullYear()} CookBook. All rights reserved.
      </div>
    </footer>
  );
}
