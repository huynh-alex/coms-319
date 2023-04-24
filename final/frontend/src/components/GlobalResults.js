import { getBenchmarks } from "../services/benchmarks";

import React, { useState, useEffect } from "react";

export function GlobalResults({ isActive }) {
  const [benchmarks, setBenchmarks] = useState([]);

  useEffect(() => {
    getBenchmarks().then((res) => {
      console.log(res);
      setBenchmarks(res);
    });
  }, [isActive]);

  useEffect(() => {
    if (document.getElementById("benchmarks-table-body")) {
      const benchmarksTableBody = document.getElementById(
        "benchmarks-table-body"
      );
      const regex = /test\d+/;
      var newRow;
      if (benchmarks && isActive) {
        for (let benchmark of benchmarks) {
          newRow = benchmarksTableBody.insertRow();

          const cellNames = [
            "Total",
            "Test1",
            "Test2",
            "Test3",
            "Test4",
            "Test5",
            "Signature",
          ];

          for (let i = 0; i < cellNames.length; i++) {
            const cell = newRow.insertCell(i);

            if (cellNames[i] === "Total") {
              let total = 0;
              for (let benchmarkKey in benchmark) {
                if (regex.test(benchmarkKey)) {
                  total += parseFloat(benchmark[benchmarkKey]);
                }
              }
              cell.innerHTML = total;
            } else {
              cell.innerHTML = benchmark[cellNames[i].toLowerCase()];
            }
          }
        }
      }
    }
  }, [benchmarks]);

  return !isActive ? (
    <></>
  ) : (
    <>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div className="container">
            <div className="col">
              <div className="row">
                <table style={{ marginTop: "5rem" }} className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Total</th>
                      <th scope="col">
                        Test 1 <br></br> (10,000 Digits of Pi)
                      </th>
                      <th scope="col">
                        Test 2 <br></br> (1024 Square Integer Matrix Multiply)
                      </th>
                      <th scope="col">
                        Test 3 <br></br> (1024 Square Floating Point Matrix
                        Multiply)
                      </th>
                      <th scope="col">
                        Test 4 <br></br> (Sort 100 Million Numbers)
                      </th>
                      <th scope="col">
                        Test 5 <br></br> (Sum of First 100,000 Primes)
                      </th>
                      <th scope="col">User Signature</th>
                    </tr>
                  </thead>
                  <tbody id="benchmarks-table-body"></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
