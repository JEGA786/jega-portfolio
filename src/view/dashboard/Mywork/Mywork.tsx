import"../Mywork/Mywork.css"
import"../Mywork/Mywork"
export function Mywork(){
    return(
      <div className="myworkall ">
<div className="myworktop  col-12    d-flex justify-content-center flex-column align-items-center">
<div className="slaider-container  ">
<p data-aos="fade-left"
     data-aos-duration="2500" className=" p-0 m-0 ">My recent work</p>
        <h2 data-aos="fade-right"
     data-aos-duration="2500" className="">my portfolio</h2>

        <div data-aos="fade-left"
     data-aos-duration="2500" className="liveproject text-info "><h4>Live project</h4></div>
<div   className="slaider-container p-0 m-0 mt-0">
  <input type="radio" name="slider" id="item-1" defaultChecked />
  <input type="radio" name="slider" id="item-2" />
  <input type="radio" name="slider" id="item-3" />
  <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"  data-aos-duration="2500" className="cards">
    <label className="slaider-card    " htmlFor="item-1" id="song-1">
      <img src={require("../../../asset/paype web 1.png")} alt="song" />
    </label>
    <label className="slaider-card  " htmlFor="item-2" id="song-2">
      <img src={require("../../../asset/paype web 2.png")} alt="song" />
    </label>
    <label className="slaider-card " htmlFor="item-3" id="song-3">
      <img src={require("../../../asset/paype web 3.png")} alt="song" />
    </label>
  </div>
  <div data-aos="fade-left"
     data-aos-duration="2500" className="player ">
    <div className="upper-part">
      <div className="play-icon">
        <svg width={20} height={20} fill="#2992dc" stroke="#2992dc" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-play" viewBox="0 0 24 24">
          <defs />
          <path  />
        </svg>
      </div>
      <div className="info-area text-center fw-bold" id="test">
        <label className="song-info  mt-2" id="song-info-1">
          <div className="title ">Paype</div>
          <div className="sub-line d-flex justify-content-around align-items-center">
            
          <a href="https://www.paype.co.in/" className="text-decoration-none"><div className="btn-outline-info btn d-flex justify-content-center align-items-center">viwe</div></a>           
          <a href="https://github.com/JEGA786" className="text-decoration-none"><i className="fa fa-github fs-3 btn-fill btn-info btn d-flex justify-content-center align-items-center"></i></a>            
          </div>
        </label>
        <label className="song-info  " id="song-info-2">
          <div className="title">M Pay-Off</div>
          <div className="sub-line d-flex justify-content-around align-items-center">
          <a href="https://main.d39wylg1fvdwk7.amplifyapp.com/" className="text-decoration-none"><div className="btn-outline-info btn d-flex justify-content-center align-items-center">viwe</div></a>
          <a href="https://github.com/JEGA786" className="text-decoration-none"><i className="fa fa-github fs-3 btn-fill btn-info btn d-flex justify-content-center align-items-center"></i></a>            
          </div>
        </label>
        <label className="song-info   " id="song-info-3">
          <div className="title ">Pay-GS</div>
          <div className="sub-line d-flex justify-content-around align-items-center">
            
            <a href="https://main.deg9m21yk88ae.amplifyapp.com/" className="text-decoration-none"><div className="btn-outline-info btn d-flex justify-content-center align-items-center">viwe</div></a>
            <a href="https://github.com/JEGA786" className="text-decoration-none"><i className="fa fa-github fs-3 btn-fill btn-info btn d-flex justify-content-center align-items-center"></i></a>
            
          </div>
        </label>
      </div>
    </div>
 
  </div>
</div>

</div>
</div>



<div data-aos="fade-right"
     data-aos-duration="2500" className=" liveproject text-dark text-center mt-4"><h4>Design Service</h4></div>
<div className="designs container  col-12">
<div data-aos="fade-up"
     data-aos-duration="2500" className=" design ">
<div  className="des-img bg-white m-2  rounded">
<img src={require("../../../asset/mobile paype.png")} className="object-fit-cover" alt="" />

</div>

<div  className="sub-line   d-flex col-12 justify-content-around align-items-center p-2">
 
            <a className="text-decoration-none" href="https://play.google.com/store/apps/details?id=com.paype&hl=en_US&pli=1"><div className="btn-outline-info btn d-flex justify-content-center align-items-center">viwe</div></a>
            {/* <h5>Paype</h5> */}
           <a href="https://www.figma.com/proto/ICPSJCQNJLzh6uz4p5gq5j/PayPe-project?type=design&node-id=12-8653&t=258aP7W43dVBmoND-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A1419" className="text-decoration-none"> <i className="fa fa-figma fs-3  btn-fill  btn d-flex justify-content-center align-items-center"></i></a>
            
          </div>

</div>
           
            
      
<div data-aos="fade-down"
     data-aos-duration="2500" className=" design ">
<div className="des-img bg-white m-2  rounded">
<img src={require("../../../asset/ux yolly.png")} className="object-fit-cover" alt="" />
</div>
<div className="sub-line   d-flex col-12 justify-content-around align-items-center p-2">
<a className="text-decoration-none" href="https://www.figma.com/proto/9AayxBkP6qDXJhUn644Igy/YOLLY-ITALY?type=design&node-id=19-149&t=QT9Hxy6MWfYAOxF4-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=14%3A155"><div className="btn-outline-info btn d-flex justify-content-center align-items-center">viwe</div></a>
            <a href="https://www.figma.com/proto/9AayxBkP6qDXJhUn644Igy/YOLLY-ITALY?type=design&node-id=19-149&t=QT9Hxy6MWfYAOxF4-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=14%3A155" className="text-decoration-none"> <i className="fa fa-figma fs-3  btn-fill  btn d-flex justify-content-center align-items-center"></i></a>
            
          </div>

</div>

<div data-aos="fade-up"
     data-aos-duration="2500" className=" design ">
<div className="des-img bg-white m-2  rounded">
<img src={require("../../../asset/posters.png")} className="object-fit-cover" alt="" />

</div>

<div className="sub-line   d-flex col-12 justify-content-around align-items-center p-2">
            <div className="btn-outline-info btn d-flex justify-content-center align-items-center">viwe</div>
            <i className="fa fa-figma fs-3 btn-fill  btn  d-flex justify-content-center align-items-center"></i>
            
          </div>

</div>

<div data-aos="fade-down"
     data-aos-duration="2500" className=" design ">
<div className="des-img bg-white m-2  rounded">
<img src={require("../../../asset/logos.png")} className="object-fit-cover" alt="" />

</div>

<div className="sub-line   d-flex col-12 justify-content-around align-items-center p-2">
<a className="text-decoration-none" href="https://www.figma.com/proto/9AayxBkP6qDXJhUn644Igy/YOLLY-ITALY?type=design&node-id=19-149&t=QT9Hxy6MWfYAOxF4-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=14%3A155"><div className="btn-outline-info btn d-flex justify-content-center align-items-center">viwe</div></a>
            <a href="https://www.figma.com/proto/ICPSJCQNJLzh6uz4p5gq5j/PayPe-project?type=design&node-id=12-8653&t=258aP7W43dVBmoND-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A1419" className="text-decoration-none"> <i className="fa fa-figma fs-3  btn-fill  btn d-flex justify-content-center align-items-center"></i></a>
            
          </div>

</div>

<div data-aos="fade-up"
     data-aos-duration="2500" className=" design ">
<div className="des-img bg-white m-2  rounded">
<img src={require("../../../asset/icons.png")} className="object-fit-cover" alt="" />

</div>

<div className="sub-line   d-flex col-12 justify-content-around align-items-center p-2">
            <div className="btn-outline-info btn d-flex justify-content-center align-items-center">viwe</div>
            <i className="fa fa-figma fs-3   btn-fill  btn d-flex justify-content-center align-items-center"></i>
            
          </div>

</div>

<div data-aos="fade-down"
     data-aos-duration="2500" className=" design ">
<div className="des-img bg-white m-2  rounded">
<img src={require("../../../asset/victors.png")} className="object-fit-cover" alt="" />

</div>

<div className="sub-line   d-flex col-12 justify-content-around align-items-center p-2">
<a className="text-decoration-none" href="https://www.figma.com/proto/9AayxBkP6qDXJhUn644Igy/YOLLY-ITALY?type=design&node-id=19-149&t=QT9Hxy6MWfYAOxF4-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=14%3A155"><div className="btn-outline-info btn d-flex justify-content-center align-items-center">viwe</div></a>
            <a href="https://www.figma.com/proto/ICPSJCQNJLzh6uz4p5gq5j/PayPe-project?type=design&node-id=12-8653&t=258aP7W43dVBmoND-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A1419" className="text-decoration-none"> <i className="fa fa-figma fs-3  btn-fill  btn d-flex justify-content-center align-items-center"></i></a>
            
          </div>

</div>
</div>

<div data-aos="fade-right"
     data-aos-duration="2500" className="liveproject text-dark text-center mt-4"><h4>White Label</h4></div>
<div className="white-label container  col-12">

<div data-aos="fade-up"
     data-aos-duration="2500" className="bg-success child-wl ">

  <a href=""><img src={require("../../../asset/white labele 1.png")} alt="" /></a>

</div>
<div data-aos="fade-down"
     data-aos-duration="2500" className="bg-warning child-wl">
<a href=""><img src={require("../../../asset/white labele 2.png")} alt="" /></a>
</div>
<div data-aos="fade-up"
     data-aos-duration="2500" className="bg-success child-wl">
<a href=""><img src={require("../../../asset/white labele 3.png")} alt="" /></a>

</div>
<div data-aos="fade-down"
     data-aos-duration="2500" className="bg-success child-wl">
<a href=""><img src={require("../../../asset/white labele 4.png")} alt="" /></a>

</div>
</div>
</div> 



    );
}