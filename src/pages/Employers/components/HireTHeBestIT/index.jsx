import "./styles.scss";

const HireTheBestIT = () => {
  return (
    <>
      <section className="hire-the-best-it">
        <div className="container">
          {/* LEFT SIDE */}
          <div className="left-side">
            {/* Content */}
            <div className="left-box-content">
              <h1 className="title">
                Hire the best IT Professionals in Vietnam with ITviec
              </h1>
              <p className="detailContent">
                With in-depth understanding in the IT sector and specialized
                skills, we can help you reach and hire the best IT candidates.
              </p>
              <button>Contact Now</button>
              <div className="accountAlreadyNav">
                <p> Already have an Employer account?</p>
                <p>
                  <a href="#">Sign In</a>
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="right-side">
            <img
              src="https://itviec.com/assets/employer_landing/hire-the-best-it-15-95d4b6df6293a405cd77c094b8c7eb5dcc99cf8711f5b47751c841cfa51023a0.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HireTheBestIT;
