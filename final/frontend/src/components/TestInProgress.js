import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";

export function TestInProgress({ isActive, changePage }) {
  const [benchmarkResults, setBenchmarkResults] = useState({});
  const [testsCompleted, setTestsCompleted] = useState(0);

  const benchmarkNames = ["Digits of Pi"];
  const benchmarkLocations = ["./Benchmarks/DigitsOfPi.js"];

  useEffect(() => {
    if (isActive) {
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
      setTestsCompleted(testsCompleted + 1);
    };
  }

  useEffect(() => {
    if (testsCompleted == benchmarkNames.length) {
      const saveResultsButton = document.getElementById("saveResultsButton");
      saveResultsButton.disabled = false;
    }
  }, [testsCompleted]);

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
