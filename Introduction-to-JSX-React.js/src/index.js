import React from "react";
import ReactDOM from "react-dom";

// const fName = "Yash";
// const lName = "Bansal";
// const num = 6;

// ReactDOM.render(
//   <div>
//     <h1>Hello {fName + " " + lName}!</h1>
//     <p>My lucky number is {num}</p>
//   </div>,
//   document.getElementById("root")
// );

// const name = "Yash"
// const currDate = new Date();
// const year = currDate.getFullYear();

// ReactDOM.render(
//   <div>
//     <p> Created by {name}</p>
//     <p> Copyright {year}</p>
//     </div>,
//     document.getElementById("root")
// );

// ReactDOM.render(
//   <div>
//     <h1 className="heading">
//       My Favourite Foods
//     </h1>
//     <ul>
//       <li>Bacon</li>
//       <li>Jamon</li>
//       <li>Noodles</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );

// const img = "https://picsum.photos/200";

// ReactDOM.render(
//   <div>
//     <h1 className="heading">My Favourite Foods</h1>
//     <img alt="random" src={img + "?grayscale"} />

//     <img
//       className="food-img"
//       alt="bacon"
//       src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190621-air-fryer-bacon-0035-landscape-pf-1567632709.jpg?crop=0.645xw:0.967xh;0.170xw,0.0204xh&resize=480:*"
//     />
//     <img
//       className="food-img"
//       alt="jamon"
//       src="https://images-na.ssl-images-amazon.com/images/I/71lNrnbMXsL._SL1200_.jpg"
//     />
//     <img
//       className="food-img"
//       alt="noodles"
//       src="https://www.errenskitchen.com/wp-content/uploads/2014/04/quick-and-easy-chinese-noodle-soup3-1.jpg"
//     />
//   </div>,
//   document.getElementById("root")
// );

// const customStyle = {
//   color: "red",
//   fontSize: "20px",
//   border: "1px solid black"
// };

// customStyle.color = "purple";

// ReactDOM.render(
//   <h1 style={customStyle}>Hello World!</h1>,
//   document.getElementById("root")
// );

//Challenge:-
//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

// const date = new Date();
// const currentTime = date.getHours();

// let greeting;

// const customStyle = {
//   color: ""
// };

// if (currentTime < 12) {
//   greeting = "Good Morning";
//   customStyle.color = "red";
// } else if (currentTime < 18) {
//   greeting = "Good Afternoon";
//   customStyle.color = "green";
// } else {
//   greeting = "Good Night";
//   customStyle.color = "blue";
// }

// ReactDOM.render(
//   <h1 className="heading" style={customStyle}>
//     {greeting}
//   </h1>,
//   document.getElementById("root")
// );

import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));


