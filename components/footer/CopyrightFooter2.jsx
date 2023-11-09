import Link from "next/link";



const Footer = () => {
  return (
    <div className="bottom-footer lg-pb-20 position-relative">
      <div className="container">
        <div className="row">
        <div className="">
              <p className="copyright text-center m0">
                Copyright © {new Date().getFullYear()} {"  "}
                <a target="_blank" rel="noopener noreferrer" href="#">
                 Dexter Digital Technologies Pty. Ltd.
                </a>
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
