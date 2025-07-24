//USING PROPS IN REACT HERE
import React from "react";
const Greet = (props) => {
  console.log(props);
  return (
    <>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
      {/* props.children is used to render the jsx content between a parents components and fkor dynamic contents you dont know how to pass the content than pass it by using props.children */}
    </>
  );
};
export default Greet;
