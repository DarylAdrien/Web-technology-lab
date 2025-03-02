import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import lipstickImg from "../assets/lipstick.png";
import foundationImg from "../assets/foundation.png";
import perfumeImg from "../assets/perfume.png";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">Cosmetic Shop</a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Shop</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
              <li className="nav-item"><a className="nav-link" href="#"><i className="bi bi-cart"></i></a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-dark text-white text-center py-5">
        <div className="container">
          <h1>Glow Like Never Before</h1>
          <p className="lead">Discover the best skincare and beauty products</p>
          <a href="#" className="btn btn-primary btn-lg">Shop Now</a>
        </div>
      </header>

      {/* Featured Products */}
      <section className="container py-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row">
          {/* Product 1 */}
          <div className="col-md-4">
            <div className="card">
              <img src={lipstickImg} className="card-img-top" alt="Lipstick" />
              <div className="card-body text-center">
                <h5 className="card-title">Luxury Lipstick</h5>
                <p className="card-text">$19.99</p>
                <a href="#" className="btn btn-outline-dark">Add to Cart</a>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="col-md-4">
            <div className="card">
              <img src={foundationImg} className="card-img-top" alt="Foundation" />
              <div className="card-body text-center">
                <h5 className="card-title">Flawless Foundation</h5>
                <p className="card-text">$29.99</p>
                <a href="#" className="btn btn-outline-dark">Add to Cart</a>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="col-md-4">
            <div className="card">
              <img src={perfumeImg} className="card-img-top" alt="Perfume" />
              <div className="card-body text-center">
                <h5 className="card-title">Elegant Perfume</h5>
                <p className="card-text">$39.99</p>
                <a href="#" className="btn btn-outline-dark">Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-light text-center py-3">
        <p>&copy; 2025 Cosmetic Shop. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
