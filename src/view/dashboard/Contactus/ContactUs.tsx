import "../Contactus/ContactUs.css";
export function ContactUs() {
  return (
    <div className="ContactUs py-4">
      <div className="heading text-center ">
        <p data-aos="fade-right"
     data-aos-duration="2500"  className=" p-0 m-0 ">Get In Tuch</p>
        <h2 data-aos="zoom-in-up"
     data-aos-duration="2500" className="">Contact Me</h2>
      </div>
   
          

          
            <form
              className="mt-3"
              action="mailto:jega183000@gmail.com"
              method="post"
              encType="text/plain"
            >
              <div className="main-input p-0 col-md-11 mx-auto ">
                <div className="col-sm-6 out-line" data-aos="slide-up" 
     data-aos-duration="2500">
                  <input className="col-12 " type="text"
                    name="name"
                    id=""
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div className="col-sm-6" data-aos="slide-up"  data-aos-duration="2500">
                  <input
                    className="col-12"
                    type="mail"
                    name="mail"
                    id=""
                    placeholder="Enter Email"
                    required
                  />
                </div>
                <div className="col-12" data-aos="slide-up"  data-aos-duration="2500">
                  <textarea
                    className="col-12"
                    name="text"
                    id=""
                    placeholder="Write Something"
                    required
                  />
                </div>
              </div>
              <div className="col-12  p-2 mailsend d-flex justify-content-center" data-aos="slide-up"  data-aos-duration="3000">
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
