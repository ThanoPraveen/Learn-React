import React from "react";
// this file video by 17, 18, 19
// Warning: Each child in a list should have a unique "key" prop.
function Person({ person }) {
  return (
    <div>
      <h2>
        {/* step - 4 */}
        {/* step - 5 call the this child component by NameList */}
        {person.id} iam {person.name}, iam {person.age} year old, I know{" "}
        {person.skill}
        {/* <ul>
          <li key={}></li>
          <li ></li>
          <li ></li>
        </ul> */}
      </h2>
    </div>
  );
}

export default Person;
