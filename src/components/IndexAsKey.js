import React from "react";
// import Person from "./Person";
// this file video by 19
// step - 1
function IndexAsKey() {
  // Index as Key (step - 1)
  const names = ["ramar", "tom", "jerry", "tom"];
  // Index as key (step - 6) add duplicate  index value get the error on the console

  // react_devtools_backend.js:4026 Warning: Encountered two children with the same key, `tom`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.

  // const nameList = names.map((name) => (
  // index as key (step - 6) - add another attribute, that time two attribute allowed
  // (name, index) -> name which represent item iteration and index of the item in the list
  const nameList = names.map((name, index) => (
    // Index as Key (step - 3) inner text tag
    // <h2>{name}</h2>
    // index as key (step - 5) unique to declare key value
    // <h2 key={name}>{name}</h2>
    // index as key (step - 7) change key value index and display the index h2 element
    <h2 key={index}>
      {/* declare the index value that every item receives unique key value */}
      {index} {name}
    </h2>
    // key
  ));

  return (
    <div>
      {/* Index as Key (step - 4) change assume the variable name */}
      {nameList}
    </div>
  );
}
// this error not include by key and key value
// 👆 Using that method have the error 👇 console error
// bundle.js:sourcemap:37983 Warning: Each child in a list should have a unique "key" prop.

// step - 7 assume the component by App.js

export default IndexAsKey;
