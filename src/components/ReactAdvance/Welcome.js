// //CLASS COMPONENT
// import React, { Component } from "react";
// class Welcome extends Component {
//   render() {
//     return (
//       <h1>
//         Welcome {this.props.name} a.k.a {this.props.heroName}
//       </h1>
//     );
//   }
// }
// export default Welcome;

//===========================================================================

//DESTRUCTURING PROPS AND STATE

import React from "react";
const Greet = (props) => {
  const { name, heroName } = props;
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
    </div>
  );
};
export default Greet;
