export default function FAQ() {
  return (
    <div>
      <div>
        <h2>
          <section style={{ fontFamily: "-apple-system" }}>
            <center>Frequently Asked Questions</center>
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
              What is a benchmark?
            </button>
          </h2>
          <div
            id="sub-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="sub-headingOne"
            data-bs-parent="#collapseOne"
          >
            <div className="accordion-body">
              <strong>
                A (CPU) benchmark is a series of timed tasks with the goal of
                measuring performance.
              </strong>
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
              <strong>
                Spede.com will run a series of complex mathematical tests in the
                background which range from generating a million digits of Pi,
                to sorting a large list of integers. We track the amount of time
                it takes for your machine to solve the given problem, and use
                that time to determine your computer's performance.
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
              <strong>
                Spede.com is a completely free service to use and it requires no
                login. When you run the benchmark, our service generates a
                custom signature for your device. This signature is used to
                store your device's hardware/software specifications along with
                the results of your benchmark.
              </strong>
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
              <strong>
                In the sidebar, there is a button called My Results. This will
                take you to your personal results page which will display the
                results from your benchmark as well as hardware/software
                information about your device.
              </strong>
              <br></br>
              <br></br>
              <strong>
                Alternatively, by clicking Global Results you can view the
                scores of all users who have completed the benchmark. These
                results can be sorted and searched.
              </strong>
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
              <strong>
                There are five tests that are run to test the limits of your PC:
                <ul>
                  <li>Calculating a million digits of pi</li>
                  <li>Sorting an array of one million integers</li>
                  <li>Calculating the one millionth prime number</li>
                  <li>Multiplying a 2048 x 2048 integer matrix</li>
                  <li>Multiplying a 2048 x 2048 floating point matrix</li>
                </ul>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
