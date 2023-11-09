
import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <div style={{background:'#f6f9fb'}} className="fancy-short-banner-twelve position-relative mt-90 zn2 pt-160 lg-pt-50">
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
                Mobile App Development Services
                </h2>
              </div>
              {/* /.title-style-ten */}
            
              <p className="fs-18 mt-20 mb-35 lg-mb-30 lg-mt-20">
              In a world driven by mobile technology, having a strong mobile presence is essential for reaching your target audience and staying competitive. At Dexter Digital Technologies, we excel in mobile app development, creating user-friendly, feature-rich, and visually stunning applications for both iOS and Android platforms.
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
