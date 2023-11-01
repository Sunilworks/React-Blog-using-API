import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="grid-image-container">
      <div className="grid-images-one ">
        <div className="grid-images-caption-one">
          {/* <h2>EXERCISE: Gym helps in Reducing Stress</h2> */}
          {/* <h5>Fitness & Health</h5> */}
        </div>
      </div>

      <div className="grid-images-two ">
        <div className="grid-images-caption-two">
          {/* <h2>SHERSHAH: Story of a man in Uniform</h2> */}
          {/* <h5>Bollywood</h5> */}
        </div>
      </div>

      <div className="grid-images-three ">
        <div className="grid-images-caption-three">
          {/* <h2>PROTEIN:Important Source</h2> */}
          {/* <h5>Food</h5> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
