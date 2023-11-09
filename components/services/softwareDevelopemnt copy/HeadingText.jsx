import Link from "next/link";

const CallToActions = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-xxl-10 col-lg-10 col-md-10 m-auto text-center">
          <div className="title-style-one ">
            <h3 style={{fontStyle:"italic"}} className="main-text fw-500 tx-dark m0">
            Elevate your digital products with superior UI/UX design from Dexter Digital Technologies. User satisfaction is our  <span> priority.</span>
             
            </h3>
          </div>
          {/* /.title-style-one */}
         
          <div
            className="subscribe-form m-auto"
            // data-aos="fade-up"
            // data-aos-delay="200"
          >
          
          </div>
          {/* /.subscribe-form */}
        </div>
      </div>
    </div>
  );
};

export default CallToActions;