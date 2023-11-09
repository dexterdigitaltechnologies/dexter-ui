import Link from "next/link";
const services = [
  {
    iconSrc: "/images/icon/icon_01.svg",
    title: "Needs Assessment",
    desc:"We begin by understanding your business processes, goals, and challenges.",
  },
  {
    iconSrc: "/images/icon/icon_02.svg",
    title: "System Selection",
    desc:" We help you choose the right ERP system that aligns with your requirements.",
 
  },
  {
    iconSrc: "/images/icon/icon_03.svg",
    title: "Customization",
    desc:" Our team customizes the ERP system to suit your specific needs, ensuring a perfect fit.",
  },
  {
    iconSrc: "/images/icon/icon_04.svg",
    title: "Data Migration",
    desc:"We handle the secure transfer of your existing data into the new ERP system.",
  },
  {
    iconSrc: "/images/icon/icon_04.svg",
    title: "Training and Support",
    desc:"We provide comprehensive training and ongoing support to ensure a seamless transition.",
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
