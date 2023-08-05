import"../Mywork/Mywork.css"
import"../Mywork/Mywork"
export function Mywork(){
    return(
      <div className="myworkall ">
<div className="myworktop  col-12    d-flex justify-content-center flex-column align-items-center">
<div className="slaider-container  ">
<p className=" p-0 m-0 ">My recent work</p>
        <h2 className="">my portfolio</h2>

        <div className="liveproject text-info "><h4>Live project</h4></div>
<div className="slaider-container p-0 m-0 mt-0">
  <input type="radio" name="slider" id="item-1" defaultChecked />
  <input type="radio" name="slider" id="item-2" />
  <input type="radio" name="slider" id="item-3" />
  <div className="cards">
    <label className="slaider-card   bg-info " htmlFor="item-1" id="song-1">
      <img src={require("../../../asset/jegahome.png")} alt="song" />
    </label>
    <label className="slaider-card bg-info " htmlFor="item-2" id="song-2">
      <img src={require("../../../asset/bgimg.png")} alt="song" />
    </label>
    <label className="slaider-card  bg-info" htmlFor="item-3" id="song-3">
      <img src={require("../../../asset/bgimg.png")} alt="song" />
    </label>
  </div>
  <div className="player ">
    <div className="upper-part">
      <div className="play-icon">
        <svg width={20} height={20} fill="#2992dc" stroke="#2992dc" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-play" viewBox="0 0 24 24">
          <defs />
          <path  />
        </svg>
      </div>
      <div className="info-area text-center fw-bold" id="test">
        <label className="song-info  mt-1" id="song-info-1">
          <div className="title ">M Pay-Off</div>
          <div className="sub-line d-flex justify-content-around align-items-center">
            
            <div className="btn-outline-info btn d-flex justify-content-center align-items-center">viwe</div>
            <i className="fa fa-github fs-3 btn-fill  btn d-flex justify-content-center align-items-center"></i>
            
          </div>
        </label>
        <label className="song-info  " id="song-info-2">
          <div className="title">Pay-GS</div>
          <div className="sub-line d-flex justify-content-around align-items-center">
            <div className="btn-outline-info btn d-flex justify-content-center align-items-center">viwe</div>
            <i className="fa fa-github fs-3 btn-fill btn-info btn d-flex justify-content-center align-items-center"></i>
            
          </div>
        </label>
        <label className="song-info   " id="song-info-3">
          <div className="title ">Paype</div>
          <div className="sub-line d-flex justify-content-around align-items-center">
            
            <div className="btn-outline-info btn d-flex justify-content-center align-items-center">viwe</div>
            <i className="fa fa-github fs-3 btn-fill btn-info btn d-flex justify-content-center align-items-center"></i>
            
          </div>
        </label>
      </div>
    </div>
 
  </div>
</div>

</div>
</div>



<div className=" liveproject text-info text-center mt-4"><h4>White Label</h4></div>
<div className="designs container  col-12">
<div className=" design ">
<div className="des-img bg-white m-2  rounded">
<img src={require("../../../asset/figma.png")} alt="" />

</div>

<div className="sub-line   d-flex col-12 justify-content-around align-items-center p-2">
            <div className="btn-outline-info btn d-flex justify-content-center align-items-center">viwe</div>
            <i className="fa fa-figma fs-3  btn-fill  btn d-flex justify-content-center align-items-center"></i>
            
          </div>

</div>
           
            
      
<div className=" design ">
<div className="des-img bg-white m-2  rounded">
<img src={require("../../../asset/figma.png")} alt="" />
</div>
<div className="sub-line   d-flex col-12 justify-content-around align-items-center p-2">
            <div className="btn-outline-info btn d-flex justify-content-center align-items-center">viwe</div>
            <i className="fa fa-figma fs-3 btn-fill  btn d-flex justify-content-center align-items-center"></i>
            
          </div>

</div>

<div className=" design ">
<div className="des-img bg-white m-2  rounded">
<img src={require("../../../asset/figma.png")} alt="" />

</div>

<div className="sub-line   d-flex col-12 justify-content-around align-items-center p-2">
            <div className="btn-outline-info btn d-flex justify-content-center align-items-center">viwe</div>
            <i className="fa fa-figma fs-3 btn-fill  btn  d-flex justify-content-center align-items-center"></i>
            
          </div>

</div>

<div className=" design ">
<div className="des-img bg-white m-2  rounded">
<img src={require("../../../asset/figma.png")} alt="" />

</div>

<div className="sub-line   d-flex col-12 justify-content-around align-items-center p-2">
            <div className="btn-outline-info btn d-flex justify-content-center align-items-center">viwe</div>
            <i className="fa fa-figma fs-3   btn-fill  btn d-flex justify-content-center align-items-center"></i>
            
          </div>

</div>
</div>

<div className="liveproject text-info text-center mt-4"><h4>White Label</h4></div>
<div className="white-label container  col-12">

<div className="bg-success child-wl "></div>
<div className="bg-warning child-wl"></div>
<div className="bg-success child-wl"></div>
<div className="bg-success child-wl"></div>
</div>
</div> 



    );
}