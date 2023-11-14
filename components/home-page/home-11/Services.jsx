import Link from "next/link";

const Services2 = () => {
  const services = [
    {
      icon: "/images/icon/icon_09.svg",
      title: "Software design & development",
      link:"/services/software-development",
      delay: 100,
    },
    {
      icon: "/images/icon/icon_52.svg",
      title: "ERP implementation",
      link:"/services/erp-implimentation",
      delay: 200,
    },
    {
      icon: "/images/icon/icon_53.svg",
      title: "Software Consulting",
      link:"/services/consulting-strategy",
      delay: 100,
    },
    {
      icon: "/images/icon/icon_54.svg",
      title: "UI/UX Design",
      link:"/services/ui-ux-design",
      delay: 200,
    },
    // {
    //   icon: "/images/icon/icon_55.svg",
    //   title: "Digital & Social Marketing",
    //   link:"/services/digital-marketing",
    //   delay: 300,
    // },
    {
      icon: "/images/icon/icon_55.svg",
      title: "Mobile App Development",
      link:"/services/mobile-app-development",
      delay: 300,
    },
  

  ];
  





  return (
    <>
      <div className="col-lg-5 me-auto mt-40 md-mt-10" data-aos="fade-up">
        <div className="title-style-one">
          <h2 className="main-title fw-normal tx-dark m0">
            Our <br /> <span>Services</span> 
          </h2>
        </div>
        {/* /.title-style-one */}
      </div>
      {/* End .col-lg-5 */}

      {services.map((service, index) => (
        <div
          key={index}
          className={`col-lg-3 col-sm-6 d-flex mt-40`}
          data-aos="fade-up"
          data-aos-delay={service.delay}
        >
          <div className="card-style-ten d-flex flex-column bg-white pe-3 ps-3 pe-xl-5 ps-xl-5 pt-60 pb-45 lg-pt-40 lg-pb-30">
            <div className="icon d-flex align-items-end">
              <img src={service.icon} alt="icon" className="lazy-img" />
            </div>
            <h4 className="fw-500 mt-20 mb-50">{service.title}</h4>
            <Link
              href={service.link}
              className="read-btn mt-auto tran3s"
            >
              <img
                src="/images/icon/icon_12.svg"
                alt="icon"
                className="lazy-img"
              />
            </Link>
          </div>
          {/* /.card-style-ten */}
        </div>
      ))}
           <div
        className="col-xxl-2 col-xl-3 col-lg-3 col-sm-5 ms-auto d-flex align-items-center justify-content-center text-center text-sm-start mt-40"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="block">
          {/* <div className="fs-15 fw-500" style={{ color: "#FF7228" }}>
            Confusion?
          </div> */}
          {/* <h4 className="fw-normal">Send message for info.</h4> */}
          <Link href="/contact" className="btn-eleven fs-15 fw-500 tran3s">
           Get In Touch
          </Link>
        </div>
      </div>

   
      {/* End .col-xxl-2 */}
    </>
  );
};

export default Services2;
