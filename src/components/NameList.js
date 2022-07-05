import React from "react";
import Person from "./Person";
// this file video by 17, 18
// step - 1
function NameList() {
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
    // {
    //   name: "vishwa",
    // },
  ];
  // step - 2
  // step - 3 create person component ->
  const personList = persons.map((person) => (
    // <Person key="unique" person={person} />
    // "key" need to include when creating list of elements
    // step - 5
    <Person key={person.name} person={person} />
    // <h2>
    //   iam {person.name}, iam {person.age} year old, I know {person.skill}
    // </h2>
  ));
  //
  // const names = ["praveen", "kishor", "harini"];
  // const nameList = names.map((name) => <h2>{name}</h2>);
  return (
    <div>
      {/* step - 6 assume the variable */}
      {personList}
      {/* {nameList} */}
      {/* 👇 array.prototype.map() use 👇 */}
      {/* {names.map((name) => (
        <h2>{name}</h2>
      ))} */}
      {/* Normal method to used in array 👇*/}
      {/* <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2> */}
    </div>
  );
}

// step - 7 assume the component by App.js

export default NameList;
