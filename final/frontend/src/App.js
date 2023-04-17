import { useState } from "react";
import "./App.css";
// import { Sidebar } from "./Sidebar";
import { Sidebar } from "./components/Sidebar";
import { Benchmark } from "./components/Benchmark";
import { GlobalResults } from "./components/GlobalResults";
import { MyResults } from "./components/MyResults";
import { TestInProgress } from "./components/TestInProgress";


function App() {

  const [page, changePage] = useState("Benchmark");
  return (
    <div className="container-fluid">
      <div className="row">
          <Sidebar changePage={changePage}/>
          <Benchmark isActive={page === "Benchmark"} changePage={changePage}/>
          <MyResults isActive={page === "MyResults"} changePage={changePage}/>
          <GlobalResults isActive={page === "GlobalResults"} changePage={changePage}/>
          <TestInProgress isActive={page === "TestInProgress"} changePage={changePage}/>
      </div>
    </div>
  )
}

export default App;
