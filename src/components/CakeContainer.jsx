import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered,restocked } from "../features/cake/cakeSlice";

export default function CakeContainer() {
  const numOfCakes = useSelector((state) => state.cake.numOfCake)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of cakes - {numOfCakes} </h2>
      <button onClick={() => dispatch(ordered())}>Order cakes</button>
      <button onClick={() => dispatch(restocked(12))}>Restock cakes</button>
    </div>
  );
}
