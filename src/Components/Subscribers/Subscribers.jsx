import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AiFillYoutube } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
//Import Aos
import Aos from "aos";
import "aos/dist/aos.css";

const Subscribers = () => {
  const [useremail, setuseremail] = useState("");

  const clickSubscription = (e) => {
    if (!useremail || !validateEmail(useremail)) {
      alert("blank");
      Swal.fire({
        icon: "error",
        title: "Please Enter Valid Email First!!",
        text: "Thank you for contacting us.",
        confirmButtonText: "Custom Button",
        customClass: {
          confirmButton: "swal-confirm-button",
        },
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Your email subscription has been started successfully 👍!!!",
        html: "Now you will get all updates of <b>Dhanshree Investment Channel!💲</b>",
        showCancelButton: false,
        confirmButtonText: "Subscribe From Youtube",
        customClass: {
          confirmButton: "swal-confirm-button",
        },
        onRender: () => {
          const confirmButton = Swal.getPopup().querySelector(
            ".swal-confirm-button"
          );
          confirmButton.innerHTML = "Subscribe from YouTube";
          const icon = document.createElement("span");
          icon.classList.add("icon");
          ReactDOM.render(<AiFillYoutube />, icon);
          confirmButton.prepend(icon);
        },
      }).then((result) => {
        if (result.isConfirmed) {
          window.open("https://youtube.com/@monil112", "_blank");
        }
      });
      setuseremail("");
    }
  };
  const validateEmail = (email) => {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return regex.test(email);
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="subscribe section">
        <div
          data-aos="fade-up"
          data-aos-duration="2500"
          className="sectionContainer container"
        >
          <h1>Subscribe News letters & get Latest News</h1>

          <div className="inputDiv flex">
            <input
              type="text"
              name="useremail"
              value={useremail}
              placeholder="Enter Your Email Address"
              onChange={(e) => setuseremail(e.target.value)} // Update the state with the input value
            />
            <button className="btn" onClick={clickSubscription}>
              Subscribe
            </button>
          </div>

          <h1>Get in touch with us</h1>

          <div className="map" data-aos="fade-left" data-aos-duration="5500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.9502553613443!2d72.79374417594354!3d21.19413498207669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04db8108ec631%3A0x18b0d30f75ce4020!2sDHANSHREE%20INVESTMENT!5e0!3m2!1sen!2sin!4v1687934211877!5m2!1sen!2sin"
              //width="450px"
              //height="400px"
              //style={{ borderStyle: "02px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* <OfficeMap /> */}
        </div>
      </div>
    </>
  );
};

export default Subscribers;
