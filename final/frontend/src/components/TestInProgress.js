import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";

export function TestInProgress({ isActive, changePage }) {
  const [benchmarkResults, setBenchmarkResults] = useState({});
  const [benchmarksCompleted, setBenchmarksCompleted] = useState(0);

  const benchmarkNames = ["Digits of Pi", "Digits of Pi 2", "Digits of Pi 3"];
  const benchmarkLocations = [
    "./Benchmarks/DigitsOfPi.js",
    "./Benchmarks/DigitsOfPi2.js",
    "./Benchmarks/DigitsOfPi3.js",
  ];

  useEffect(() => {
    if (isActive) {
      const tableBody = document.getElementById("table-body");

      for (var i in benchmarkNames) {
        const newRow = tableBody.insertRow();
        const newCell1 = newRow.insertCell(0);
        const newCell2 = newRow.insertCell(1);
        const newCell3 = newRow.insertCell(2);
        newCell1.innerHTML = parseInt(i) + 1;
        newCell2.innerHTML = benchmarkNames[i];
        newCell3.innerHTML = `<div class="spinner-border spinner-border-sm" role="status" >
          <span class="sr-only"></span>
        </div>`;
        newCell3.setAttribute('id', benchmarkNames[i]);
      }
      startBenchmarks();
    }

  }, [isActive]);

  useEffect(() => {
    console.log(benchmarkResults);
  }, [benchmarkResults]);

  function saveResults() {
    changePage("Benchmark");
  }

  function timeBenchmark(benchmarkName, benchmarkLocation) {
    var start = performance.now();
    var myWorker = new Worker(benchmarkLocation);
    myWorker.postMessage("Start");

    const tableBody = document.getElementById("table-body");

    myWorker.onmessage = function (e) {
      var end = performance.now();
      // console.log(`Worker completed with value ${e.data}`);

      // convert to seconds
      var timeInSecs = (end - start) / 1000;
      // round to 2 decimals
      var roundedTime = Math.round(timeInSecs * 100) / 100;

      setBenchmarkResults((benchmarkResults) => ({
        ...benchmarkResults,
        [benchmarkName]: roundedTime,
      }));
      setBenchmarksCompleted(benchmarksCompleted + 1);

      const cell = document.getElementById(benchmarkName);
      cell.innerHTML = roundedTime;
    };
  }
  function addTableRow(benchmarkNum, benchmarkName, runtime) {
    // Modify the content of the new row
  }

  useEffect(() => {
    if (benchmarksCompleted == benchmarkNames.length) {
      const saveResultsButton = document.getElementById("saveResultsButton");
      saveResultsButton.disabled = false;
    }
  }, [benchmarksCompleted]);

  function startBenchmarks() {
    for (var i in benchmarkNames) {
      timeBenchmark(benchmarkNames[i], benchmarkLocations[i]);
    }
  }

  return !isActive ? (
    <></>
  ) : (
    <>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <strong>Test in Progress</strong>
        </div>

        <div className="d-flex justify-content-center align-items-center text-align-center">
          <ReactLoading type="balls" color="#0000FF" height={100} width={200} />
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

        <div style={{ position: "absolute", bottom: "1rem", right: "1rem" }}>
          <button
            id="saveResultsButton"
            disabled
            onClick={() => {
              saveResults();
            }}
            className="bg-green-500 hover:bg-green-700 py-4 px-4 border-green-700 rounded"
          >
            Save results
          </button>
        </div>
      </main>
    </>
  );
}
