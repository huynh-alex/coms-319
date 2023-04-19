import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";

export function TestInProgress({ isActive, changePage }) {
  useEffect(() => {
    // when page loads, code in here runs one time
    if(isActive){
      console.log("This worked");
      // benchmarkOne();

    }

  }, [isActive]);

  function cancel(){
    changePage("Benchmark");
  }

  function benchmarkOne(){
    console.log("This worked");
    let i = 1n;
    let x = 3n * (10n ** 1000020n);
    let pi = x;
    while (x > 0) {
        x = x * i / ((i + 1n) * 4n);
        pi += x / (i + 2n);
        i += 2n;
    }
    console.log(pi / (10n ** 20n));
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
            <button id="Testing-button"
            onClick={() => {
              cancel();
            }}
            class="bg-green-500 hover:bg-green-700 py-4 px-4 border-green-700 rounded"
            >
                Cancel
              </button>
              
          </div>

          <div>
            <button id="Start-Test"
            onClick={() => {
              benchmarkOne();
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
