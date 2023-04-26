import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import { createBenchmark } from "../services/benchmarks";
import { updateBenchmark } from "../services/benchmarks";

export function TestInProgress({
  isActive,
  userInfo,
  userExists,
  setUserExists,
}) {
  const [benchmarkResults, setBenchmarkResults] = useState({});
  const [benchmarksCompleted, setBenchmarksCompleted] = useState({ count: 0 });
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [buttonText, setButtonText] = useState("Create Results");

  const benchmarkNames = [
    "10,000 Digits of Pi",
    "1024 Square Integer Matrix Multiply",
    "1024 Square Floating Point Matrix Multiply",
    "Sort 100 Million Numbers",
    "Sum of First 100,000 Primes",
  ];

  useEffect(() => {
    if (benchmarksCompleted.count === benchmarkNames.length) {
      console.log("enabling button");
      setButtonEnabled(true);
    }
  }, [benchmarksCompleted]);

  const benchmarkLocations = [
    "./Benchmarks/DigitsOfPi.js",
    "./Benchmarks/IntegerMatrixMultiply.js",
    "./Benchmarks/FloatingMatrixMultiply.js",
    "./Benchmarks/Sorting.js",
    "./Benchmarks/SumOfPrimes.js",
  ];

  useEffect(() => {
    if (isActive) {
      setButtonEnabled(false);
      setBenchmarksCompleted((prevState) => ({
        count: 0,
      }));
      const tableBody = document.getElementById("table-body");

      console.log(userInfo);
      if (userExists) {
        setButtonText("Update Results");
      }

      for (var i in benchmarkNames) {
        if (!document.getElementById(benchmarkNames[i])) {
          const newRow = tableBody.insertRow();
          const newCell1 = newRow.insertCell(0);
          const newCell2 = newRow.insertCell(1);
          const newCell3 = newRow.insertCell(2);
          newCell1.innerHTML = parseInt(i) + 1;
          newCell2.innerHTML = benchmarkNames[i];
          newCell3.innerHTML = `<div class="spinner-border spinner-border-sm" role="status" >
          <span class="sr-only"></span>
          </div>`;
          newCell3.setAttribute("id", benchmarkNames[i]);
        }
      }
      startBenchmarks();
    }
  }, [isActive]);

  function saveResults() {
    console.log("Saving results");
    console.log(userInfo);
    // Construct benchmark object to send to API

    var benchmarkObject = {};
    for (var i in benchmarkNames) {
      benchmarkObject[`test${parseInt(i) + 1}`] =
        benchmarkResults[benchmarkNames[i]];
    }
    benchmarkObject = {
      ...benchmarkObject,
      ...userInfo,
    };
    benchmarkObject = {
      ...benchmarkObject,
      test_date: new Date().toISOString().slice(0, 19).replace("T", " "),
    };
    console.log(benchmarkObject);

    // Call API
    if (buttonText === "Update Results") {
      updateBenchmark(benchmarkObject)
        .then(() => {
          userInfo = benchmarkObject;
          setButtonEnabled(false);
          setUserExists(true);
        })
        .catch(() => {
          console.log("Catch");
        })
        .finally(() => {
          console.log("Finally");
        });
    } else if (buttonText === "Create Results") {
      createBenchmark(benchmarkObject)
        .then(() => {
          userInfo = benchmarkObject;
          setButtonEnabled(false);
          setUserExists(true);
        })
        .catch(() => {
          console.log("Catch");
        })
        .finally(() => {
          console.log("Finally");
        });
    }
  }

  async function startBenchmarks() {
    for (var i in benchmarkNames) {
      await new Promise((resolve) => {
        let benchmarkName = benchmarkNames[i];
        let benchmarkLocation = benchmarkLocations[i];

        var start = performance.now();
        var myWorker = new Worker(benchmarkLocation);
        myWorker.postMessage("Start");

        myWorker.onmessage = function (e) {
          var end = performance.now();

          // convert to seconds
          var timeInSecs = (end - start) / 1000;
          // round to 4 decimals
          var roundedTime = Math.round(timeInSecs * 10000) / 10000;

          setBenchmarkResults((benchmarkResults) => ({
            ...benchmarkResults,
            [benchmarkName]: roundedTime,
          }));
          const cell = document.getElementById(benchmarkName);
          cell.innerHTML = roundedTime;

          setBenchmarksCompleted((prevState) => ({
            count: prevState.count + 1,
          }));
          resolve();
        };
      });
    }
  }

  return !isActive ? (
    <></>
  ) : (
    <div>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <strong>Test in Progress</strong>
        </div>

        <div className="d-flex justify-content-center align-items-center text-align-center">
          {benchmarksCompleted.count !== benchmarkNames.length ? (
            <ReactLoading
              type="balls"
              color="#0000FF"
              height={100}
              width={200}
            />
          ) : (
            <div></div>
          )}
        </div>

        <table style={{ marginTop: "10rem" }} className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Test #</th>
              <th scope="col">Test Name</th>
              <th scope="col">Runtime (s)</th>
            </tr>
          </thead>
          <tbody id="table-body"></tbody>
        </table>
      </main>
      <div style={{ position: "absolute", bottom: "1rem", right: "1rem" }}>
        <button
          id="saveResultsButton"
          onClick={() => {
            saveResults();
          }}
          className="btn btn-success btn-lg"
          disabled={!buttonEnabled}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
