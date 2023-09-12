import "../AboutMe/About.css";
export function AboutMe() {
  return (
   

    <div className="about-main  col-12 ">
<div data-aos="zoom-in-up" data-aos-duration="2500" className="head-text text-center">
<p  className=" p-0 m-0">Get To Know</p>
      <h2 data-aos="zoom-in-up" data-aos-duration="2500" className="">About Me</h2></div>
   
      <div className="about-img-text row mt-lg-5 mt-md-5 mt-sm-5 mt-0">
      <div data-aos="fade-down-right" data-aos-duration="2500" className="imagediv  col-lg-6 col-md-5 col-12 ">
      <img
              className="object-fit-contain"
              src={require("../../../asset/about img.png")}
              alt=""
            />
      </div>
     
     
      <div className="about-boxtext col-lg-6 col-md-7 col-12 ">
        <div data-aos="fade-zoom-in-up" data-aos-duration="2500" className="two-box  d-flex justify-content-lg-start justify-content-md-start justify-content-center">
         <a className=" text-decoration-none text-dark" href="#"> <div data-aos="zoom-in-up" data-aos-duration="2500" className="Expriance d-flex flex-column justify-content-center text-center">
          <i className="fa-sharp fa-solid fa-medal fa-fade fs-3 p-2"></i>
          <h5>Expriance</h5>
              <p className="  fw-light">
                   1+ Year Of Expriencing
                </p>

          </div></a>
          <a className=" text-decoration-none text-dark" href="#Mywork">
            <div data-aos="zoom-in-up" data-aos-duration="2500" className="Expriance mx-lg-4 mx-0 d-flex flex-column justify-content-center text-center">
          <i className="fa-sharp fa-solid fa-list-check fa-fade  fs-3 p-2"></i>
                 <h5>Project</h5>
                 <p className=" fw-light">1 completed 5+ websites</p>

          </div></a>

          <div className="text   ">
          
          <p data-aos="zoom-in-up" data-aos-duration="2500"className="text-start  lh-lg   text-lg-start text-md-start  text-center">
      <i className="fa fa-hand-o-right text-info mx-2" aria-hidden="true"></i>I'm <span>Jegadeesan</span>, an <span> (MCA) Master of Computer Applications  </span>graduate with a passion for all things tech.
      </p>
          <p data-aos="zoom-in-up" data-aos-duration="2500"className="text-start  lh-lg   text-lg-start text-md-start  text-center">
      <i className="fa fa-hand-o-right text-info mx-2" aria-hidden="true"></i>
          
      As a <span> UI/UX designer & web developer </span>, I blend creativity and functionality to craft user-centric digital experiences with meticulous attention to detail. My proficiency in web development transforms design concepts into impactful solutions. Let's collaborate and create exceptional digital experiences. </p>
               
          
          </div>
          <a data-aos="zoom-in-up" data-aos-duration="3000" href="#Mywork"><div className="btn about-btn">Let's See</div></a>
        </div>
      </div>
     
      </div>
      </div>
   

   
  );
}
