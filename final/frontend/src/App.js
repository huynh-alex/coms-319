import "./App.css";
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
    </div>
  )
}

export default App;
