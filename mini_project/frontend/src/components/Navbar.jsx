import React from "react";
import logo from "../assets/logo_cosmetic_processed.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm" style={{height:"80px"}}>
        <div className="container-fluid d-flex align-items-center">
            {/* Logo */}
            <a className="navbar-brand fw-bold fs-3" href="/">
            <img src= {logo}
                alt="Cosmetic Logo" width="200" height="80"/>
            </a>

            {/* Navbar Links */}
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link fw-bold text-dark mx-2" to="/best_seller">
                        BEST-SELLERS 🔥
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link fw-bold text-dark mx-2" to="/new">
                       NEW
                    </Link></li>
                <li className="nav-item">
                    <Link className="nav-link fw-bold text-dark mx-2" to="/lips">
                        LIPS
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link fw-bold text-dark mx-2" to="/face">
                        FACE       
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link fw-bold text-dark mx-2" to="/eyes">
                        EYES
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link fw-bold text-dark mx-2" to="/skincare">
                        SKINCARE
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link fw-bold text-dark mx-2" to="/service">
                        SERVICE
                    </Link>
                </li>
            </ul>
            </div>

            {/* Right Icons (Search, Wishlist, Cart, User) */}
            <div className="d-flex align-items-center ms-auto">
            {/* Search */}
            <form className="d-flex me-3">
                <input className="form-control rounded-pill px-3"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    style={{ width: "150px" }} />
            </form>

            {/* Wishlist */}
            <a href="#" className="text-dark me-3">
                <i className="bi bi-heart fs-4"></i>
            </a>

            {/* Cart */}
            <a href="#" className="text-dark me-4 position-relative">
                <i className="bi bi-bag fs-4"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge bg-danger">0</span>
            </a>

            {/* User */}
            <a href="#" className="text-dark">
                <i className="bi bi-person fs-4"></i>
            </a>
            </div>
        </div>
        </nav>

  );
};

export default Navbar;
