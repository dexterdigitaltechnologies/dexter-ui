import Link from "next/link";
const services = [
  {
    iconSrc: "/images/icon/icon_01.svg",
    title: "Technology Roadmapping",
    desc:"We help you plan your technology infrastructure for future growth.",
  },
  {
    iconSrc: "/images/icon/icon_02.svg",
    title: "Digital Marketing Strategy",
    desc:"We create comprehensive digital marketing strategies tailored to your business objectives.",
 
  },
  {
    iconSrc: "/images/icon/icon_03.svg",
    title: "Optimization and Efficiency",
    desc:"We identify areas for improvement in your existing digital processes and strategies.",
  },
  {
    iconSrc: "/images/icon/icon_04.svg",
    title: "Market Research",
    desc:" We provide in-depth market analysis to guide your business decisions.",
  },
  {
    iconSrc: "/images/icon/icon_04.svg",
    title: "Competitor Analysis",
    desc:"We analyze your competitors and help you stay ahead in your industry.",
  },

  
];


const Service1 = () => {
  return (
    <>
      {services.map((service, index) => (
        <div
          className="col-lg-4 col-sm-6"
          key={index}
        >
          <div style={{padding:'40px 15px 67px'}} className="card-style-sixteen tran3s text-center position-relative mt-40">
            <div className="icon">
              <img width="50" height="50"
                src={service.iconSrc}
                alt="icon"
                className="lazy-img w40 m-auto"
              />
            </div>
           
            <h4 className="tx-dark pt-20 fs-20">{service.title}</h4>
            <p style={{color:'#000'}} className="fs-14 tx-dark m0 pt-20">{service.desc}</p>
          
          </div>
        </div>
      ))}
    </>
  );
};

export default Service1;
