/*
QUESTION - WHY TO USE PURE COMPONENT?
ANSWER - pure component used to prevent unnecessary render which can give us performance boost in certain scenarios. 

REGULAR COMPONENT
A regular component does not implement the shouldComponentUpdate method. it always returns true by default.

--------------------------------------------------------------------------------------------------------------------
PURE COMPONENT
A pure component on the other hand implements shouldComponentUpdate with a shallow props and state comparision.
-------------------------------------------------------------------------------------------------------------------

SHALLOW COMPARISION (SC)
🔍 What is Shallow Comparison (SC)?
Shallow Comparison ka matlab hota hai:
Sirf 1st level ke data (properties/values) ko === operator se compare karna.
Yeh deeply andar ke values ya nested objects ko compare nahi karta.

🔹 SC ke 2 Main Types hote hain:
Primitive types – Jaise: string, number, boolean, null, undefined
Complex types – Jaise: object, array, function


========================================================================================================
PRIMITIVE TYPES:
a (SC) b returns true if a and b have the same value and are of the same types.
EX:String 'vishwas' (SC) string 'vishwas' return true
[
Note:-
💡Primitive values ko compare karte time, === (strict equality) se actual value compare hoti hai.

🔹example:
const a = 10;
const b = 10;
console.log(a === b); // ✅ true
]
=======================================================================================================

COMPLEX TYPES:
a (SC) b return true if a and b refrences the exact same object.
[
Note:
💡Complex types jaise arrays, objects ya functions ko compare karte time, === se unke memory reference compare hote hain — na ki unke andar ke values.

🔹example:
const obj1 = { name: "Ram" };
const obj2 = { name: "Ram" };
console.log(obj1 === obj2); // ❌ false (different references)
]
========================================================================================================

PURE COMPONENT:-
A pure component implements shouldComponentUpdate with a shallow prop and state comparision.
IT DOES THE SHALLOW COMPARISION OF:-
prevState with currentState
prevProps with currentProps
and if there will be difference between both prevState with currentState than the component will Re-render neither will not Re-render.
*/

import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("Pure Comp render");
    return <div>Pure Component {this.props.name}</div>;
  }
}

export default PureComp;
