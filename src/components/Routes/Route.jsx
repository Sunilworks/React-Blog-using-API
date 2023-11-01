import Home from "../Pages/Home/Home";
import Bollywood from "../Pages/Bollywood/Bollywood";
import Technology from "../Pages/Technology/Technology";
import Hollywood from "../Pages/Hollywood/Hollywood";
import Fitness from "../Pages/Fitness/Fitness";
import Food from "../Pages/Food/Food";
import Error from "../Pages/Error/Error";

import { Route, Routes } from "react-router-dom";

import React from "react";
import Description from "../Pages/Common/Description";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bollywood" element={<Bollywood /> } />
        <Route path="/technology" element={<Technology />} />
        <Route path="/hollywood" element={<Hollywood />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/food" element={<Food />} />
        {/* <Route path="/description" element={<Description />} /> */}
        <Route path="/description/:id" element={<Description />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default Routing;
