import React, { Component } from "react";
import Person from "./components/Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Praveen",
      age: 23,
      skill: "React",
    },
    {
      id: 2,
      name: "kishor",
      age: 17,
      skill: "none",
    },
    {
      id: 3,
      name: "harini",
      age: 10,
      skill: "Good Reading",
    },
    // {
    //   name: "vishwa",
    // },
  ];

  const personList = persons.map((person) => (
    <Person person={person} />
    // <h2>
    //   iam {person.name}, iam {person.age} year old, I know {person.skill}
    // </h2>
  ));
  //
  // const names = ["praveen", "kishor", "harini"];
  // const nameList = names.map((name) => <h2>{name}</h2>);
  return (
    <div>
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

export default NameList;
