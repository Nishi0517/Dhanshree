import React from 'react';

const OfficeMap = () => {
  return (
    <div className="subscribe section">
      <div
        data-aos="fade-up"
        data-aos-duration="2500"
        className="sectionContainer container"
      >
      <h1>Contact Us</h1>
      <h1>Visit our office:</h1>
        <div className='map'> 
      {/* style={{
    
    height: '400px',
    width: '800px',
    borderRadius: '10px',
    //overflow: 'hidden',
    }}> */}
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.9502553613443!2d72.79374417594354!3d21.19413498207669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04db8108ec631%3A0x18b0d30f75ce4020!2sDHANSHREE%20INVESTMENT!5e0!3m2!1sen!2sin!4v1687934211877!5m2!1sen!2sin"
        //width="450px"
         //height="400px"
        style={{ border: "10px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
       </div>
      </div>
    </div>
    
  );
};

export default OfficeMap;
