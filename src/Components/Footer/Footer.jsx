import React, { useEffect } from "react";

//imported icons

import { TiSocialFacebook } from "react-icons/ti";
import { FiInstagram } from "react-icons/fi";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";

import { FaPinterestP } from "react-icons/fa";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="footer">
      <div className="sectionContainer grid">
      <div
          data-aos="fade-up"
          data-aos-duration="2500"
          className="footerLinks"
        >
          <div className="copyRightDiv">
            <h1>Dhanshree Investment</h1>
            <hr />
            
            <h3>
              15-16 Omkar Society,  
              <br />B/h Bhulka bhavan school,
              <br /> Nr. Sai nagar
              society,
              <br /> Adajan, Surat-395009
            </h3>
            
            <hr />
            <h3>
              Registered GST NO- <b>875456541</b>
            </h3>
            
            
            <h3>
              Contact No : <b>9898570923</b>
            </h3>
            <h3>
              Email : <b>monildaru2007@gmail.com</b>
            </h3>
            
            <small>
              Disclaimer | Privacy Policy | Terms of use | Contact us | Site Map
            </small>
            <div className="socialIcon flex">
            <div
              data-aos="fade-up"
              data-aos-duration="2500"
              className="gridMap"
            ></div>
            <a
              href="https://www.facebook.com/profile.php?id=100064076133879&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TiSocialFacebook className="icon" />
            </a>
            <a
              href="https://instagram.com/darumonil?igshid=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram className="icon" />
            </a>
            <a
              href="https://youtube.com/@monil112"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillYoutube className="icon" />
            </a>
            <a
              href="https://youtube.com/@monil112"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillYoutube className="icon" />
            </a>

          </div>
            Copyright © 2023 Dhanshree Investment All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
