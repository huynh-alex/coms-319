import React, { useState, useEffect } from "react";

export function TestInProgress({ isActive, changePage }) {
  function cancel(){
    changePage("Benchmark");
  }
  return !isActive ? (
    <></>
  ) : (
    <>
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          Test in Progress
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
      </main>
    </>
  );
}
