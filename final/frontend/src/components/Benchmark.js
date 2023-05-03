export function Benchmark({ isActive, changePage }) {
  function testRun() {
    changePage("TestInProgress");
  }
  return !isActive ? (
    <></>
  ) : (
    <>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          Benchmark
        </div>
        <div>
          <button
            id="Testing-button"
            onClick={() => {
              testRun();
            }}
            className="btn btn-success btn-lg"
          >
            Run Benchmark
          </button>
        </div>
        <br></br>
        <div className="accordion w-50 mx-auto" id="sub-accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="sub-headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#sub-collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                FAQ #1
              </button>
            </h2>
            <div
              id="sub-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="sub-headingOne"
              data-bs-parent="#collapseOne"
            >
              <div className="accordion-body">
                <strong>This is what a Benchmark is.</strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="sub-headingTwo">
              <button
                className="accordion-button collapsed"
                type="buttonn"
                data-bs-toggle="collapse"
                data-bs-target="#sub-collapseTwo"
                aria-expanded="false"
                aria-controls="sub-collapseTwo"
              >
                FAQ #2
              </button>
            </h2>
            <div
              id="sub-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="sub-headingTwo"
              data-bs-parent="#collapseOne"
            >
              <div className="accordion-body">
                <strong>This is how a Benchmark works.</strong>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
