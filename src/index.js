import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import StarRating from "./StarRating";
function Test() {
  const [movieRating, setMovieRating] = useState(0);
  function handleMovieRating(rating) {
    setMovieRating(rating);
  }
  return (
    <div>
      <StarRating
        color="#ffc419 "
        maxRating={10}
        onSetRating={handleMovieRating}
      />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Test /> */}
    <StarRating
      maxRating={5}
      size={25}
      color="#ffc419"
      className="test"
      messages={["Terible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
  </React.StrictMode>
);
