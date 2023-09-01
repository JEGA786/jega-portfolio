import "../AboutMe/About.css";
export function AboutMe() {
  return (
   

    <div className="about-main  col-12 ">
<div className="head-text text-center">
<p data-aos="fade-right" data-aos-duration="2000" className=" p-0 m-0">Get To Know</p>
      <h2 data-aos="fade-left" data-aos-duration="2000" className="">About Me</h2></div>
   
      <div className="about-img-text row mt-lg-5 mt-md-5 mt-sm-5 mt-0">
      <div data-aos="fade-down-right" data-aos-duration="2000" className="imagediv  col-lg-6 col-md-5 col-12 ">
      <img
              className="object-fit-contain"
              src={require("../../../asset/about img.png")}
              alt=""
            />
      </div>
     
     
      <div className="about-boxtext col-lg-6 col-md-7 col-12 ">
        <div data-aos="fade-down-left" data-aos-duration="2000" className="two-box  d-flex justify-content-lg-start justify-content-md-start justify-content-center">
          <div className="Expriance d-flex flex-column justify-content-center text-center">
          <i className="fa-sharp fa-solid fa-medal fa-fade fs-3 p-2"></i>
          <h5>Expriance</h5>
              <p className="  fw-light">
                   1+ Year Of Expriencing
                </p>

          </div>
          <div className="Expriance mx-lg-4 mx-0 d-flex flex-column justify-content-center text-center">
          <i className="fa-sharp fa-solid fa-list-check fa-fade  fs-3 p-2"></i>
                 <h5>Project</h5>
                 <p className=" fw-light">5+ completed</p>

          </div>

          <div className="text d-flex justify-content-start">
          <p className="text-start  lh-lg   text-lg-start text-md-start  text-center">
          I'm a passionate <span>UI/UX designer & web developer</span>, blending creativity and functionality to craft engaging digital experiences. With a keen eye for detail, I strive to design user-centric interfaces that resonate. My proficiency in web development allows me to bring these designs to life, ensuring seamless and impactful results. Let's create something exceptional together.
               </p>
          </div>
          <a data-aos="fade-left" data-aos-duration="3000" href="#Mywork"><div className="btn about-btn">Let's See</div></a>
        </div>
      </div>
     
      </div>
      </div>
   

   
  );
}
