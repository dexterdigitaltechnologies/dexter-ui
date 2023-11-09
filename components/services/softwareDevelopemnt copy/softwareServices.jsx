import Link from "next/link";
const services = [
  {
    iconSrc: "/images/icon/icon_01.svg",
    title: "User Research",
    desc:"We conduct in-depth research to understand your target audience and their preferences.",
  },
  {
    iconSrc: "/images/icon/icon_02.svg",
    title: "UI Design",
    desc:"We create visually appealing user interfaces that are easy to navigate and interact with.",
 
  },
  {
    iconSrc: "/images/icon/icon_03.svg",
    title: "UX Design",
    desc:"We focus on the overall user experience, ensuring it's seamless and delightful.",
  },
  {
    iconSrc: "/images/icon/icon_04.svg",
    title: "Prototyping and Testing",
    desc:"We build prototypes and conduct user testing to refine the design.",
  },
  {
    iconSrc: "/images/icon/icon_04.svg",
    title: "Continuous Improvement",
    desc:" We analyze user behavior and feedback to make iterative improvements.",
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
