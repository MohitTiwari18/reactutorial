// //child component using without parameters
// import React from "react";

// function ChildComponent(props) {
//   return (
//     <div>
//       <button onClick={props.greetHandler}>Greet Parent</button>
//     </div>
//   );
// }

// export default ChildComponent;

//====================================================

//with function parameter print parameter using props
import React from "react";

const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={() => props.greetHandler("child")}>Greet Parent</button>
    </div>
  );
};

export default ChildComponent;
