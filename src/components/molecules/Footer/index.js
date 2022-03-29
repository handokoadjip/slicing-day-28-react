import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <footer className="border-top">
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-6 mb-5 order-0 order-lg-0">
            <div className="wrapper">
              <div className="mb-5 mb-lg-0 text-center text-lg-start">
                <p className="mp-0">
                  Subscribe to our newsletter to receive exclusive
                  <br /> information about us and our services
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-5 order-2 order-lg-1">
            <div className="wrapper">
              <div className="mb-5 mb-lg-0">
                <ul className="d-flex flex-column flex-lg-row justify-content-between mp-0">
                  <li className="d-inline">
                    <Link className="nav-link text-center" to="#">
                      Company
                    </Link>
                  </li>
                  <li className="d-inline">
                    <Link className="nav-link text-center" to="#">
                      Objects
                    </Link>
                  </li>
                  <li className="d-inline">
                    <Link className="nav-link text-center" to="#">
                      Services
                    </Link>
                  </li>
                  <li className="d-inline">
                    <Link className="nav-link text-center" to="#">
                      Careers
                    </Link>
                  </li>
                  <li className="d-inline">
                    <Link className="nav-link text-center" to="#">
                      Contacts
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-5 order-0 order-lg-2">
            <div className="wrapper">
              <div className="mb-5 mb-lg-0 w-50 border-bottom-1px mx-auto mx-lg-0">
                <div className="d-flex align-items-center">
                  <input
                    className="form-control border-0"
                    type="email"
                    id="email"
                  />
                  <i className="fas fa-arrow-right text-fade-black-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-5 order-3 order-lg-3">
            <div className="wrapper">
              <div className="mb-5 mb-lg-0">
                <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                  <Link className="text-decoration-none mx-3" to="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link className="text-decoration-none mx-3" to="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link className="text-decoration-none mx-3" to="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link className="text-decoration-none mx-3" to="#">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-5 order-4 order-lg-4">
            <div className="wrapper">
              <div className="mb-5 mb-lg-0 text-center text-lg-start">
                <p className="text-fade-black-1">
                  &copy; <span className="text-black">Baltic Arch.</span> All
                  Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
