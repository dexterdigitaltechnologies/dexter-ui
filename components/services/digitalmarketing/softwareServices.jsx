import Link from "next/link";
const services = [
  {
    iconSrc: "/images/icon/icon_01.svg",
    title: "Search Engine Optimization (SEO)",
    desc:"Improve your website's visibility on search engines and attract organic traffic.",
  },
  {
    iconSrc: "/images/icon/icon_02.svg",
    title: "Social Media Marketing",
    desc:" Leverage the power of social platforms to connect with your audience and build your brand.",
 
  },
  {
    iconSrc: "/images/icon/icon_03.svg",
    title: "Pay-Per-Click (PPC) Advertising",
    desc:" Reach your target audience with precision through paid advertising campaigns.",
  },
  {
    iconSrc: "/images/icon/icon_04.svg",
    title: "Content Marketing",
    desc:"Engage your audience with valuable, relevant, and high-quality content that drives results.",
  },
  {
    iconSrc: "/images/icon/icon_04.svg",
    title: "Email Marketing",
    desc:" Nurture your leads and engage your customers through effective email campaigns.",
  },
  {
    iconSrc: "/images/icon/icon_04.svg",
    title: "Conversion Rate Optimization",
    desc:" Optimize your website and marketing strategies to convert more visitors into customers.",
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
