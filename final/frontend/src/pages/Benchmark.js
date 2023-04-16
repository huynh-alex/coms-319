import React, { useState, useEffect } from "react";

export function Benchmark({
  isActive,
  changePage,
}) {

  function testRun(){
    changePage("Testing");
  }
  function results(){
    changePage("GlobalResults");
  }
  return !isActive ? (
    <></>
  ) : (
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            Main Page
          </div>
          <div>
            <button id="Testing-button"
            onClick={() => {
              testRun();
            }}
            >
                Run Benchmark
              </button>
                        
            <button id="results-button"
            onClick={() => {
              results();
            }}>
                Global Results
              </button>
              
          </div>
        </main>
    
  );
}
