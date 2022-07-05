import React from "react";

// React JSX
const Hello = () => {
  // return (
  //   <div>
  //     <h1>Hello Praveen</h1>
  //   </div>
  // );

  return React.createElement(
    "div",
    { id: "need", className: "Fresh" },
    React.createElement(
      "h1",
      { className: "Heading" },
      "Heading tag for without JSX"
    ),
    React.createElement("p", {}, "lorem this is large size of paragraph")
  );
};

export default Hello;
