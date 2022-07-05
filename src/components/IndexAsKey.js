import React from "react";
import Person from "./Person";
// this file video by 19
// step - 1
function IndexAsKey() {
  // Index as Key (step - 1)
  const names = ["ramar", "tom", "jerry"];
  const persons = [
    {
      // help as list items include that id in every items unique to decleared
      id: 1,
      name: "Praveen",
      age: 23,
      skill: "React"
    },
    {
      id: 2,
      name: "kishor",
      age: 17,
      skill: "none"
    },
    {
      id: 3,
      name: "harini",
      age: 10,
      skill: "Good Reading"
    }
  ];
  // step - 2
  // step - 3 create person component file ->
  // Index as Key (step - 2) Replace variable Name
  // const personList = persons.map((person) => (
  const nameList = names.map((name) => (
    // step - 5
    // Index as Key (step - 3) inner text tag
    <h2>{name}</h2>
  ));

  return (
    <div>
      {/* step - 6 assume the variable */}
      {/* {personList} */}
      {/* Index as Key (step - 4) change assume the variable name */}
      {nameList}
    </div>
  );
}

// step - 7 assume the component by App.js

export default IndexAsKey;
