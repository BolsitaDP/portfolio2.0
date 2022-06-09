import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Aboutme from "../../pages/aboutme/Aboutme";
import Contact from "../../pages/contact/Contact";
import Home from "../../pages/home/Home";
import Projects from "../../pages/projects/Projects";
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
      case "contact":
        setCfPage("cameFromContact");
        break;
      case "projects":
        setCfPage("cameFromProjects");
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
      <Route
        path="/contact"
        element={<Contact cameFrom={cameFrom} cameFromPage={cfPage} />}
      />
      <Route
        path="/projects"
        element={<Projects cameFrom={cameFrom} cameFromPage={cfPage} />}
      />
    </Routes>
  );
};

export default RoutesDef;
