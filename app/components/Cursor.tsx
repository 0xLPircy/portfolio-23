// "use client";
// import { useEffect, useRef } from "react";

// const Cursor = () => {
//   //   const cur = (e) => {
//   //     console.log(e);
//   //     // cursor.style.top = y + "px";
//   //     //   cursor.style.left = x + "px";
//   //     //   cursor.style.display = "block";
//   //   };
//   const ref = useRef();
//   useEffect(() => {
//     const cursor = ref.current;
//     console.log(cursor);
//     document.addEventListener("mousemove", (e) => {
//       let x = e.pageX;
//       let y = e.pageY;

//       cursor.style.top = y + "px";
//       cursor.style.left = x + "px";
//       cursor.style.display = "block";
//     });
//     document.addEventListener("mouseout", () => {
//       cursor.style.display = "none";
//     });
//   }, []);
//   return <div className="cursor"></div>;
// };

// export default Cursor;
