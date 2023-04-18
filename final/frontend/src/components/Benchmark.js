import React, { useState, useEffect } from "react";

export function Benchmark({ isActive, changePage }) {
  function testRun(){
    changePage("TestInProgress");
  }
  return !isActive ? (
    <></>
  ) : (
    <>
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          Benchmark
        </div>
        <div>
            <button id="Testing-button"
            onClick={() => {
              testRun();
            }}
            class="bg-green-500 hover:bg-green-700 py-4 px-4 border-green-700 rounded"
            >
                Run Benchmark
              </button>
              
          </div>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
               <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  FAQs
                </button>
              </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                
                <div class="accordion" id="sub-accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="sub-headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#sub-collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        FAQ #1
                      </button>
                    </h2>
                    <div id="sub-collapseOne" class="accordion-collapse collapse" aria-labelledby="sub-headingOne" data-bs-parent="#collapseOne">
                      <div class="accordion-body">
                        <strong>This is what a Benchmark is.</strong>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="sub-headingTwo">
                      <button class="accordion-button collapsed" type="buttonn" data-bs-toggle="collapse" data-bs-target="#sub-collapseTwo" aria-expanded="false" aria-controls="sub-collapseTwo">
                        FAQ #2
                      </button>
                    </h2>
                    <div id="sub-collapseTwo" class="accordion-collapse collapse" aria-labelledby="sub-headingTwo" data-bs-parent="#collapseOne">
                      <div class="accordion-body">
                        <strong>This is how a Benchmark works.</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
