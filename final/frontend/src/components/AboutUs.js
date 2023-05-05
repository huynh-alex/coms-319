import { useEffect } from "react";
export function AboutUs({ isActive, changePage }) {


  return !isActive ? (
    <></>
  ) : (
    <>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <section style={{
          fontFamily: '-apple-system',
          fontSize: "1rem"

        }}>
          <h1>About Us</h1>
        </section>
        <hr></hr>
      <section style={{
        fontFamily: '-apple-system',
        fontSize: "1rem",
        fontWeight: 1.5,
        lineHeight: 1.5,
        padding: "0 2em"
      }}>
        <h2>Alex Huynh</h2>
        <p>Alex H. is a senior at ISU, specifically in his last semester. He is a double major in computer science and
            math,
            and his interests are quantum computing and machine learning. Outside of school, he works out a lot and eats
            more than he should.
        </p>
    </section>
    <br></br>
    <section style={{
        fontFamily: '-apple-system',
        fontSize: "1rem",
        fontWeight: 1.5,
        lineHeight: 1.5,
        padding: "0 2em"
      }}>
        <h2>Alexander Christie</h2>
        <p>Alex C. is a Software Engineering Junior at Iowa State University. Alongside his major of Software Engineering he also 
            is pursuing a minor in Technical Communications. He has yet to determin a field of expertise that he prefers, but is 
            excited to pursue whatever opportunities present themselves.
        </p>

    </section>
      </main>
    </>
  );
}
