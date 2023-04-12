import React from "react";

import Router from "./Router";
import HeightSetter from "./components/helpers/HeightSetter";

import "./styles/main.scss";

function App() {
  return (
    <>
      <Router />
      <HeightSetter />
    </>
  );
}

export default App;
