import { useState, useEffect } from "react";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { Benchmark } from "./components/Benchmark";
import { GlobalResults } from "./components/GlobalResults";
import { MyResults } from "./components/MyResults";
import { TestInProgress } from "./components/TestInProgress";
import { UserInfo } from "./components/UserInfo";

function App() {
  const [page, changePage] = useState("Benchmark");
  const [userInfo, setUserInfo] = useState({});
  const [userExists, setUserExists] = useState(false);

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
          userInfo={userInfo}
          userExists={userExists}
          setUserExists={setUserExists}
        />
        <GlobalResults
          isActive={page === "GlobalResults"}
        />
        <TestInProgress
          isActive={page === "TestInProgress"}
          userInfo={userInfo}
          userExists={userExists}
          setUserExists={setUserExists}
        />
        <UserInfo setUserInfo={setUserInfo} setUserExists={setUserExists} />
      </div>
    </div>
  );
}

export default App;
