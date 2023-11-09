import Link from "next/link";
const services = [
  {
    iconSrc: "/images/icon/icon_01.svg",
    title: "Needs Assessment",
    desc:" We begin by comprehensively understanding your business and its unique challenges.",
  },
  {
    iconSrc: "/images/icon/icon_02.svg",
    title: "Solution Design",
    desc:"Our expert team designs a customized software solution that aligns with your goals and objectives.",
 
  },
  {
    iconSrc: "/images/icon/icon_03.svg",
    title: "Development and Testing",
    desc:"We build the software with the latest technologies and rigorously test it for performance and security.",
  },
  {
    iconSrc: "/images/icon/icon_04.svg",
    title: "Deployment and Support",
    desc:" Once your software is ready, we ensure a smooth deployment and provide ongoing support and maintenance",
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
