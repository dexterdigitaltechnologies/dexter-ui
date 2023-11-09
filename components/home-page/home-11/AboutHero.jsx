import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <div
      style={{ background: "#f6f9fb" }}
      className="fancy-short-banner-twelve position-relative mt-90 zn2 pt-160 lg-pt-50"
    >
      <div className="container">
        <div className="border-bottom pb-140 lg-pb-40">
          <div className="row">
            <div className="col-xxl-9 col-xl-10 m-auto text-center">
              <div
                className=" wow"
                // data-aos="fade-up"
                // data-aos-delay="100"
              >
                <h2 className="main-text fw-normal tx-dark">
                  Join Dexter Digital Technologies
                </h2>
              </div>
              {/* /.title-style-ten */}

              <p className="fs-18 mt-20 mb-35 lg-mb-30 lg-mt-20">
                We invite you to join us on this journey, where we combine
                innovation, experience, and a client-centric approach to drive
                your success in the digital era. Your vision is our mission, and
                we&apos;re committed to helping you achieve it. Whether you&apos;re a
                startup with big dreams or a Fortune 500 giant, we have the
                expertise to propel your business forward.
              </p>
              <p>
              Thank you for considering Dexter Digital Technologies as your partner in digital excellence. We look forward to the opportunity to work with you and help your business thrive in the digital age.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="shapes shape-one" />
      <div className="shapes shape-two" /> */}
    </div>
  );
};

export default CallToAction;
