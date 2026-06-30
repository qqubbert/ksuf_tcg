// import { useState } from 'react'
import { Outlet } from "react-router-dom";
import { Header } from "@widgets";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
