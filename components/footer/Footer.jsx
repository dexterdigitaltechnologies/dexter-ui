import React from "react";

const Footer = () => {
  const links = [
    {
      id: 1,
      title: "Links",
      column: "col-lg-2 col-md-3 col-sm-6 mb-30",
      items: [
        { label: "Home", url: "/" },
        { label: "About us", url: "/pages-menu/about-us-v1" },
        { label: "Privacy Policy", url: "/privacy-policy" },
        { label: "Contact", url: "/contact" },
      ],
    },
    {
      id: 2,
      title: "Services",
      column: "col-lg-3 col-md-4 col-sm-6 mb-30",
      items: [
        { label: "Software Development", url: "../services/software-development" },
        { label: "Digital Marketing", url: "../services/digital-marketing" },
        { label: "Web Design & Development", url: "../services/web-design-development" },
        { label: "UI/UX Design  ", url: "../services/ui-ux-design" },
        { label: "Consulting and Strategy", url: "../services/consulting-strategy" },
        { label: " ERP Implementation  ", url: "../services/erp-implimentation" },
        { label: "Mobile App Development", url: "../services/mobile-app-developemnt" },
      ],
    },
  ];


  const socialIcons = [
    {
      iconClass: "fab fa-facebook-f",
      link: "https://www.facebook.com/KamalMalikFinance",
    },
    // {
    //   iconClass: "fab fa-twitter",
    //   link: "#",
    // },
    {
      iconClass: "fab fa-linkedin-in",
      link: "https://www.linkedin.com/in/kamal-malik-10728022/",
    },
  ];

  return (
    <>
      {links.map((link) => (
        <div className={link.column} key={link.id}>
          <h5 className="footer-title txt-dark fw-500">{link.title}</h5>
          <ul className="footer-nav-link style-none">
            {link.items.map((item, i) => (
              <li key={i}>
                <a href={item.url}>{item.label}</a>
              
              </li>
            ))}
            {/* <li> <a href="/privacy.pdf" download="privacy policy">Privacy Policy</a></li> */}
          </ul>
        </div>
      ))}

      <div className="col-xl-3 col-lg-4 col-md-5 mb-30">
        <h5 className="footer-title txt-dark fw-500">Address</h5>
        <p className="text-dark opacity-75 mb-20">
          2 Fluture Court, Tarneit VIC 3029
        </p>
        <h5 className="footer-title txt-dark fw-500">Contact Info</h5>
        <p className="text-dark opacity-75 mb-20">
          <a className="telnumber" href="tel: 1300864393">
            {" "}
            1300 864393
          </a>
        </p>
        <h5 className="footer-title txt-dark fw-500">Email</h5>
        <p className="text-dark opacity-75 mb-20">
          <a className="mailid" href="mailto:info@unifyfinance.com.au">
            info@dexterinc.com
          </a>
        </p>

      
      </div>
    </>
  );
};

export default Footer;
