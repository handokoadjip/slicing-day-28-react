import { Img2 } from "assets/source/image";
import React from "react";

const index = () => {
  return (
    <section className="my-3 py-3">
      <div className="container">
        <div className="row">
          <div className="offset-lg-3 col-lg-9">
            <div className="wrapper">
              <figure className="m-0">
                <img className="w-100" src={Img2} alt="image-2" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
