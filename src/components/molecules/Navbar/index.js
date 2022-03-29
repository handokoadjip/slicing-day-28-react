import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light px-4 border-bottom">
      <div className="container-fluid px-0 py-4 d-flex justify-content-between">
        <Link
          className="navbar-brand text-center text-uppercase fs-3 mp-0"
          to="#"
        >
          <span className="text-fade-black-1">baltic</span>arch.
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav text-uppercase">
            <li className="nav-item px-0 px-lg-4">
              <Link
                className="nav-link text-center active"
                aria-current="page"
                to="#"
              >
                home
              </Link>
            </li>
            <li className="nav-item px-0 px-lg-4">
              <Link className="nav-link text-center" to="#">
                pages
              </Link>
            </li>
            <li className="nav-item px-0 px-lg-4">
              <Link className="nav-link text-center" to="#">
                elements
              </Link>
            </li>
            <li className="nav-item px-0 px-lg-4">
              <Link className="nav-link text-center" to="#">
                blog
              </Link>
            </li>
            <li className="nav-item px-0 px-lg-4">
              <Link className="nav-link text-center" to="#">
                portofolio
              </Link>
            </li>
            <li className="nav-item px-0 px-lg-4">
              <Link className="nav-link text-center" to="#">
                shop
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-flex justify-content-center align-items-center d-none d-lg-block">
          <Link className="text-decoration-none mx-3" to="#">
            <i className="fas fa-search"></i>
          </Link>
          <Link className="text-decoration-none mx-3" to="#">
            RU
          </Link>
          <Link className="text-decoration-none mx-3" to="#">
            LV
          </Link>
          <Link className="text-decoration-none mx-3 active" to="#">
            EN
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default index;
