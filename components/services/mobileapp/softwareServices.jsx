import Link from "next/link";
const services = [
  {
    iconSrc: "/images/icon/icon_01.svg",
    title: "iOS App Development",
    desc:" We craft native iOS apps with a focus on performance and seamless user experiences.",
  },
  {
    iconSrc: "/images/icon/icon_02.svg",
    title: "Android App Development",
    desc:"We design and develop Android apps that cater to a wide user base.",
 
  },
  {
    iconSrc: "/images/icon/icon_03.svg",
    title: "Cross-Platform App Development",
    desc:"We use versatile frameworks to build apps that work across multiple platforms, saving you time and resources.",
  },
  {
    iconSrc: "/images/icon/icon_04.svg",
    title: "UI/UX Design",
    desc:" Our designers create intuitive and appealing interfaces to enhance user experiences.",
  },
  {
    iconSrc: "/images/icon/icon_04.svg",
    title: "App Testing and Quality Assurance",
    desc:"App Testing and Quality Assurance: We rigorously test each app to ensure it performs flawlessly.",
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
