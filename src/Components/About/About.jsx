import React, { useState,useEffect, useRef } from "react";

//import react icons
import { BsFillCalendar2DayFill } from "react-icons/bs";
import { RxCalendar } from "react-icons/rx"; 
import { MdDriveFileRenameOutline,MdMarkEmailUnread,MdTopic } from "react-icons/md"; 

import Aos from "aos";
import "aos/dist/aos.css";
//import email
import emailjs from "@emailjs/browser";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
 import Swal from 'sweetalert2';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const form = useRef(null);
  const datePickerRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(null);
  
  const sendEmail = (e) => {
    //alert('click')
    e.preventDefault();
    emailjs
      .sendForm(
        "service_icjhhxh",
        "template_mo5chv8",
        form.current,
        "qe4BiL_B6ZIg1edHk"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire(
            'Your email has been sent successfully 👍!!!',
            'Thank you for contacting us. We will contact back shortly!!',
            'success'
          )
          form.current.reset(); // Reset the form fields
          setSelectedDate(null);

        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  
 
  return (
    <>
    <div className="search container section">
      <div
        data-aos="fade-up"
        data-aos-duration="2500"
        className="sectionContainer grid"
      >
        <div className="btns flex">
          <div className="singleBtn">
            <h2>SIP</h2>
          </div>

          <div className="singleBtn">
            <h2>Mutual Funds</h2>
          </div>

          <div className="singleBtn">
            <h2>Insurance</h2>
          </div>
        </div>
        <div
          className="mainText"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <h2 data-aos="fade-down" data-aos-duration="2500">
            Meet Your Financial Consultant &nbsp;
          </h2>
          <h2 data-aos="fade-up" data-aos-duration="2500">
            {" "}
            & Book Your Appinotment With : &nbsp;
            <b style={{ color: "red" }}>Monil Daru</b>
          </h2>
        </div>
        <form ref={form} onSubmit={sendEmail}>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="searchInputs flex"
        >
          
          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <MdDriveFileRenameOutline className="icon" />
            </div>
           
            <div className="texts">
              <h4>Name</h4>
              <input
                type="text"
                className="test"
                name="user_name"
                placeholder="Enter your name"
              />
            </div>

           
            
          </div>
          
          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <MdMarkEmailUnread className="icon" />
            </div>
           
            <div className="texts">
              <h4>Your Email</h4>
              <input
                type="text"
                className="test"
                name="user_email"
                placeholder="Enter your email"
              />
            </div>

          </div>

          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <MdTopic className="icon" />
            </div>

            <div className="texts">
              <h4>Topic For Appointment</h4>
              <input
                type="text"
                className="test"
                name='mymessage'
                placeholder="Topic For Appointment"
              />
            </div>
          </div>

         {/* Single Input */}
         <div className="singleInput flex">
                <div className="iconDiv">
                  <BsFillCalendar2DayFill className="icon" />
                </div>
                <div className="texts">
                  <h4>Choose Date and Time</h4>
                  <DatePicker
                  ref={datePickerRef}
                    selected={selectedDate}
                    name='user_date'
                    onChange={handleDateChange}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    placeholderText="Add Date and Time"
                  />
                </div>
              </div>
          
          <button className="btn bthBlock flex">Book Appointment</button>
        </div>
        </form>
      </div>
    </div>

</>
  );
};

export default About;
