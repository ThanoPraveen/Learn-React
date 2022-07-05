import React from "react";

// Warning: Each child in a list should have a unique "key" prop.
function Person({ person }) {
  return (
    <div>
      <h2>
        iam {person.name}, iam {person.age} year old, I know {person.skill}
      </h2>
    </div>
  );
}

export default Person;
