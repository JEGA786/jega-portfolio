import "../Services/Services.css";

// import { Player } from '@lottiefiles/react-lottie-player';

export function Services() {
  return (
    <div className="servicepage ">
      <div className="heading text-center">
        <p data-aos="fade-right"
     data-aos-duration="2500" className=" p-0 m-0 ">Get To Know</p>
        <h2 data-aos="fade-up"
     data-aos-duration="2500" className="">Services</h2>
      </div>

      {/* -----------------------------------cards----------------------- */}

      <div className="mainservice col-12 d-flex jusity-content-end px-0 mt-5">
        <div  className="row p-0 m-0 flex-wrap col-12 d-flex  justify-content-lg-around  justify-content-center">
          <div className="col-lg-4  container col-md-8 col-sm-7 col-12 mt-lg-0 mt-md-5 mt-sm-5 mt-5 d-flex  justify-content-center">
            <div data-aos="zoom-in-up"
     data-aos-duration="2500" className="card  col-12 ">
              <div className="col-12  card-img d-flex  justify-content-start align-items-center">
              {/* <Player
        src={require('../../../asset/uiux.json')}
        className="player"
        loop
        autoplay
        speed={0.5}
      /> */}


              </div>
              <div className="cardtext py-3 ">
                
               <h4>Ui/Ux Design</h4>
                <p className="text-start col-12 p-0 mx-0 ">
                Crafting user-centered UI/UX designs for seamless digital experiences. From wireframes to prototypes, I bring ideas to life. Ensuring responsiveness and visual appeal, I prioritize collaboration and innovation
                </p>
                <a href="#Mywork">
                  <button className="card-button btn border-info">Let's See</button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4  container col-md-12 col-sm-7 col-12 mt-lg-0 mt-md-5  mt-sm-5 mt-5 d-flex  justify-content-center">
            <div data-aos="zoom-in-up"
     data-aos-duration="2500"  className="card  col-12 ">
              <div className="col-12 card-img d-flex  justify-content-start align-items-center ">
              
              {/* <Player
        src={require('../../../asset/development.json')}
     
        className="player "
        loop
        autoplay
        speed={3}
      /> */}

              </div>
              <div className="cardtext py-3 ">
              <h4>Development</h4>
                <p className="text-start col-12 p-0 mx-0 ">
                Expert in web development, I code and design interactive websites tailored to your needs. Using HTML, CSS, and JavaScript, I ensure user-friendly experiences. Let's bring your web ideas to life.</p>           
                     <a href="#Mywork">
                  <button className="card-button btn border-info">Let's See</button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4  container col-md-12 col-sm-7 col-12 mt-lg-0 mt-md-5  mt-sm-5 mt-5 d-flex  justify-content-center">
            <div data-aos="zoom-in-up"
     data-aos-duration="2500" className="card  col-12 ">
              <div className="col-12  card-img d-flex  justify-content-start align-items-center">
              {/* <Player src={require("../../../asset/hosting.json")}
className="player"
loop
autoplay
speed={1}/> */}
              </div>
              <div className="cardtext py-3 ">
            <h4>Test & Hosting</h4>
                <p className="text-start col-12 p-0 mx-0 ">
                Combining meticulous testing and seamless AWS (Amazon Web Services) hosting to ensure application reliability. Leverage the power of Amazon Web Services for 
                top-notch performance and scalability.</p>                <a href="#Mywork">
                  <button className="card-button btn border-info">Let's See</button>
                </a>
              </div>
            </div>
          </div>

          {/* ------------------------sub-service------------------------- */}

          <div className="sub-service container  flex-wrap col-11 mt-5">
            <div className="row  d-flex justify-content-lg-around justify-content-center ">
              <div className="child-service  col-lg-3 col-md-5 col-sm-5 col-6   d-flex justify-content-center">
                <div data-aos="fade-right"
     data-aos-duration="2500" className="col-12 card  d-flex flex-column justify-content-between align-items-center">
                  <div className="sub-serv-img ">
                    <img
                      className="object-fit-contain"
                      src={require("../../../asset/wfandprototype.png")}
                      alt=""
                    />
                  </div>
                  <h4 className="sub-service-text">Wireframe&Prototype </h4>
                </div>
              </div>
              <div data-aos="fade-up"
     data-aos-duration="2500" className="child-service  col-lg-3 col-md-5 col-sm-5 col-6  mt-lg-0 mt-md-0 mt-sm-0  d-flex justify-content-center">
                <div className="col-12 card  d-flex flex-column justify-content-between align-items-center">
                  <div className="sub-serv-img">
                    <img
                      className="object-fit-contain"
                      src={require("../../../asset/logocreat.png")}
                      alt=""
                    />
                  </div>
                  <h4 className="sub-service-text">Logo Creation</h4>
                </div>
              </div>
              <div data-aos="fade-right"
     data-aos-duration="2500"  className="child-service  col-lg-3 col-md-5 col-sm-5 col-6  mt-lg-0 mt-md-3 mt-sm-3 mt-3 d-flex justify-content-center">
                <div className="col-12 card  d-flex flex-column justify-content-between align-items-center">
                  <div className="sub-serv-img ">
                    <img
                      className="object-fit-contain"
                      src={require("../../../asset/iconcreat.png")}
                      alt=""
                    />
                  </div>
                  <h4 className="sub-service-text">Icon Creation</h4>
                </div>
              </div>
              <div data-aos="fade-up"
     data-aos-duration="2500" className="child-service  col-lg-3 col-md-5 col-sm-5 col-6  mt-lg-0 mt-md-3 mt-sm-3 mt-3 d-flex justify-content-center">
                <div className="col-12 card  d-flex flex-column justify-content-between align-items-center">
                  <div className="sub-serv-img ">
                    <img
                      className="object-fit-contain"
                      src={require("../../../asset/poster.png")}
                      alt=""
                    />
                  </div>
                  <h4 className="sub-service-text">Posters Design</h4>
                </div>
              </div>
              <div className="d-flex last justify-content-center m-0 p-0">
                <div className="child-service  col-lg-3 col-md-5 col-sm-5 col-6  mt-lg-3 mt-md-3 mt-sm-3 mt-3 d-flex justify-content-center">
                  <div data-aos="fade-right"
     data-aos-duration="2500" className="col-12 card  d-flex flex-column justify-content-between align-items-center">
                    <div className="sub-serv-img ">
                      <img
                        className="object-fit-contain"
                        src={require("../../../asset/Muckup.png")}
                        alt=""
                      />
                    </div>
                    <h4 className="sub-service-text">Muckup Design</h4>
                  </div>
                </div>
                <div className="child-service  col-lg-3 col-md-5 col-sm-5 col-6  mt-lg-3 mt-md-3 mt-sm-3 mt-3 d-flex justify-content-center">
                  <div data-aos="fade-up"
     data-aos-duration="2500" className="col-12 card  d-flex flex-column justify-content-between align-items-center">
                    <div className="sub-serv-img ">
                      <img
                        className="object-fit-cover"
                        src={require("../../../asset/victor.png")}
                        alt=""
                      />
                    </div>
                    <h4 className="sub-service-text">Victors Creation</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
