import Link from "next/link";
import {
  menuItems,
  pagesItems,
  portfolioItems,
  blogItems,
  services
} from "../../data/menu";

import { useRouter } from "next/router";


const MainMenu = () => {
  const router = useRouter();

  const isActive = (link) => {
    return router.pathname.replace('/[id]', '') === link.replace(/\/\d+$/, '');
  };


  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      {/* End mobile collapse menu */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <img src="/images/logo/logo_01.png" alt="" width={95} />
              </Link>
            </div>
          </li>
          {/* End li */}

          <li className="nav-item  mega-dropdown-md">
            <a
              className="nav-link active-menu"
              href="/"
              role="button"
              data-bs-toggle=""
              data-bs-auto-close="outside"
              aria-expanded="false"
              

              // style={{color:'green'}}
            >
              Home
            </a>
          </li>
          {/* End li (home mega menu) */}

          <li className="nav-item  dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Services
            </a>
            <ul className="dropdown-menu" style={{minWidth:"270px"}}>
              {services.map((item, index) => (
                <li className="dropdown-submenu dropdown" key={index}>
                  <Link href={item.link} className="dropdown-item">
                    <span>{item.name}</span>
                  </Link>
                 
                </li>
              ))}

             
            </ul>
          </li>
        
          <li className="nav-item  mega-dropdown-md">
            <a
              className="nav-link active-menu"
              href="/pages-menu/about-us"
              role="button"
              data-bs-toggle=""
              data-bs-auto-close="outside"
              aria-expanded="false"
              // style={{color:'green'}}
            >
              About Us
            </a>
          </li>

         
    
          <li
            className={
              router.pathname === "/contact" ? "active nav-item" : "nav-item"
            }
          >
            <Link href="/contact" role="button" className="nav-link">
              Contact
            </Link>
          </li>
          {/* End li (contact) */}
        </ul>
        {/* End ul */}

        {/* Mobile Content */}
        <div className="mobile-content d-block d-lg-none">
          <div className="d-flex flex-column align-items-center justify-content-center mt-70">
            <Link href="/contact" className="btn-twentyOne fw-500 tran3s">
              Contact us
            </Link>
          </div>
        </div>
        {/* /.mobile-content */}
      </div>
    </nav>
  );
};

export default MainMenu;
