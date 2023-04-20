import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";

export function TestInProgress({ isActive, changePage }) {
  useEffect(() => {
    // when page loads, code in here runs one time
    if (isActive) {
      startWorker();
      changePage("MyResults");
    }
  }, [isActive]);

  function startWorker() {
    const myWorker = new Worker("./Benchmarks/DigitsOfPi.js");

    myWorker.postMessage("");

    myWorker.onmessage = function (e) {
      console.log(`Worker completed with value ${e.data}`);

      
    };

    const newWorker = new Worker("./Benchmarks/SortingArray.js");

    newWorker.postMessage("");

    newWorker.onmessage = function (e) {
      console.log(`Worker completed with value ${e.data}`);

      
    };
  }

  return !isActive ? (
    <></>
  ) : (
    <>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <strong>Test in Progress</strong>
        </div>
        <div>
          <ReactLoading type="balls" color="#0000FF" height={100} width={100} />
        </div>
        
      </main>
    </>
  );
}
