import React, { useState } from "react";
import Category from "./Category";
import productdetail from "./ProductDetails/ProductDetails";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mobile sidebar toggle

  // Filter products based on selected category or subcategory
  const filteredProducts = selectedSubcategory
    ? productdetail.filter((product) => product.subcategory === selectedSubcategory)
    : selectedCategory
    ? productdetail.filter((product) => product.category === selectedCategory)
    : productdetail;

  return (
    <div className="px-4 sm:px-8 md:px-20 py-6 md:py-10 bg-gray-100 min-h-screen">
      {/* Showing Results Text */}
      <div className="text-center mb-6">
        <p className="text-gray-700 text-lg font-semibold">Showing {filteredProducts.length} results</p>
      </div>

      {/* Mobile Show Filters Button */}
      <button
        className="md:hidden bg-blue-500 text-white py-2 px-4 rounded-lg w-full mb-4 font-semibold shadow-md hover:bg-blue-600 transition"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "Hide Filters" : "Show Filters"}
      </button>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar for Category Filtering (Hidden on Mobile) */}
        <div
          className={` md:relative md:block md:h-full w-3/4 md:w-1/4 bg-white p-4 mr-6 md:mr-4 rounded-lg shadow-lg   transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-300 md:block ${isSidebarOpen ? "block" : "hidden"}`}
        >
          <Category
            onSelectCategory={(category) => {
              setSelectedCategory(category);
              setSelectedSubcategory(null);
              setIsSidebarOpen(false); // Close on mobile
            }}
            onSelectSubcategory={(subcategory) => {
              setSelectedSubcategory(subcategory);
              setSelectedCategory(null);
              setIsSidebarOpen(false); // Close on mobile
            }}
          />
        </div>

        {/* Product Grid (Hidden on Mobile by Default) */}
        <div className={`w-full h-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${isSidebarOpen ? "hidden" : "block"}`}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div key={index} className="border rounded-lg shadow bg-white overflow-hidden transform hover:scale-105 transition duration-200">
                <div className="p-4">
                  <span className="bg-gray-200 text-gray-700 text-xs uppercase font-semibold px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
                <img src={product.image} alt={product.title} className="w-full h-40 object-contain" />
                <div className="p-4"> 
                  <h3 className="font-semibold text-lg">{product.title}</h3>
                  <a href={product.link} className="text-blue-500 underline text-sm mt-2 inline-block hover:text-blue-700 transition">
                    View Details →
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
