/*
Refs ka full form hota hai: Reference
React mein ref ka use hum kisi DOM element ya React component ko directly access karne ke liye karte hain.
-------------------------------------------------------------------------------------------------------------------
🔸 Definition:
React me ref ek shortcut hota hai kisi bhi DOM element ya component ko directly access karne ka, bina 
uske through props ya state ke jaaye.

Matlab agar aapko HTML ka input box ya koi DOM node directly handle karna hai (jaise focus, value change, 
scroll, etc.) to aap ref ka use karte ho.
*/

import React, { Component } from "react";

export class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    // this.inputRef.current.focus()
    console.log(this.cbRef);
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;
