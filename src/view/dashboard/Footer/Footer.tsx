import "../Footer/Footer.css";

export function Footer(){
    return(
        <div  data-aos="zoom-in-down"
        data-aos-duration="2500" className="containe main-footer   d-flex flex-column  justify-content-center ">
<div className=" img-name d-flex  justify-content-center">
<div data-aos="fade-down"
     data-aos-duration="2500" className="footer-img my-2">
    <img className="object-fit-cover" src={require("../../../asset/logo.png")} alt="" />
   
</div>

</div>
<h3 data-aos="zoom-in-up"
     data-aos-duration="2500" className=" text-center">Thank you!</h3>

<div data-aos="fade-right"
     data-aos-duration="2500" className="social-media   d-flex justify-content-center aling-items-center py-3">
  <div className="fb fs-5  mx-3 d-flex justify-content-center align-items-center "><a href="https://www.instagram.com/u1_jega/"><i className="fa fa-instagram"></i></a> </div>
  <div className="fb fs-5  mx-3 d-flex justify-content-center align-items-center "> <a href="https://www.linkedin.com/in/jega-m-44a28223a/"><i className="fa fa-linkedin"></i></a></div>
  <div className="fb fs-5  mx-3 d-flex justify-content-center align-items-center "> <a href="https://github.com/JEGA786"><i className="fa fa-github"></i></a></div>
  <div className="fb fs-5  mx-3 d-flex justify-content-center align-items-center "> <a href="https://www.facebook.com/profile.php?id=100024132496468"><i className="fa fa-facebook"></i></a></div>
  
</div>

<div data-aos="fade-up"
     data-aos-duration="2500" className="  Footer-menu d-flex justify-content-center">
    <ul className="text-center col-10 d-flex justify-content-center">
        <div className="col-lg-6 d-lg-flex justify-content-lg-around  justify-content-center "><li><a href="#Homepage">Home</a></li>
        <li className=""><a href="#AboutMe">About Me</a></li>
        <li><a href="#Skills">Skills</a></li></div>
        <div className="col-lg-6 d-lg-flex justify-content-lg-around  justify-content-center  "> <li><a href="#Services">Service</a></li>
        <li><a href="#Mywork">Mywork</a></li>
        <li><a href="#ContactUs">Contact</a></li></div>
    </ul>
</div>

<p className="text-center fw-light  m-0">
Copyright ©2023 All rights reserved. ❣
      </p>
        </div>
    );
}