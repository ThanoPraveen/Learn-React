import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("Button click");
  }
  return (
    <div>
      <hr />
      <h3>Function click</h3>
      <button onClick={clickHandler}>Click</button>
      <hr />
    </div>
  );
}

export default FunctionClick;
