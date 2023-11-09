import Link from "next/link";
import Seo from "../../components/common/Seo";
import Contact from "../../components/home-page/home-11/Contact";
import Counter from "../../components/home-page/home-11/Counter";
import FancyFeatures from "../../components/home-page/home-11/FancyFeatures";
import Header from "../../components/home-page/home-11/Header";
import Hero from "../../components/home-page/home-11/Hero";
import Services from "../../components/home-page/home-11/Services";
import Services2 from "../../components/home-page/home-11/Services2";
import Testimonial from "../../components/home-page/home-11/Testimonial";
import Pricing from "../../components/pricing/Pricing";
import Blog from "../../components/home-page/home-11/Blog";
import CallToActions from "../../components/home-page/home-11/CallToActions";
import Footer from "../../components/home-page/home-11/Footer";
import Servicesnew from "../../components/home-page/home-11/servicenew"
const SeoAgency = () => {
  return (
    <>
      <Seo pageTitle="Seo Agency" />

      {/* <!-- 
        =============================================
        Theme Default Menu
        ============================================== 	
        --> */}
      <Header />
      {/* <!-- /.theme-main-menu --> */}

      {/* 
			=============================================
				Theme Hero Banner
			============================================== 
			*/}
      <div className="hero-banner-six position-relative pt-180 md-pt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 m-auto text-center" data-aos="fade-up">
              <Hero />
              {/* /.subscribe-form */}
            </div>
          </div>
          {/* End .row */}

          <div
            className="illustration-holder text-center mt-45"
            data-aos="fade-up"
          >
            <div className="d-lg-block">
              <img
                src="/images/assets/ils_02.svg"
                alt="shape"
                className="lazy-img m-auto"
              />
            </div>
          </div>
          {/* End .illustration-holder */}
        </div>
        {/* /.container */}

        <div className="shapes shape-one rounded-circle" />
        <img
          src="/images/shape/shape_83.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
        <div className="shapes shape-three" />
        <img
          src="/images/shape/shape_84.svg"
          alt="shape"
          className="lazy-img shapes shape-four"
        />
        <img
          src="/images/shape/shape_85.svg"
          alt="shape"
          className="lazy-img shapes shape-five"
        />
        <div className="shapes shape-six rounded-circle" />
        <div className="shapes shape-seven rounded-circle" />
        <img
          src="/images/shape/shape_84.svg"
          alt="shape"
          className="lazy-img shapes shape-eight"
        />
        <img
          src="/images/shape/shape_83.svg"
          alt="shape"
          className="lazy-img shapes shape-nine"
        />
      </div>
      {/* /.hero-banner-six */}
     {/* Who we are Section */}
     <div className="pricing-section-three position-relative mt-225 mb-225 lg-mt-140 lg-mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 m-auto">
              <div
                className="title-style-one text-center mb-70 lg-mb-40"
                data-aos="fade-up"
              >
                <h2 className="main-title fw-normal tx-dark m0">
                  Who <span>We</span> Are
                </h2>
                <p className="text-lg mb-75 pt-60 lg-mb-40 lg-pt-40">
                  Dexter Digital Technologies is an innovative software
                  development company dedicated to delivering cutting edge
                  technological solutions to various companies worldwide. Over
                  the past few years, We have established ourselves as a
                  reliable partner for businesses seeking innovative software
                  solutions to solve their business challenges. Our services
                  include custom software development, digital marketing,
                  consultancy services and technical architecture design
                  services.
                </p>
              </div>
              {/* /.title-style-one */}
            </div>
          </div>
          {/* End .row */}
          {/* <Pricing /> */}
        </div>
        {/* End .container */}
        <div className="shapes shape-one rounded-circle" />
        <div className="shapes shape-two rounded-circle" />
      </div>


      {/* 
			=============================================
				Feature Section Twenty One
			============================================== 
			*/}
      
      <div className="fancy-feature-twentyOne position-relative mt-190 pt-130 pb-150 lg-mt-130 lg-pt-60 lg-pb-60">
        <div className="container">
          <div className="row">
            <Services />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
        <div className="shapes shape-one rounded-circle" />
        <div className="shapes shape-two rounded-circle" />
        <div className="shapes shape-three rounded-circle" />
        <img
          src="/images/shape/shape_88.svg"
          alt="shape"
          className="lazy-img shapes shape-four"
        />
        <img
          src="/images/shape/shape_89.svg"
          alt="shape"
          className="lazy-img shapes shape-five"
        />
      </div>
      
      {/* /.fancy-feature-twentyOne */}
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
            <Servicesnew />
          </div>

          {/* /.tab-content */}
        </div>
        {/* /.container */}
      </div>

      {/* 
			=============================================
				Feature Section Twenty Two
			============================================== 
			*/}
      <div className="fancy-feature-twentyTwo position-relative pt-170 pb-170 lg-pt-80 lg-pb-100 mt-100">
        <div className="fancy-short-banner-eight">
          <div className="container">
            <Contact />
          </div>
          {/* /.container */}
        </div>
        {/* /.fancy-short-banner-eight */}

    
        <div className="shapes shape-three rounded-circle" />
        <div className="shapes shape-four rounded-circle" />
        <div className="shapes shape-five rounded-circle" />
        <div className="shapes shape-six rounded-circle" />
        <img
          src="/images/shape/shape_92.svg"
          alt="shape"
          className="lazy-img shapes shape-seven"
        />
        <img
          src="/images/shape/shape_93.svg"
          alt="shape"
          className="lazy-img shapes shape-eight"
        />
      </div>

    
    
      {/*
			=====================================================
				Footer
			=====================================================
			*/}
         <div className="footer-style-six theme-basic-footer position-relative">
        <div className="container">
          <div className="inner-wrapper">
            <div className="row justify-content-between">
              <div className="col-lg-2 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/dexter/logo.png" alt="" width={250} />
                  </Link>
                </div>
              </div>
              {/* End .col-lg-2 */}

              <Footer />

              <div className="col-md-3 col-sm-6 mb-30">
                <h5 className="footer-title tx-dark fw-500">Address</h5>
                <p className="fs-17">
                  2 Fluture Court, Tarneit, Victoria 3029 Australia
                </p>
                <a
                  href="mailto:januinc@company.com"
                  className="email tran3s fs-17"
                >
                  info@dexterinc.com
                </a>
                <br />
                <a
                  href="tel:+7576994478"
                  className="mobile tran3s fs-20 mt-20 mb-30"
                >
                  1300 864 393
                </a>
               
              </div>
              {/* End .col-md-3 */}
            </div>
            {/* End .row */}

            <div className="bottom-footer">
              <p className="copyright text-center m0">
                Copyright © {new Date().getFullYear()} {"  "}
                <a target="_blank" rel="noopener noreferrer" href="#">
                 Dexter Digital Technologies Pty. Ltd.
                </a>
              </p>
            </div>
          </div>
          {/* /.inner-wrapper */}
        </div>
      </div>
      {/* /.footer-style-six */}
    </>
  );
};

export default SeoAgency;
