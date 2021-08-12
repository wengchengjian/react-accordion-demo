import React, { useState } from "react";
import Accordion from "./Accordion";
import { accordionData } from "./utils/cotent";
import "./App.css";
const App = () => {
  return (
    <>
      <h1>React Accordion Demo</h1>
      <div className="accordion">
        {accordionData.map((item) => {
          return <Accordion title={item.title} content={item.content} />;
        })}
      </div>
    </>
  );
};

export default App;
