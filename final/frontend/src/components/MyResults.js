import React, { useState, useEffect } from "react";
import { getBenchmark } from "../services/benchmarks";
import { deleteBenchmark } from "../services/benchmarks";

export function MyResults({ isActive, userInfo, userExists, setUserExists }) {
  const [benchmark, setBenchmark] = useState({});
  const [buttonEnabled, setButtonEnabled] = useState(false)

  const userInfoPrettify = {
    signature: "Signature",
    test_date: "Test Date",
    ram: "RAM (min)",
    cpu_cores: "Logical CPU Cores",
    cpu_arch: "CPU Architecture",
    os: "Operating System",
    engine: "Engine",
    browser: "Browser",
    device: "Device",
  };

  const testPrettify = {
    test1: "10,000 Digits of Pi",
    test2: "1024 Square Integer Matrix Multiply",
    test3: "1024 Square Floating Point Matrix Multiply",
    test4: "Sort 100 Million Numbers",
    test5: "Sum of First 100,000 Primes",
  };

  useEffect(() => {
    if (userInfo && userExists) {
      getBenchmark(userInfo.signature)
        .then((res) => {
          setBenchmark(res);
        })
        .catch((err) => {});
    } else {
      setBenchmark({});
    }
  }, [isActive, userExists]);

  useEffect(() => {
    if (document.getElementById("userinfo-table-body")) {
      const userinfoTableBody = document.getElementById("userinfo-table-body");
      const scoresTableBody = document.getElementById("scores-table-body");
      const regex = /test\d+/;
      var newRow;
      if (Object.keys(benchmark).length > 0 && isActive) {
        Object.keys(benchmark).forEach((key) => {
          if (regex.test(key)) newRow = scoresTableBody.insertRow();
          else newRow = userinfoTableBody.insertRow();

          const newCell1 = newRow.insertCell(0);
          const newCell2 = newRow.insertCell(1);
          newCell1.innerHTML = regex.test(key)
            ? testPrettify[key]
            : userInfoPrettify[key];

          if (String(benchmark[key]).includes("{")) {
            let obj = JSON.parse(benchmark[key]);
            let listElement = "<ul>";
            for (var objKey in obj) {
              listElement += `<li>${objKey}: ${obj[objKey]}</li>`;
            }
            listElement += "</ul>";
            newCell2.innerHTML = listElement;
          } else if (key === "test_date") {
            let d = new Date(benchmark[key]);
            var datestring =
              (d.getMonth() + 1) +
              "/" +
              (d.getDate() + 1) +
              "/" +
              d.getFullYear() +
              " " +
              (d.getHours() > 13 ? d.getHours() - 12 : d.getHours()) +
              ":" +
              d.getMinutes() + 
              " " + 
              (d.getHours() > 13 ? "p.m." : "a.m.")
              ;
            newCell2.innerHTML = datestring;
          } else {
            newCell2.innerHTML = benchmark[key];
          }
        });
        setButtonEnabled(true);
      }
    }
  }, [benchmark]);

  function deleteResults() {
    deleteBenchmark(benchmark).then((newBenchmark) => {
      setUserExists(false);
      setButtonEnabled(false);
      setBenchmark(benchmark);
      const userinfoTableBody = document.getElementById("userinfo-table-body");
      const scoresTableBody = document.getElementById("scores-table-body");
      userinfoTableBody.innerHTML = "";
      scoresTableBody.innerHTML = "";
    });
  }

  return !isActive ? (
    <></>
  ) : (
    <div>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div className="container">
            <div className="col">
              <div className="row">
                <table style={{ marginTop: "5rem" }} className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Property</th>
                      <th scope="col">Value</th>
                    </tr>
                  </thead>
                  <tbody id="userinfo-table-body"></tbody>
                </table>
              </div>
              <div className="row">
                <table style={{ marginTop: "5rem" }} className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Test Name</th>
                      <th scope="col">Runtime (s)</th>
                    </tr>
                  </thead>
                  <tbody id="scores-table-body"></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div style={{ position: "absolute", top: "1rem", right: "1rem" }}>
        <button
          onClick={() => {
            deleteResults();
          }}
          className="btn btn-danger btn-lg"
          disabled={!buttonEnabled}
        >
          Delete results
        </button>
      </div>
    </div>
  );
}
