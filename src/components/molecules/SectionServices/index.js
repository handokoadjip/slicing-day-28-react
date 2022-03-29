import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <section className="my-3 py-3">
      <div className="container">
        <div className="row">
          <div className="offset-lg-3 col-lg-8">
            <div className="wrapper">
              <h2 className="fs-6 mb-3">Services we provide:</h2>
              <div className="row">
                <div className="col-lg-6">
                  <nav className="text">
                    <Link
                      className="text-decoration-none text-fade-black-1 d-block mb-3"
                      to="#"
                    >
                      House-building
                    </Link>
                    <Link
                      className="text-decoration-none text-fade-black-1 d-block mb-3"
                      to="#"
                    >
                      Engineering structure
                    </Link>
                    <Link
                      className="text-decoration-none text-fade-black-1 d-block mb-3"
                      to="#"
                    >
                      Bridges and hydrotechnical structures
                    </Link>
                  </nav>
                </div>
                <div className="col-lg-6">
                  <nav className="text">
                    <Link
                      className="text-decoration-none text-fade-black-1 d-block mb-3"
                      to="#"
                    >
                      Recontructions and restoration
                    </Link>
                    <Link
                      className="text-decoration-none text-fade-black-1 d-block mb-3"
                      to="#"
                    >
                      Interior
                    </Link>
                    <Link
                      className="text-decoration-none text-fade-black-1 d-block mb-3"
                      to="#"
                    >
                      Designing
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
