import React from "react";
import "../Homepage/Home.css";
import"../Contactus/ContactUs";

export function Homepage() {
  return (
    <div className="home-container  ">
      <div className="homepage col-12 ">
        <div className="homeimg-text row   d-flex justify-content-between align-items-center  ">
          <div className="col-lg-7 col-md-7 col-12 m-0 p-0 ">
            <div className="d-flex h-100 mt-lg-5 mt-md-5 mt-0 text-center justify-content-center  align-items-center">
              <div data-aos="fade-right" data-aos-duration="2000"  className="homealltext col-lg-10 col-md-10 col-xs-12 ">
                <h1>
                𝗛𝗲𝗹𝗹𝗼,𝗶 𝗮𝗺 <span className="nametext">𝗝𝗘𝗚𝗔</span>
                </h1>
                <h5 className="roal ">UI/UX designer & web developer</h5>
                <p className=" ">
                I've been doing Ui/Ux design,web development for a year now. Do you need a website design, site layout, or maybe a turnkey website? Then contact me
                </p>
<div  data-aos="fade-up" data-aos-duration="2000" className="social-media   d-flex justify-content-center aling-items-center py-3">
  <div className="fb fs-5  mx-1 d-flex justify-content-center align-items-center "><a href="https://www.instagram.com/u1_jega/"><i className="fa fa-instagram"></i></a> </div>
  <div className="fb fs-5  mx-1 d-flex justify-content-center align-items-center "> <a href="https://www.linkedin.com/in/jega-m-44a28223a/"><i className="fa fa-linkedin"></i></a></div>
  <div className="fb fs-5  mx-1 d-flex justify-content-center align-items-center "> <a href="https://github.com/JEGA786"><i className="fa fa-github"></i></a></div>
  <div className="fb fs-5  mx-1 d-flex justify-content-center align-items-center "> <a href="https://www.facebook.com/profile.php?id=100024132496468"><i className="fa fa-facebook"></i></a></div>
  
</div>
                <a href={require("../../../asset/JEGADEESAN M Resume.pdf")} download  className="linkbtnone"><button data-aos="fade-up" data-aos-duration="2500" type="button" className="btn btnone px-1">
                  Downlode cv 
                </button></a>

                <a  href="#ContactUs"  className="linkbtntwo"><button data-aos="fade-up" data-aos-duration="2000" type="button" className="btn btntwo  text-dark mx-3">
                Let's Talk
                </button></a>
               
              </div>
            </div>
          </div>

          <div data-aos="fade-left"  data-aos-duration="2000" data-aos-once="true" className="imagediv col-lg-5 col-md-5 order-first order-lg-last order-md-last  col-12 m-0 p-0 col-xs-tow ">
            <img
              className="object-fit-contain"
              src={require("../../../asset/home img.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
