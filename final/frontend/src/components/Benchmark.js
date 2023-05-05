import FAQ from "./FAQ";

export function Benchmark({ isActive, changePage }) {
  function testRun() {
    changePage("TestInProgress");
  }
  return !isActive ? (
    <></>
  ) : (
    <>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"></div>
        <div>
          <center>
            <button
              id="Testing-button"
              onClick={() => {
                testRun();
              }}
              className="btn btn-success btn-lg"
            >
              Run Benchmark Tests
            </button>
          </center>
        </div>
        <br></br>
        <FAQ/>
      </main>
    </>
  );
}
