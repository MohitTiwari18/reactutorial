// //using without parameters
// import React, { Component } from "react";
// import ChildComponent from "./ChildComponent";

// class ParentComponent extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       parentName: "parent",
//     };
//     this.greetParent = this.greetParent.bind(this);
//   }

//   greetParent() {
//     alert(`Hello ${this.state.parentName}`);
//   }
//   render() {
//     return (
//       <div>
//         <ChildComponent greetHandler={this.greetParent} />
//       </div>
//     );
//   }
// }

// export default ParentComponent;

//===============================================================

//use props using function parameters
import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };

    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
