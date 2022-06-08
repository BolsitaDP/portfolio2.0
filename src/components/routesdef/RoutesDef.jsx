import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Aboutme from "../../pages/aboutme/Aboutme";
import Home from "../../pages/home/Home";
import Skills from "../../pages/skills/Skills";

const RoutesDef = () => {
  const [cfPage, setCfPage] = useState("");

  const cameFrom = (data) => {
    switch (data) {
      case "home":
        setCfPage("cameFromHome");
        break;
      case "skills":
        setCfPage("cameFromSkills");
        break;
      case "aboutme":
        setCfPage("cameFromAboutme");
        break;

      default:
        break;
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Home cameFrom={cameFrom} cameFromPage={cfPage} />}
      />
      <Route
        path="/skills"
        element={<Skills cameFrom={cameFrom} cameFromPage={cfPage} />}
      />
      <Route
        path="/aboutme"
        element={<Aboutme cameFrom={cameFrom} cameFromPage={cfPage} />}
      />
    </Routes>
  );
};

export default RoutesDef;
