import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm" style={{height:"80px"}}>
        <div className="container-fluid d-flex align-items-center">
            {/* Logo */}
            <a className="navbar-brand fw-bold fs-3" href="#">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/MAC_Cosmetics_logo.svg" 
                alt="Cosmetic Logo" height="30"/>
            </a>

            {/* Navbar Links */}
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link fw-bold text-dark mx-2" href="#">BEST-SELLERS 🔥</a></li>
                <li className="nav-item"><a className="nav-link fw-bold text-dark mx-2" href="#">NEW</a></li>
                <li className="nav-item"><a className="nav-link fw-bold text-dark mx-2" href="#">LIPS</a></li>
                <li className="nav-item"><a className="nav-link fw-bold text-dark mx-2" href="#">FACE</a></li>
                <li className="nav-item"><a className="nav-link fw-bold text-dark mx-2" href="#">EYES</a></li>
                <li className="nav-item"><a className="nav-link fw-bold text-dark mx-2" href="#">SKINCARE</a></li>
                <li className="nav-item"><a className="nav-link fw-bold text-dark mx-2" href="#">SERVICE</a></li>
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
