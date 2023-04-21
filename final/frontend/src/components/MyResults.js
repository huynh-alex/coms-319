import React, { useState, useEffect } from "react";
import { getBenchmark } from "../services/benchmarks";

function sortObject(obj) {
  return Object.fromEntries(
    Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]))
  );
}

export function MyResults({ isActive, userInfo }) {
  const [benchmark, setBenchmark] = useState({});

  useEffect(() => {
    if (userInfo.signature) {
      getBenchmark(userInfo.signature).then((res) => {
        console.log(res);
        setBenchmark(res);
      });
    }
  }, [isActive]);

  useEffect(() => {
    const sortedBenchmark = sortObject(benchmark);
    const userinfoTableBody = document.getElementById("userinfo-table-body");
    const scoresTableBody = document.getElementById("scores-table-body");
    const regex = /test\d+/;
    var newRow;
    Object.keys(sortedBenchmark).forEach((key) => {
      if (regex.test(key)) newRow = scoresTableBody.insertRow();
      else newRow = userinfoTableBody.insertRow();

      const newCell1 = newRow.insertCell(0);
      const newCell2 = newRow.insertCell(1);
      newCell1.innerHTML = key;
      newCell2.innerHTML = sortedBenchmark[key];
    });
  }, [benchmark]);

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
                      <th scope="col">Property</th>
                      <th scope="col">Value</th>
                    </tr>
                  </thead>
                  <tbody id="userinfo-table-body"></tbody>
                </table>
              </div>
              <div className="row">
                <table style={{ marginTop: "5rem" }} className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Test Name</th>
                      <th scope="col">Runtime (s)</th>
                    </tr>
                  </thead>
                  <tbody id="scores-table-body"></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
