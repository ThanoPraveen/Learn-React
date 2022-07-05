import React from "react";

function ChildComponent(changeChildToParent) {
  return (
    <div>
      <h2>Hello Parent iam child</h2>
      <button onClick={changeChildToParent.greetHandler}>Click me..</button>
    </div>
  );
}

export default ChildComponent;
