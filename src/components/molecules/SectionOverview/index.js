import React from "react";

const index = () => {
  return (
    <section className="my-3 py-3">
      <div className="container">
        <div className="row">
          <div className="offset-lg-3 col-lg-8">
            <div className="wrapper">
              <div className="d-flex justify-content-between">
                <div className="counting">
                  <h2>250</h2>
                  <p className="text-fade-black-1">House built</p>
                </div>
                <div className="counting">
                  <h2>437</h2>
                  <p className="text-fade-black-1">Projects designed</p>
                </div>
                <div className="counting">
                  <h2>129</h2>
                  <p className="text-fade-black-1">Interiors created</p>
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
