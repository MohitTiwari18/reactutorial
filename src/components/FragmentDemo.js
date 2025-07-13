/*
🔷 React Fragment kya hota hai? 
React mein agar aap multiple JSX elements ko ek hi component ke andar return karna chahte ho bina extra <div> ke,
 to us situation mein <React.Fragment> ka use hota hai. like: ek he div main ek h1 heading likhna and than a paragraph.

 🔶 1. Problem Without Fragment
React mein aap sirf ek hi parent element return kar sakte ho. Agar multiple elements return karne ki koshish
 ki to error aayega.
|-------------------------  
|   function MyComponent() {
|   return (
|   <h1>Title</h1>
|   <p>Paragraph</p>
|      );
|     }
⚠️ Error: JSX expressions must have one parent element.
----------------------------  

🔶 2. Solution: Fragment use karo
------------------------------------
function MyComponent() {
  return (
    <React.Fragment>
      <h1>Title</h1>
      <p>Paragraph</p>
    </React.Fragment>
  );
}
-----------------------------------------

🔶 3. Short Syntax: <>...</>
------------------------------------
function MyComponent() {
  return (
    <>
      <h1>Title</h1>
      <p>Paragraph</p>
    </>
  );
}
----------------------------------------
🔶 4. Fragment ka Use Kab Karte Hain?

| Use Case                                  | Why Fragment is Useful                                    |
| ----------------------------------------- | --------------------------------------------------------- |
| ✅ Multiple JSX elements return karne hain | Without wrapping in extra `div`                           |
| ✅ DOM clean rakhna hai                    | Extra `div` nesting avoid hoti hai                        |
| ✅ Layout ya CSS affect nahi karna         | `div` lagane se unwanted styling ya layout toot sakta hai |

 */

import React from "react";

function FragmentDemo() {
  return (
    <React.Fragment>
      <h1>Fragment Demo</h1>
      <p>This describes the Fragment Demo component</p>
    </React.Fragment>
  );
}

export default FragmentDemo;
