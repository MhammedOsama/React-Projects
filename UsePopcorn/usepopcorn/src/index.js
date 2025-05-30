import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import StarRating from "./StarRating";
import App from "./App";

// function Test() {
//   const [movieRate, setMovieRate] = useState(0);

//   return (
//     <div>
//       <StarRating color='blue' maxRating={10} onSetRate={setMovieRate} />
//       <p>This movie was rate {movieRate} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating size={24} color='red' className='star' defaultRating={3} />
    <Test /> */}
  </React.StrictMode>
);
