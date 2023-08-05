import React from "react";
import { Homepage } from "../Homepage/Home";
import "./Dashboard.styles.css";
import { AboutMe } from "../AboutMe/About";
import { Services } from "../Services/Services";
import { Skills } from "../Skills/Skills";
import { ContactUs } from "../Contactus/ContactUs";
import { Mywork } from "../Mywork/Mywork";
import { Footer} from "../Footer/Footer";

export function Dashboard() {
  return (
<div className=" all m-0 p-0 col-12 ">
    <nav className="navbar navbar-expand-lg col-12 p-0 m-0">
      <div className="container-fluid  px-0 ">
        <a className="head-logo" href="/">
        
        <img
            src={require("../../../asset/logo.png")}
            alt="paype logo"
            className="logo-circle"></img>
            
       
        </a>
        <a
          className="navbar-toggler border-0 mt-3"
          // style={{ marginRight: '15px' }}
          // type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <i className="fs-1 fa-solid fa-bars text-black  mx-3">
           
          </i>
        </a>
        <div
          className="offcanvas offcanvas-start-lg "
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header m-0 p-0 d-lg-none">
            <a className="head-logo m-0  d-flex " href="/" >
              <img
                src={require("../../../asset/logo.png")}
                alt="logo"
                className="logo-circle "
              />
              {/* <img
                src={require("../../../../../asset/img/logo/paypelogotext.png")}
                alt="logo"
                className="logo-text"
              /> */}

              
            </a>
           
            <a
              href="javascript:void(0) "
              className="text-reset p-0 "
              data-bs-dismiss="offcanvas"
              aria-label="close"
            >
            
              <i className="fs-1  close fa-solid fa-close mx-3 ">
               
                {/* <XCircleFill /> */}

              </i>
                 
            </a>
            
          </div>
        <div className="line d-lg-none "></div>
          <div className="offcanvas-body  d-lg-flex justify-content-lg-end justify-content-satrt">
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <a className="nav-link " aria-current="page" href="#Homepage">
                  Home
                </a>
              </li>

              <li className="nav-item ">
                <a className="nav-link " href="#AboutMe">
                About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#Skills">
                Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#Services">
                Service
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#Mywork">
                Mywork
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#ContactUs">
                Contact Us
                </a>
              </li>

              
            </ul>
          </div>
        </div>
      </div>
    </nav>

      <div className="Homepage  py-2 " id="Homepage">
        <Homepage></Homepage>
      </div>
      <div className="AboutMe py-5" id="AboutMe">
        <AboutMe></AboutMe>
      </div>
      <div className="Skills py-5" id="Skills">
        <Skills></Skills>
      </div>
      <div className="Services py-5" id="Services">
        <Services></Services>
      </div>
      <div className="mywork py-5" id="Mywork">
        <Mywork></Mywork>
      </div>
      <div className="ContactUs py-5 " id="ContactUs">
        <ContactUs></ContactUs>
      </div>
      <div className="Footer " id="Footer">
      <Footer></Footer>
      </div>
      </div>
  );
}
