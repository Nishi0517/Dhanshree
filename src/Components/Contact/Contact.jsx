import React, { useEffect,useState } from "react";
import Swal from "sweetalert2";
//Import Aos
import Aos from "aos";
import "aos/dist/aos.css";
import OfficeMap from './OfficeMap'; 

const Contact = () => {
  

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
  
    <div>
      
      <OfficeMap />
    </div>
  
  );
};

export default Contact;
