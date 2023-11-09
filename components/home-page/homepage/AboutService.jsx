import Link from "next/link";
const services = [
  {
    iconSrc: "/images/icon/icon_01.svg",
    title: "Experience",
    desc:"With over 8 years in the industry, we bring a wealth of experience and knowledge to every project.",
  },
  {
    iconSrc: "/images/icon/icon_02.svg",
    title: "Innovation",
    desc:"We embrace the latest technologies and trends, ensuring we deliver cutting-edge solutions.",
 
  },
  {
    iconSrc: "/images/icon/icon_03.svg",
    title: "Client-Centric Approach",
    desc:"Your success is our top priority. We work closely with you to understand your goals and deliver solutions that align with your vision.",
  },
  {
    iconSrc: "/images/icon/icon_04.svg",
    title: "Expert Team",
    desc:"Our dedicated team comprises experts in software development and digital marketing who are passionate about delivering outstanding results.",
  },
  {
    iconSrc: "/images/icon/icon_04.svg",
    title: "Measurable Results",
    desc:"We believe in delivering results that can be quantified. Our strategies and solutions are designed to generate measurable returns on your investment.",
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
