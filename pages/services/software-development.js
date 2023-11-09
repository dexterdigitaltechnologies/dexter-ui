import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import SoftwareHero from "../../components/services/softwareDevelopemnt/softwarehero"
import SoftwareServices from "../../components/services/softwareDevelopemnt/softwareServices"
const softwaredevelopment = () => {
  return (
    <>
      <Seo pageTitle="Home Loan Service Details" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />
      <SoftwareHero/>

      <div className="fancy-feature-four pt-150 lg-pt-150">
        <div className="container">
          <div className="row">
            <div
              className="col-xxl-7 col-md-8 m-auto text-center"
              // data-aos="fade-up"
            >
              <div className="title-style-three">
                <h2 style={{fontSize:'46px'}} className="main-text fw-normal fs-46">
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
            <SoftwareServices />
          </div>

          {/* /.tab-content */}
        </div>
        {/* /.container */}
      </div>
    </>
  );
};

export default softwaredevelopment;
