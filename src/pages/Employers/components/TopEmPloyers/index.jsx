import "./styles.scss";
import { BrandImg } from "./BrandImg";

const TopEmPloyers = () => {
  return (
    <>
      <section className="top-employers">
        <div className="container">
          {/* Text Center */}
          <div className="text-center">
            <h1 className="title">Top Companies on ITviec</h1>
            <p>
              Our Customers and Partners include well-known IT firms as well as
              innovative startups.
            </p>
          </div>

          {/* Top-employers-wrapper */}
          <div className="top-employers-wrapper">
            {BrandImg.map((brand, index) => {
              return (
                <div key={index} className="top-employers-item">
                  <a href="">
                    <img src={brand.src} alt="" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default TopEmPloyers;
