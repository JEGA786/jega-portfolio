
import "../Services/Services.css";


// import { Player } from '@lottiefiles/react-lottie-player';




export function Services() {
 

  return (
    <div className="servicepage ">
      <div className="heading text-center">
        <p className=" p-0 m-0 ">Get To Know</p>
        <h2 className="">Services</h2>
      </div>

      {/* -----------------------------------cards----------------------- */}

      <div className="mainservice col-12 d-flex jusity-content-end px-0 mt-5">
        <div  className="row p-0 m-0 flex-wrap col-12 d-flex  justify-content-lg-around  justify-content-center">
          <div className="col-lg-4  container col-md-8 col-sm-7 col-12 mt-lg-0 mt-md-5 mt-sm-5 mt-5 d-flex  justify-content-center">
            <div className="card  col-12 ">
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
                {" "}
                <h4>Ui/Ux</h4>
                <p className="text-start col-12 p-0 mx-0 ">
                  Lorem, ipsum dolor sit amet elit. Rem provident ipsum debitis
                  cupiditate doloremque in veniam laborum, eveniet ipsa impedit
                  unde mollitia ut dicta, inventore tenetur, magni suscipit
                  officia!
                </p>
                <a href="">
                  <button className="card-button btn border-info">Lets More</button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4  container col-md-12 col-sm-7 col-12 mt-lg-0 mt-md-5  mt-sm-5 mt-5 d-flex  justify-content-center">
            <div className="card  col-12 ">
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
                <h4>Ui/Ux</h4>
                <p className="text-start col-12 p-0 mx-0 ">
                  Lorem, ipsum dolor sit amet elit. Rem provident ipsum debitis
                  cupiditate doloremque in veniam laborum, eveniet ipsa impedit
                  unde mollitia ut dicta, inventore tenetur, magni suscipit
                  officia!
                </p>
                <a href="">
                  <button className="card-button btn border-info">Lets More</button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4  container col-md-12 col-sm-7 col-12 mt-lg-0 mt-md-5  mt-sm-5 mt-5 d-flex  justify-content-center">
            <div className="card  col-12 ">
              <div className="col-12  card-img d-flex  justify-content-start align-items-center">
              {/* <Player src={require("../../../asset/hosting.json")}
className="player"
loop
autoplay
speed={1}/> */}
              </div>
              <div className="cardtext py-3 ">
                <h4>Ui/Ux</h4>
                <p className="text-start col-12 p-0 mx-0 ">
                  Lorem, ipsum dolor sit amet elit. Rem provident ipsum debitis
                  cupiditate doloremque in veniam laborum, eveniet ipsa impedit
                  unde mollitia ut dicta, inventore tenetur, magni suscipit
                  officia!
                </p>
                <a href="">
                  <button className="card-button btn border-info">Lets More</button>
                </a>
              </div>
            </div>
          </div>

          {/* ------------------------sub-service------------------------- */}

          <div className="sub-service container  flex-wrap col-11 mt-5">
            <div className="row  d-flex justify-content-lg-around justify-content-center ">
              <div className="child-service  col-lg-3 col-md-5 col-sm-5 col-6   d-flex justify-content-center">
                <div className="col-12 card  d-flex flex-column justify-content-between align-items-center">
                  <div className="sub-serv-img h-75">
                    <img
                      className="object-fit-contain"
                      src={require("../../../asset/javascript.png")}
                      alt=""
                    />
                  </div>
                  <h4 className="fs-lg-0 fs-md-0 fs-sm-0 fs-6">wireframe</h4>
                </div>
              </div>
              <div className="child-service  col-lg-3 col-md-5 col-sm-5 col-6  mt-lg-0 mt-md-0 mt-sm-0  d-flex justify-content-center">
                <div className="col-12 card  d-flex flex-column justify-content-between align-items-center">
                  <div className="sub-serv-img h-75">
                    <img
                      className="object-fit-contain"
                      src={require("../../../asset/javascript.png")}
                      alt=""
                    />
                  </div>
                  <h4 className="fs-lg-0 fs-md-0 fs-sm-0 fs-6">wireframe</h4>
                </div>
              </div>
              <div className="child-service  col-lg-3 col-md-5 col-sm-5 col-6  mt-lg-0 mt-md-3 mt-sm-3 mt-3 d-flex justify-content-center">
                <div className="col-12 card  d-flex flex-column justify-content-between align-items-center">
                  <div className="sub-serv-img h-75">
                    <img
                      className="object-fit-contain"
                      src={require("../../../asset/javascript.png")}
                      alt=""
                    />
                  </div>
                  <h4 className="fs-lg-0 fs-md-0 fs-sm-0 fs-6">wireframe</h4>
                </div>
              </div>
              <div className="child-service  col-lg-3 col-md-5 col-sm-5 col-6  mt-lg-0 mt-md-3 mt-sm-3 mt-3 d-flex justify-content-center">
                <div className="col-12 card  d-flex flex-column justify-content-between align-items-center">
                  <div className="sub-serv-img h-75">
                    <img
                      className="object-fit-contain"
                      src={require("../../../asset/javascript.png")}
                      alt=""
                    />
                  </div>
                  <h4 className="fs-lg-0 fs-md-0 fs-sm-0 fs-6">wireframe</h4>
                </div>
              </div>
              <div className="d-flex last justify-content-center m-0 p-0">
                <div className="child-service  col-lg-3 col-md-5 col-sm-5 col-6  mt-lg-3 mt-md-3 mt-sm-3 mt-3 d-flex justify-content-center">
                  <div className="col-12 card  d-flex flex-column justify-content-between align-items-center">
                    <div className="sub-serv-img h-75">
                      <img
                        className="object-fit-contain"
                        src={require("../../../asset/javascript.png")}
                        alt=""
                      />
                    </div>
                    <h4 className="fs-lg-0 fs-md-0 fs-sm-0 fs-6">wireframe</h4>
                  </div>
                </div>
                <div className="child-service  col-lg-3 col-md-5 col-sm-5 col-6  mt-lg-3 mt-md-3 mt-sm-3 mt-3 d-flex justify-content-center">
                  <div className="col-12 card  d-flex flex-column justify-content-between align-items-center">
                    <div className="sub-serv-img h-75">
                      <img
                        className="object-fit-contain"
                        src={require("../../../asset/javascript.png")}
                        alt=""
                      />
                    </div>
                    <h4 className="fs-lg-0 fs-md-0 fs-sm-0 fs-6">wireframe</h4>
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
