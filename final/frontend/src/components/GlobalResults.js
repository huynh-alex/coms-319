import { getBenchmarks } from "../services/benchmarks";
import $ from "jquery";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net/js/jquery.dataTables.min.js";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import React, { useState, useEffect } from "react";

export function GlobalResults({ isActive }) {
  const [benchmarks, setBenchmarks] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (isActive) {
      getBenchmarks().then((res) => {
        console.log(res);
        setBenchmarks(res);
      });
    }
  }, [isActive]);

  useEffect(() => {
    if (isActive) {
      setRows([]);
      $(document).ready(function () {
        $("#dtBasicExample").DataTable();
        $(".dataTables_length").addClass("bs-select");
      });
      if (document.getElementById("benchmarks-table-body")) {
        if (benchmarks && isActive) {
          const regex = /test\d+/;
          var rows = [];

          for (let benchmark of benchmarks) {
            const cellNames = [
              "Total",
              "Test1",
              "Test2",
              "Test3",
              "Test4",
              "Test5",
              "Signature",
            ];

            let rowContent = [];
            for (let i = 0; i < cellNames.length; i++) {
              if (cellNames[i] === "Total") {
                let total = 0;
                for (let benchmarkKey in benchmark) {
                  if (regex.test(benchmarkKey)) {
                    total += parseFloat(benchmark[benchmarkKey]);
                  }
                }
                rowContent.push(total.toFixed(4));
              } else {
                rowContent.push(benchmark[cellNames[i].toLowerCase()]);
              }
            }
            rows.push(rowContent);
          }
          setRows(rows);
        }
      }
    }
  }, [benchmarks]);

  function addTooltip(row, rowIndex) {
    if (benchmarks) {
      var signature = row[6];

      var tooltip = <Tooltip></Tooltip>;
      for (var benchmark of benchmarks) {
        if (benchmark.signature === signature) {
          tooltip = (
            <Tooltip className="userinfo-tooltip" style={{ maxWidth: "500px" }}>
              CPU cores : {benchmark.cpu_cores}
              <br></br>
              CPU architecture : {benchmark.cpu_arch}
              <br></br>
              Ram : {benchmark.ram}+ GB
              <br></br>
              OS : {benchmark.os}
              <br></br>
              Browser : {benchmark.browser}
              <br></br>
              Engine : {benchmark.engine}
              <br></br>
              Device : {benchmark.device}
            </Tooltip>
          );
        }
      }

      return (
        <OverlayTrigger key={rowIndex} placement="bottom" overlay={tooltip}>
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        </OverlayTrigger>
      );
    }
  }

  return !isActive ? (
    <></>
  ) : (
    <>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div className="container">
            <div className="col">
              <div className="row">
                {/* <table style={{ marginTop: "5rem" }} className="table"> */}
                <table
                  id="dtBasicExample"
                  className="table table-striped table-bordered table-sm"
                  cellSpacing="0"
                  width="100%"
                >
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
                  <tbody id="benchmarks-table-body">
                    {rows.map((row, index) => addTooltip(row, index))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
