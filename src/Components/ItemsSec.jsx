import React from "react";

function ItemsSec({ items, handleOnClickOrder }) {
  return (
    <>
      <div className="itms container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {items.map((val) => {
                const { id, name, imagesrc, price, description } = val;
                return (
                  <>
                    <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4">
                      <div className="row inside mx-3 my-3 card">
                        {/* for image */}
                        <div className="col-12 col-md-12 col-lg-12 img-div ">
                          <img
                            src={imagesrc}
                            className="card-img-top img-fluid"
                            alt="Menu img....."
                          />
                        </div>
                        <div className="card-body col-12 col-md-12 col-lg-12 ">
                          <h5 className="card-title">{name}</h5>
                          <p className="card-text">{description}</p>
                          <h2>{price}</h2>
                          <a
                            href="#"
                            className="btn btn-primary"
                            onClick={handleOnClickOrder}
                          >
                            Order Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemsSec;
