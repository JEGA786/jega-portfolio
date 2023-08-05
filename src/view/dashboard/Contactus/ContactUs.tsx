import "../Contactus/ContactUs.css";
export function ContactUs() {
  return (
    <div className="ContactUs py-4">
      <div className="heading text-center ">
        <p className=" p-0 m-0 ">Get In Tuch</p>
        <h2 className="">Contact Me</h2>
      </div>
   
          {/* <div className="col-12    d-flex flex-column justify-content-center align-items-center">
            <div className="login-form col-12 justify-content-center align-items-center">
              <div className="form col-12 d-flex flex-wrap">
                <div className="out-line  col-lg-6 col-md-6 col-12  mt-3  d-flex justify-content-center">
                  <input
                    className="col-12"
                    type="text"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="out-line col-lg-6 col-md-6 col-12 mt-3  d-flex justify-content-center">
                  <input
                    className="col-12"
                    type="Email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="out-line col-12  mt-3  d-flex justify-content-center">
                  <textarea
                    className="col-12"
                    name="massage"
                    cols={23}
                    rows={10}
                    defaultValue={""}
                    placeholder="Massage"
                    required
                  ></textarea>
                </div>
                <div className="button col-12"><input className="btn btn-info mt-3  col-12"type="submit"></input></div>
              </div>

              <div className="form col-12 d-flex flex-wrap justify-content-around">
                
                  <input
                    className="out-line  col-lg-5 col-md-5 col-12  mt-3  d-flex justify-content-center"
                    type="text"
                    placeholder="Name"
                    required
                  />
    
                  <input
                    className="  col-lg-5 col-md-5 col-12  mt-3  d-flex justify-content-center"
                    type="Email"
                    placeholder="Email"
                    required
                  />
               
                
                  <textarea
                    className="textarea col-lg-11 col-md-11 col-12ß  mt-3  d-flex justify-content-center"
                    name="massage"
                    cols={23}
                    rows={10}
                    defaultValue={""}
                    placeholder="Massage"
                    required
                  ></textarea>
                
                <input className="btn btn-info mt-3  col-11" type="submit"></input>
              </div>
            </div>
           
          </div> */}

          
            <form
              className="mt-3"
              action="mailto:jega183000@gmail.com"
              method="post"
              encType="text/plain"
            >
              <div className="main-input p-0 col-md-11 mx-auto ">
                <div className="col-sm-6 out-line" data-aos="slide-up">
                  <input className="col-12 " type="text"
                    name="name"
                    id=""
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div className="col-sm-6" data-aos="slide-up">
                  <input
                    className="col-12"
                    type="mail"
                    name="mail"
                    id=""
                    placeholder="Enter Email"
                    required
                  />
                </div>
                <div className="col-12" data-aos="slide-up">
                  <textarea
                    className="col-12"
                    name="text"
                    id=""
                    placeholder="Write Something"
                    required
                  />
                </div>
              </div>
              <div className="col-12  p-2 mailsend d-flex justify-content-center" data-aos="slide-up">
                <input
                  className="submit "
                  type="submit"
                  value="Send Message"
                ></input>
              </div>
            </form>
          </div>
       
       
    
   
  );
}
