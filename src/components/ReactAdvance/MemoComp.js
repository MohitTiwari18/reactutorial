/*
Note: This is used in functional component only, not in class based component.
Here we are going to learn about useMemo, useMemo used in functional component with same work which is done
by pureComponent method in classbased component, it does the same work , prevent extra Re-rendring.
--------------------------------------------------------------------------------------------------------------
What is React.memo?
=> React.memo ek higher order component (HOC) hai jo functional component ko wrap karta hai taki unnecessary
 re-renders se bacha ja sake. Iska kaam ye hai ki agar props change nahi hue hain to component dubara render na ho.

 🔹 Simple Definition:
React.memo ek tarika hai functional components ko optimize karne ka. Ye check karta hai ki props change hue hain 
ya nahi. Agar nahi hue to purana component use kar leta hai bina re-render kiye.

🔹 Kyu use karte hain React.memo?
✅ Performance optimization ke liye
✅ Bina wajah re-render hone se bachne ke liye
✅ Jab component me heavy calculation ya DOM updates ho
✅ Jab parent component bar-bar re-render hota ho, lekin child component ke props same hi ho

*/

import React from "react";

function MemoComp({ name }) {
  console.log("Rendering MemoComponent");
  return <div>{name}</div>;
}

export default React.memo(MemoComp);
