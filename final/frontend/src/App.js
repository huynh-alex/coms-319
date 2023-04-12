import "./App.css";
import { Benchmark } from "./Benchmark";
import { Sidebar } from "./Sidebar";


function App() {
  return (
    <div className="container-fluid">
      <div className="row">
          <Sidebar/>
          <Benchmark/>
      </div>
    </div>
  )
}

export default App;
