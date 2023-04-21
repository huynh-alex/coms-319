import { useState, useEffect } from "react";
import "./App.css";
// import { Sidebar } from "./Sidebar";
import { Sidebar } from "./components/Sidebar";
import { Benchmark } from "./components/Benchmark";
import { GlobalResults } from "./components/GlobalResults";
import { MyResults } from "./components/MyResults";
import { TestInProgress } from "./components/TestInProgress";
import { UserInfo } from "./components/UserInfo";

function App() {
  const [page, changePage] = useState("Benchmark");
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    console.log("User's info: ", userInfo);
  }, [userInfo]);

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar changePage={changePage} />
        <Benchmark isActive={page === "Benchmark"} changePage={changePage} />
        <MyResults
          isActive={page === "MyResults"}
          changePage={changePage}
          userInfo={userInfo}
        />
        <GlobalResults
          isActive={page === "GlobalResults"}
          changePage={changePage}
        />
        <TestInProgress
          isActive={page === "TestInProgress"}
          changePage={changePage}
          userInfo={userInfo}
        />
        <UserInfo setUserInfo={setUserInfo} />
      </div>
    </div>
  );
}

export default App;
