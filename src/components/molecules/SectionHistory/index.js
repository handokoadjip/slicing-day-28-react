import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <section className="my-3 py-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 d-none d-lg-block">
            <div className="wrapper">
              <nav className="text">
                <Link
                  className="text-decoration-none d-block mb-3 active"
                  to="#"
                >
                  About
                </Link>
                <Link className="text-decoration-none d-block mb-3" to="#">
                  Policy
                </Link>
                <Link className="text-decoration-none d-block mb-3" to="#">
                  Quality
                </Link>
                <Link className="text-decoration-none d-block mb-3" to="#">
                  Responsibility
                </Link>
                <Link className="text-decoration-none d-block mb-3" to="#">
                  Enterprises
                </Link>
              </nav>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="wrapper">
              <p className="mb-4 pb-4">
                Founded in 2003 in Riga, Baltic Arch is a global architecture
                company that has grown to include 500 employess working out of a
                combined 7 offices in the largest cities of Latvia.
              </p>
              <p className="mb-4 pb-4">
                From education and healthcare to mixed-use and transit-oriented
                devevlopments, we design for a sustainable and resilient future,
                and to enchance th human experience through the built
                environtemnt, providing all services required for the
                commissioning of objects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
