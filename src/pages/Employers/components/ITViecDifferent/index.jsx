import "./styles.scss";

const ITViecDifferent = () => {
  return (
    <>
      <section className="itviec-different-container">
        {/* TEXT CONTENT */}
        <div className="text-content">
          <h1 className="title">What makes ITviec different?</h1>
          <p>
            ITviec is the top recruiting site and database for IT Professionals
            in Vietnam.
          </p>
        </div>
        {/* CONTENT WRAPPER */}
        <div className="content-wrapper">
          {/* box-1 */}
          <div className="content-box">
            <p className="number-text">10,000+</p>
            <p className="normal-text">IT Companies & Enterprises </p>
            <img
              src="https://itviec.com/assets/employer_landing/first-hand-8f9978db44dfb1095793ff239fa072e94bfd1d74d7b62a875d7f69eba997b911.svg"
              alt=""
            />
          </div>
          {/* box-2 */}
          <div className="content-box m-28">
            <p className="number-text">1,500,000+</p>
            <p className="normal-text"> CVs sent </p>
            <img
              src="https://itviec.com/assets/employer_landing/second-hand-ef88cbd609f610ad98826b198a83feb349b8896a396f114c31721640592f6698.svg"
              alt=""
            />
          </div>
          {/* box-3 */}
          <div className="content-box">
            <p className="number-text">300,000+</p>
            <p className="normal-text">
              Highly-experienced IT Profiles matched
            </p>
            <img
              src="https://itviec.com/assets/employer_landing/third-hand-4285467762b4dd431d96729f58e05928f8b304f711ce0d683660648ebd294f36.svg"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ITViecDifferent;
