import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

function ButtonCotegory({handleOnClick,count,newcotegory }) {
  return (
    <>
       <div className="menu container">
        <div className="main-menu d-flex justify-content-around">
          {newcotegory.map((val,index)=>
          (
            <button key={index}
            className="btn btn-warning"
            onClick={() => handleOnClick(val)}
          >
            {val}
          </button>
          ))}
           <button type="button" className="btn btn-primary position-relative">
            <FaShoppingCart />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {count}
            </span>
          </button>
          {/* <button
            className="btn btn-warning"
            onClick={() => handleOnClick("lunch")}
          >
            Lunch
          </button>
          <button
            className="btn btn-warning"
            onClick={() => handleOnClick("evening")}
          >
            Evening
          </button>
          <button
            className="btn btn-warning"
            onClick={() => handleOnClick("dinner")}
          >
            Dinner
          </button>
          <button className="btn btn-warning" onClick={() => setItems(Menu)}>
            All
          </button>
          <button type="button" className="btn btn-primary position-relative">
            <FaShoppingCart />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {count}
            </span>
          </button> */}
        </div>
      </div>
    </>
  )
}

export default ButtonCotegory
