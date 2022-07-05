import React from "react";

// function Greet() {
//   return <h2>React function welcome</h2>;
// }

// Destructuring
// const Greet = ({name, heroName}) => {
const Greet = (props) => {
  const { name, heroName } = props;
  return (
    <div>
      <h1>
        Hello {name} superHero {heroName}
      </h1>
      {/* {props.children} */}
    </div>
  );
};

export default Greet;
