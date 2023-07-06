import React,{useEffect} from "react";
//imported images
import paris from "../../assets/paris.jpg";
import dubai from "../../assets/dubai.jpg";
import newyork from "../../assets/newyork.jpg";
import Singapore from "../../assets/Singapore.jpg";
import SIP from "../../assets/1.png";
import MF from "../../assets/mutualfunds.jpeg";
import bonds from "../../assets/Government-bonds.jpg";
import Insurance from "../../assets/Insurance.jpg";
import financialplanning from "../../assets/financialplanning.jpg";

//imported Travelers images
import traveler1 from "../../assets/user(1).jpg";
import traveler2 from "../../assets/user(2).jpg";
import traveler3 from "../../assets/user(3).jpg";
import traveler4 from "../../assets/user(4).jpg";

//Import Aos
import Aos from 'aos'
import 'aos/dist/aos.css'


//we are going to use high order array method called Map to display all the data====>>

const travelers = [
  {
    id: 1,
    destinationImage: SIP,
    travelerImage: traveler1,
    travelerName: "IsraTech",
    socialLink: "@israteh18",
  },
  {
    id: 2,
    destinationImage: MF,
    travelerImage: traveler2,
    travelerName: "Shahid",
    socialLink: "@Shahid18",
  },
  // {
  //   id: 3,
  //   destinationImage: bonds,
  //   travelerImage: traveler3,
  //   travelerName: "Kartik",
  //   socialLink: "@Kartik9",
  // },
  {
    id: 4,
    destinationImage: Insurance,
    travelerImage: traveler4,
    travelerName: "Vicky",
    socialLink: "@Vicky01",
  },
  {
    id: 5,
    destinationImage: financialplanning,
    travelerImage: traveler4,
    travelerName: "Vicky",
    socialLink: "@Vicky01",
  }
];

const Travelers = () => {

useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        {/* <h1 data-aos='fade-down' data-aos-duration='2500'>Our Horizon</h1> */}
        <h1 data-aos='fade-down' data-aos-duration='2500'>Financial Services</h1>
        <br />
        <h2 data-aos='fade-up' data-aos-duration='2500'>
        MUTUAL FUNDS | LIFE & GENERAL INSURANCE | GOVT. BOND
        </h2>
        <h2 data-aos='fade-up' data-aos-duration='2500'>
 PLANNING | ADVISORY 
        </h2>
        {/* <h2 data-aos='fade-up' data-aos-duration='2500'>
        MUTUAL FUNDS | LIFE & GENERAL INSURANCE | GOVT. BOND | CO. FD | PLANNING | ADVISORY | DIRECT EQUITY
        </h2> */}
        <h2 data-aos='fade-up' data-aos-duration='2500'>
         CO. FD | DIRECT EQUITY
        </h2>
        <div className="travelersContainer grid">
          {/* Single passenger card */}
          {/* <div className="singleTraveler">
                  <img src={paris} className='destinationImage' />

                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img src={traveler1} alt="" className="travelerImage" />
                    </div>
                    <div className="travelerName">
                        <span>IsraTech</span>
                        <p>@israteh18</p>
                    </div>
                  </div>

              </div> */}

          {travelers.map(
            ({
              id,
              destinationImage,
              travelerImage,
              travelerName,
              socialLink,
            }) => {
              return (
                <div data-aos='fade-up' data-aos-duration='2500' key={id} className="singleTraveler">
                  <img src={destinationImage} className="destinationImage" />

                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img
                        src={travelerImage}
                        alt=""
                        className="travelerImage"
                      />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Travelers;
