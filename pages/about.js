import Seo from "../components/common/Seo";
import DefaulHeader from "../components/header/DefaulHeader";
import DefaultFooter from "../components/footer/DefaultFooter";
import Aboutservice from "../components/home-page/home-11/AboutService";
import AboutHero from "../components/home-page/home-11/AboutHero";
const About = () => {
  const features = [
    { text: "Amazing communication." },
    { text: "Best trending designing experience." },
    { text: "Email & Live chat." },
  ];

  const starRating = Array(5)
    .fill()
    .map((_, index) => (
      <li key={index}>
        <i className="fa-solid fa-star" />
      </li>
    ));

  return (
    <>
      <Seo pageTitle="About Us V1" />

      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* 
			=============================================
				Feature Section Fifty One
			============================================== 
			*/}
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-9" data-aos="fade-right">
              <div className="title-style-five mb-65 md-mb-40">
                <div className="sc-title-two fst-italic position-relative">
                  Dexter Digital Technologies:
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  Pioneering Digital Excellence for Over 8 Years
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-9 ms-auto">
              <div className="ps-xxl-5" data-aos="fade-left">
                <h6 className="mb-30">Our journey </h6>
                <p className="text-lg tx-dark">
                  Our story began in [Year of Establishment], when a group of
                  passionate tech enthusiasts came together with a shared vision
                  to empower businesses in the digital age. Since then, we have
                  been on a relentless journey to turn that vision into reality.
                  Over the years, we&apos;ve honed our skills, embraced emerging
                  technologies, and cultivated a team of experts who excel in
                  their respective fields.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-9 ms-auto">
              <div className="ps-xxl-5" data-aos="fade-left">
                <h6 className="mb-30">Our Mission </h6>
                <p className="text-lg tx-dark">
                  At Dexter Digital Technologies, our mission is clear: to help
                  businesses, regardless of their size or industry, thrive in
                  the digital landscape. We understand the unique challenges and
                  opportunities that the digital era presents, and we are
                  dedicated to providing our clients with the tools and
                  strategies they need to succeed.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-9 ms-auto">
              <div className="ps-xxl-5" data-aos="fade-left">
                <h6 className="mb-30">Our Diverse Clientele:</h6>
                <p className="text-lg tx-dark">
                  Our journey has been marked by remarkable collaborations and
                  achievements. We have had the privilege of working with a wide
                  range of clients, from ambitious startups to globally
                  recognized Fortune 500 companies. This diversity has enriched
                  our experience and deepened our understanding of the
                  intricacies of various industries.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-fiftyOne */}
      <div className="fancy-feature-four pt-150 lg-pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div
              className="col-xxl-7 col-md-8 m-auto text-center"
              // data-aos="fade-up"
            >
              <div className="title-style-three">
                <h2
                  style={{ fontSize: "46px" }}
                  className="main-text fw-normal fs-46"
                >
                  Why Choose Us{" "}
                  <span className="d-inline-block position-relative">
                    <span
                      className="mark-bg"
                      style={{ backgroundColor: "#f0c09c" }}
                    />
                  </span>
                </h2>
              </div>
              {/* /.title-style-three */}
            </div>
          </div>
          {/* End .row */}

          <div className="row gx-xxl-5">
            <Aboutservice />
          </div>
          <AboutHero />
          {/* /.tab-content */}
        </div>
        {/* /.container */}
      </div>
      <DefaultFooter />
    </>
  );
};

export default About;
