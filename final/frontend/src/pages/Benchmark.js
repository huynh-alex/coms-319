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
          <div>
            <div className="col-span-2 p-4">
            Main Page
          </div>
          <div className="col-span-2 p-4">
            <button id="Testing-button"
            onClick={() => {
              testRun();
            }}
            >
                Run Benchmark
              </button>
              
          </div>
          <div className="col-span-2 p-4 ">
            <button id="results-button"
            onClick={() => {
              results();
            }}>
                Global Results
              </button>
              
          </div>
          </div>
    
  );
}
