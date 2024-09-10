import React, { useState } from "react";
import Menu from "./Menu";

import ItemsSec from "./ItemsSec";
import ButtonCotegory from "./ButtonCotegory";

function ShowData() {
  const [items, setItems] = useState(Menu);
  const [count, setCount] = useState(0);


  const newcotegory = [...new Set(Menu.map((val,index)=>(val.category))),"All"];
  const handleOnClick = (categoryItem) => {

    if(categoryItem === "All")
    {
      setItems(Menu);
      return;
    }
    const updateItems = Menu.filter((currEle) => {
      return currEle.category === categoryItem;
    });
    return setItems(updateItems);
  };

  const handleOnClickOrder = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1 className="mt-5 text-center heading">Order Your Favourite Dish</h1>
      <hr />
      <ButtonCotegory handleOnClick={handleOnClick} count={count} newcotegory={newcotegory }/>
      <ItemsSec items={items} handleOnClickOrder={handleOnClickOrder} />
    </>
  );
}

export default ShowData;
