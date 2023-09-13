import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
  const cakeNum = useSelector((state) => state.cake.numberOfCakes);

  const dispatch = useDispatch();

  const handleOrderCake = () => {
    dispatch(ordered());
  };

  const handleRestockCakes = () => {
    dispatch(restocked(5));
  };

  return (
    <div>
      <h2>Number of cakes - {cakeNum > 0 ? cakeNum : 0}</h2>
      <button onClick={handleOrderCake}>Order cake</button>
      <button onClick={handleRestockCakes}>Restock cakes</button>
    </div>
  );
};

export default CakeView;
