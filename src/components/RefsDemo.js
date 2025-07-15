/*
ReactRef can be used both in functinal component useRef() and as well as class components createRef() .
Refs ka full form hota hai: Reference
React mein ref ka use hum kisi DOM element ya React component ko directly access karne ke liye karte hain.
-------------------------------------------------------------------------------------------------------------------
🔸 Definition:
React me ref ek shortcut hota hai kisi bhi DOM element ya component ko directly access karne ka, bina 
uske through props ya state ke jaaye.

Matlab agar aapko HTML ka input box ya koi DOM node directly handle karna hai (jaise focus, value change, 
scroll, etc.) to aap ref ka use karte ho.

-----------------------------------------------------------------------------------------------------------
USES:-

1.DOM node se value lena bina re-render ke
2.Focus, text selection ya media control karna
3.Manual animations
4.3rd party DOM libraries ke sath kaam karna
5.Scroll position read/write karna

------------------------------------------------------------------------------------------------------------

🔸 Real Life Use Cases:

-Autofocus input jab form load ho.
-Jab page load ho to kisi input field pe automatically cursor chahiye ho.
-Previous props ya value ko store karna:
-Jaise agar tumhe previous counter value ya scroll position store karni ho bina re-render ke.
-DOM element ko access karna for animation:
-Agar tumhe kisi div ka size, position, ya className manipulate karna ho with GSAP or other libraries.
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
