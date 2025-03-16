import React from "react";

const renderStars = (rating) => {
  const fullStar = "★";
  const emptyStar = "☆";
  return fullStar.repeat(rating) + emptyStar.repeat(5 - rating);
}; 

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-4">
      <div className="card h-100 text-center"> {/* Ensures the card height is uniform */}
        <img src={`http://127.0.0.1:8000${product.image}`} alt={product.title} width="100" className="card-img-top mx-auto" style={{ width: "80%", height: "auto" }} />
        <div className="card-body d-flex flex-column align-items-center">
          <h5 className="fw-bold">{product.title}</h5>
          <p className="text-muted small">{product.subtitle}</p>
          <p className="small">{product.description}</p>
          <p className="fw-semibold">{product.shades}</p>
          <p className="card-text stars">{renderStars(product.rating)}</p>
          <p className="card-text"><strong>₹{product.price}</strong> | {product.perprice}</p>
          <p className="card-text">MRP Inclusive of all taxes</p>
          <button className="btn btn-dark w-50 rounded-pill mt-auto">Add to Bag</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
