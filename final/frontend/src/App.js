<<<<<<< HEAD
//import "./App.css";
import React, { useState, useEffect } from "react";
import { Benchmark } from "./pages/Benchmark";
import { Testing } from "./pages/Testing.js";
import { GlobalResults } from "./pages/GlobalResults";

function App() {
  const [page, changePage] = useState("Benchmark");
  return (
    <div className="h-screen">
      <Benchmark
        isActive={page === "Benchmark"}
        changePage={changePage}
      />
      <Testing
        isActive={page === "Testing"}
        changePage={changePage}
      />
      <GlobalResults
        isActive={page === "GlobalResults"}
        changePage={changePage}
      />
=======
import { useState } from "react";
import "./App.css";
// import { Sidebar } from "./Sidebar";
import { Sidebar } from "./components/Sidebar";
import { Benchmark } from "./components/Benchmark";
import { GlobalResults } from "./components/GlobalResults";
import { MyResults } from "./components/MyResults";


function App() {

  const [page, changePage] = useState("Benchmark");
  return (
    <div className="container-fluid">
      <div className="row">
          <Sidebar changePage={changePage}/>
          <Benchmark isActive={page === "Benchmark"} changePage={changePage}/>
          <MyResults isActive={page === "MyResults"} changePage={changePage}/>
          <GlobalResults isActive={page === "GlobalResults"} changePage={changePage}/>
      </div>
>>>>>>> sidebar
    </div>
  )
}

export default App;
