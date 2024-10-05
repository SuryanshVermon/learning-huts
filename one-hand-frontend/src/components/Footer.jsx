import React from "react";
import logo from "../utils/img/icon-white.png";
import { Link } from "react-router-dom";

export const Footer = () => {

  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="container-fluid w-100 p-5 bg-success">
        <div className="row grid grid-cols-5 gap-4">
          <div className="col col-span-3 flex flex-col items-start">
            <img src={logo} alt="logo" width="180px" />
            <h2 className="h2 fw-bold py-2 text-white">
              The Learning Huts Foundation
            </h2>
            <p className="fw-bold text-white">
              Delivering Education at DoorStep
            </p>
          </div>
          <div className="col col-span-2 border-start border-white p-4 text-white">
            <div className="col p-4 text-white">
              <p className="fw-bold"> GET IN TOUCH</p>
              <div className="py-4 gap-4">
                <Link
                  to="http://facebook.com"
                  className="btn text-white btn-floating m-1 rounded-circle"
                  style={{ background: "#3b5998" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-facebook"></i>
                </Link>

                <div
                  className="btn text-white btn-floating m-1 rounded-circle"
                  style={{ background: "#55acee" }}
                >
                  <i className="bi bi-twitter"></i>
                </div>

                <div
                  className="btn text-white btn-floating m-1 rounded-circle"
                  style={{ background: "#333333" }}
                >
                  <i className="bi bi-github"></i>
                </div>
                <div
                  className="btn text-white btn-floating m-1 rounded-circle"
                  style={{ background: "#d62976" }}
                >
                  <i className="bi bi-instagram"></i>
                </div>
                <div
                  className="btn text-white btn-floating m-1 rounded-circle"
                  style={{ background: "#0082ca" }}
                >
                  <i className="bi bi-linkedin"></i>
                </div>
              </div>
            </div>
            <div className="col px-4 text-white">
              <p className="fw-bold pb-1"> CONTACT US</p>
              <span>+91-8960603002, 6388652268</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col items-center container-fluid text-center py-1 "
        style={{ background: "#C6F6D4" }}
      >
        <p>
          Copyright © {currentYear} Learning Huts Foundation. All Rights Reserved.
          {/* <br /> */}
           {/*Made with ❤️ by Suryansh.*/}
        </p>
      </div>
    </footer>
  );
};
