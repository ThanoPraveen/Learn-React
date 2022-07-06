import React from "react";
import "./myStyle.css";
// ccs regular
// step - 2 create myStyle.css and import

// step - 1 / create function
function StyleSheet(props) {
  // step - 4 App.js component call and add props value into be conditional change the true or false change by color
  let Name = props.primary ? "primary" : "";
  return (
    <div>
      {/* step - 3 declare class name  */}
      {/* <h2 className="primary">StyleSheet</h2> */}
      {/* 👇 that is className attribute */}
      {/* <h2 className={Name}>StyleSheet</h2> */}
      {/* step - 6 / className attribute will be change template iterates  */}
      <h2 className={`${Name} font-xl`}>StyleSheet</h2>
    </div>
  );
}

export default StyleSheet;
