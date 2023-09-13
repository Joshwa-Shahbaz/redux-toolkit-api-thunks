import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

const IceCreamView = () => {
  const iceCreamNum = useSelector((state) => state.iceCream.numOfIceCream);

  const dispatch = useDispatch();

  const handleOrderIcecream = () => {
    dispatch(ordered());
  };

  const handleRestockIcecream = () => {
    dispatch(restocked(5));
  };

  return (
    <div>
      <h2>Number of ice cream - {iceCreamNum > 0 ? iceCreamNum : 0}</h2>
      <button onClick={handleOrderIcecream}>Order ice cream</button>
      <button onClick={handleRestockIcecream}>Restock ice cream</button>
    </div>
  );
};

export default IceCreamView;
