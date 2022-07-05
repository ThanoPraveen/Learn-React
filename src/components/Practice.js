import React from "react";

function Practice() {
  const Persons = [
    {
      name: "ajay",
      age: 23
    },
    {
      name: "vijay",
      age: 43
    }
  ];

  const PersonList = Persons.map((person) => (
    <h2>
      iam {person.name}, iam {person.age} years old
    </h2>
  ));
  return <div>{PersonList}</div>;
}

export default Practice;
