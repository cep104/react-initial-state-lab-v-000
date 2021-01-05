import React from "react";
import ReactDOM from "react-dom";
import ImageSlider from "./ImageSlider";
import Bomb from "./Bomb";
// undefined method `[]' for nil:NilClass (NoMethodError) must create components!
ReactDOM.render(
  <div>
    <ImageSlider />
    <Bomb initialCount={120} />
  </div>,
  document.getElementById("root")
);
