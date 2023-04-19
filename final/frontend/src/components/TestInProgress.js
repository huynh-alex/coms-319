import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";

export function TestInProgress({ isActive, changePage }) {
  useEffect(() => {
    // when page loads, code in here runs one time
    if (isActive) {
      startWorker();
    }
  }, [isActive]);

  function cancel() {
    changePage("Benchmark");
  }

  function startWorker() {
    const myWorker = new Worker("DigitsOfPi.js");

    myWorker.postMessage("");

    myWorker.onmessage = function (e) {
      console.log(`Worker completed with value ${e}`);
    };
  }

  return !isActive ? (
    <></>
  ) : (
    <>
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <strong>Test in Progress</strong>
        </div>
        <div>
          <ReactLoading type="balls" color="#0000FF" height={100} width={100} />
        </div>

        <div>
          <button
            id="Testing-button"
            onClick={() => {
              cancel();
            }}
            class="bg-green-500 hover:bg-green-700 py-4 px-4 border-green-700 rounded"
          >
            Cancel
          </button>
        </div>

        <div>
          <button
            id="Start-Test"
            onClick={() => {
              // benchmarkOne();
            }}
            class="bg-green-500 hover:bg-green-700 py-4 px-4 border-green-700 rounded"
          >
            Start Test
          </button>
        </div>
      </main>
    </>
  );
}
