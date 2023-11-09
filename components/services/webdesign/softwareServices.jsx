import Link from "next/link";
const services = [
  {
    iconSrc: "/images/icon/icon_01.svg",
    title: "Responsive Web Design",
    desc:" Ensure your website looks great and functions perfectly on all devices.",
  },
  {
    iconSrc: "/images/icon/icon_02.svg",
    title: "Website Redesign",
    desc:"Give your existing website a fresh and modern look to stay competitive.",
 
  },
  {
    iconSrc: "/images/icon/icon_03.svg",
    title: "E-commerce Website Development",
    desc:"Create an online store that is secure, user-friendly, and optimized for sales.",
  },
  {
    iconSrc: "/images/icon/icon_04.svg",
    title: "Content Management Systems (CMS)",
    desc:"Manage your website easily with our user-friendly content management systems.",
  },
  {
    iconSrc: "/images/icon/icon_04.svg",
    title: "Web Hosting and Maintenance",
    desc:"Keep your website running smoothly with our reliable hosting and maintenance services.",
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
