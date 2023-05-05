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
        </div>
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
        <div>
          
            <h2>
            <section style={{fontFamily: '-apple-system'}}>
              <center>
              Frequently Asked Questions
              </center>
              </section>
            </h2>
        </div>
        <div className="accordion w-75 mx-auto" id="sub-accordionExample">
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
                What is a Benchmark?
              </button>
            </h2>
            <div
              id="sub-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="sub-headingOne"
              data-bs-parent="#collapseOne"
            >
              <div className="accordion-body">
                <strong>A CPU Benchmark is a series of tests determined to push the limits of a CPU</strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="sub-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#sub-collapseTwo"
                aria-expanded="false"
                aria-controls="sub-collapseTwo"
              >
                How does it work?
              </button>
            </h2>
            <div
              id="sub-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="sub-headingTwo"
              data-bs-parent="#collapseOne"
            >
              <div className="accordion-body">
                <strong>Speede.com will run a series of complex mathematical tests in the background which range from generating a million digits of Pi, to sorting a large list of Integers. We track the amount of time it takes for your machine to solve the given problem, and use that time to determine your computer's limitations"
                </strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="sub-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#sub-collapseThree"
                aria-expanded="false"
                aria-controls="sub-collapseThree"
              >
                Do I have to make an account?
              </button>
            </h2>
            <div
              id="sub-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="sub-headingThree"
              data-bs-parent="#collapseOne"
            >
              <div className="accordion-body">
                <strong>Speede.com is a completely free service to use, that requires no login. When you run the Benchmark tests, our service generates a custom signature for your device. This signature is used to confidentially store your computer's hardware specifications along with the results of your Benchmarks.</strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="sub-headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#sub-collapseFour"
                aria-expanded="false"
                aria-controls="sub-collapseFour"
              >
                Where can I view my score?
              </button>
            </h2>
            <div
              id="sub-collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="sub-headingFour"
              data-bs-parent="#collapseOne"
            >
              <div className="accordion-body">
                <strong>In the Navigation bar on the left side of the screen there is a button called My Results. This will take you to your personal results page which will display the results from the Benchmark tests as well as the hardware information about your device.</strong>
                <br></br>
                <strong>Alternatively, by clicking Global Results you can view the scores of all users who have completed the Benchmark Tests. These results can be searched, sorted, and filtered.</strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="sub-headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#sub-collapseFive"
                aria-expanded="false"
                aria-controls="sub-collapseFive"
              >
                What Tests do you run?
              </button>
            </h2>
            <div
              id="sub-collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="sub-headingFive"
              data-bs-parent="#collapseOne"
            >
              <div className="accordion-body">
                <strong>There are five tests that are run to test the limits of your PC. These tests include calculating a million digits of Pi; Sorting an array of one million integers; calculate the one millionth prime number; multiply a 2048 x 2048 integer matrix; and multiply a 2048 x 2048 floating point matrix.</strong>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
