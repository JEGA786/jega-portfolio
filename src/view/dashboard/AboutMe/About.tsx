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
      <i className="fa fa-hand-o-right text-info mx-2" aria-hidden="true"></i>I'm <span>Jegadeesan</span>, an <span> (MCA) Master of Computer Applications  </span>graduate with a passion for all things tech
      </p>
          <p data-aos="zoom-in-up" data-aos-duration="2500"className="text-start  lh-lg   text-lg-start text-md-start  text-center">
      <i className="fa fa-hand-o-right text-info mx-2" aria-hidden="true"></i>
          
          i'm passionate <span>UI/UX designer & web developer</span>, creating user-centric interfaces with a blend of creativity and functionality. 
          Let's craft something exceptional together </p>
              
          <p data-aos="zoom-in-up" data-aos-duration="2500"className="text-start  lh-lg   text-lg-start text-md-start  text-center">
      <i className="fa fa-hand-o-right text-info mx-2" aria-hidden="true" />My annual <span>CTC is 3,00,000</span> . I'm excited about my compensation package
      </p>
          </div>
          <a data-aos="zoom-in-up" data-aos-duration="3000" href="#Mywork"><div className="btn about-btn">Let's See</div></a>
        </div>
      </div>
     
      </div>
      </div>
   

   
  );
}
