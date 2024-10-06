import React from "react";
import logo from "../utils/img/icon-white.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container-fluid bg-success text-white" style={{ padding: '20px' }}>
        <div className="row grid grid-cols-5 gap-4">
          <div className="col col-span-3 flex flex-col items-start">
            <img src={logo} alt="Logo" style={{ width: '180px' }} />
            <h2 style={{ fontWeight: 'bold', color: 'white', fontSize: '36px', padding: '8px 0',textAlign: 'left' }}>
  The Learning Huts Foundation
</h2>


            <p className="fw-bold">Delivering Education at the DoorStep</p>
          </div>
          <div className="col col-span-2 border-start p-4">
            <div>
              <p className="fw-bold">GET IN TOUCH</p>
              <div className="py-4 gap-0" style={{ display: 'flex', flexWrap: 'wrap' }}>
                <a
                  href="http://facebook.com"
                  className="btn-floating text-white"
                  style={{ background: "#3b5998", display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', margin: '4px' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="http://twitter.com"
                  className="btn-floating text-white"
                  style={{ background: "#55acee", display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', margin: '4px' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-twitter"></i>
                </a>
                <a
                  href="http://github.com"
                  className="btn-floating text-white"
                  style={{ background: "#333333", display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', margin: '4px' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="http://instagram.com"
                  className="btn-floating text-white"
                  style={{ background: "#d62976", display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', margin: '4px' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="http://linkedin.com"
                  className="btn-floating text-white"
                  style={{ background: "#0082ca", display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', margin: '4px' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
            <div>
              <p className="fw-bold">CONTACT US</p>
              <span>+91-8960603002, 6388652268</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center container-fluid text-center py-1" style={{ background: "#C6F6D5" }}>
        <p>Copyright © {currentYear} The Learning Huts Foundation. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
