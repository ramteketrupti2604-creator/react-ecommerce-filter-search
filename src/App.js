import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import'./index.css';

// Database
import products from "./db/data";
import Card from "./components/card";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [query, setQuery] = useState("");

  // Input Filter
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Radio Filter (Sidebar)
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Button Filter (Recommended)
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Main Filter Logic Function
  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Searching Filter
    if (query) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Selected Filter
    if (selected && selected !== "all") {
      filteredProducts = filteredProducts.filter(
  ({ category, color, company, newPrice, title }) =>
    category === selected ||
    color === selected ||
    company === selected ||
    newPrice === selected || // <--- Ye line add karein
    title === selected
);
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div style={{ display: "flex", flex: 1 }}>
        {/* Left Side: Sidebar */}
        <Sidebar handleChange={handleChange} selectedCategory={selectedCategory} />

        {/* Right Side: Main Content Area */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {/* Top: Navigation */}
          <Navigation query={query} handleInputChange={handleInputChange} />

          {/* Middle: Recommended Buttons */}
          <Recommended handleClick={handleClick} />

          {/* Bottom: Products Grid */}
          <Products result={result} />
        </div>
      </div>
    </div>
  );
}

export default App;