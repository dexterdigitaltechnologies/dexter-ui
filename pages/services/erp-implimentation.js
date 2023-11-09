import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import SoftwareHero from "../../components/services/erp/softwarehero"
import SoftwareServices from "../../components/services/erp/softwareServices"
import FinancialText from "../../components/services/erp/HeadingText"
import ContactForm from "../../components/contact/ContactForm";
import DefaultFooter from "../../components/footer/DefaultFooter";
const erpimplimentation = () => {
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

      <div className="fancy-feature-four pt-150 lg-pt-150 pb-150">
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
      <div className="fancy-short-banner-three bg position-relative pt-70 pb-100 mt-100 mb-10 lg-mt-140 lg-pt-80 lg-pb-50">
      <FinancialText/>
        <div className="shapes shape-one rounded-circle" />
        <div className="shapes shape-two rounded-circle" />
        <div className="shapes shape-three rounded-circle" />
{/*        
        <img width="10%"
          src="/images/shape/shape_83.svg"
          alt="illustration"
          className="lazy-img shapes shape-five"
        /> */}
      </div>
{/* <ContactForm/> */}
<DefaultFooter/>
    </>
  );
};

export default erpimplimentation;
