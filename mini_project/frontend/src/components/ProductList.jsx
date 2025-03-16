import React from "react";
import ProductCard from "./ProductCard";
import lipstick from "../assets/lipstick.png";
import perfume from "../assets/perfume.png";
import foundation from "../assets/foundation.png";
import { useEffect, useState } from "react";

// const products = [
//   { id: 1, name: "Lipstick", price: '2,550.00', image: lipstick , perprice: '728.57/g' , description: 'Sleek Satin Finish , Hydrates Lips , Pigment Rich Comfortable color',rating:4},
//     { id: 2, name: "Perfume", price: '3,100', image: perfume ,perprice: '84.00/ml' , description : 'Multitasking Setting Spray, Alcohol-Free, Hydrates/Primes/Sets/Refreshes',rating:0},
//   { id: 3, name: "Foundation", price: '4,200', image: foundation ,perprice: '281.82/g' , description :'A one-step pressed powder and foundation that gives skin a 12-hour ultra-matte finish while controlling shine and without causing acne.',rating:3},
// ];



// const products = [
//     {
//       id: 1,
//       title: "VELVET TEDDY",
//       subtitle: "M·A·C XIMAL SILKY MATTE LIPSTICK",
//       description: "Silky Matte Finish, 12HR Comfortable Wear",
//       image: lipstick,
//       shades: "1 shade",
//       rating: 2 , 
//       perprice: '728.57/g' , 
//       price : '5,100.25'
//     },
//     {
//       id: 2,
//       title: "BODACIOUS",
//       subtitle: "M·A·C LOCKED KISS INK™ 24HR LIPCOLOUR",
//       description: "24HR Weightless Colour",
//       image: perfume,
//       shades: "3 shades",
//       rating: 5 , 
//       perprice: '728.57/g' ,
//       price : '5,100.25'
//     },
//     {
//       id: 3,
//       title: "GLIDE OR DIE",
//       subtitle: "M·A·C COLOUR EXCESS GEL PENCIL EYE LINER",
//       description: "Gel Liner, Long-Wearing, Waterproof",
//       image: foundation,
//       shades: "2 shades",
//       rating: 3 , 
//       perprice: '728.57/g' ,
//       price : '5,100.25'
//     },
//   ];

const ProductList = ({category}) => {
  const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/products/?category=${category}`)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error fetching products:", error));
    }, [category]);


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
