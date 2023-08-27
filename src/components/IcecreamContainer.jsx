import React from "react";
import { useSelector } from "react-redux";

export default function IcecreamContainer() {
  const numOfIcecream = useSelector((state) => state.icecreame.numOfIcecreame)
  return (
    <div>
      <h2>Number of ice creams - {numOfIcecream}</h2>
      <button>Order ice cream</button>
      <button>Restock ice cream</button>
    </div>
  );
}
