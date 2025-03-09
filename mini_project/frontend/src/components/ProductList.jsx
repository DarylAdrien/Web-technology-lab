import React from "react";
import ProductCard from "./ProductCard";
import lipstick from "../assets/lipstick.png";
import perfume from "../assets/perfume.png";
import foundation from "../assets/foundation.png";

const products = [
    { id: 1, name: "Perfume", price: 30, image: perfume },
    { id: 2, name: "Lipstick", price: 20, image: lipstick },
  { id: 3, name: "Foundation", price: 25, image: foundation },
];

const ProductList = () => {
  return (
    <div className="container mt-5">
      <h2 className="fw-bold mb-4">Shop Favourites</h2> {/* Section Title */}
      <div className="row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
