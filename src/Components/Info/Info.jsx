import React ,{useEffect} from 'react'


//imported icons ==>

// import { Rxcalendar } from 'react-icons/rx'
import { RxCalendar } from "react-icons/rx";
import { SiFuturelearn } from "react-icons/si";
import { BsBookmarkCheck, BsShieldCheck } from "react-icons/bs";
//imported icons 
import { PiMonitorFill } from "react-icons/pi";
 //Import Aos
import Aos from 'aos'
import 'aos/dist/aos.css'

const Info = () => {

   //UseEffect to set animation duration-

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])


  return (
    <div className='info section'>
      <div className="infoContainer container">   
          <div className="titleDiv flex" >
              <h1 data-aos='fade-right' data-aos-duration='2500'>Invest Your Money With Us & Fullfill Your Dreams By Perfect Goal Planning</h1>
                {/* <button data-aos='fade-left' data-aos-duration='2500' className='btn'>
                    View All
                </button> */}
            </div>
        
            <div className="cardsDiv grid">
                <div data-aos='fade-up' data-aos-duration='2500' className='singleCard grid'>
                  
                  <div className='iconDiv flex'>
                      {/* <PiMonitorFill className='icon'/> */}
                      <RxCalendar className='icon' />
                      {/* <SiFuturelearn className='icon' /> */}
                      {/* <SiFuturelearn className='icon/> */}
                  </div>
                  <span className='cardTitle'>Future Plan</span>
                  <p>Our future plans for expansion involve strategic initiatives aimed at driving sustainable growth, expanding market presence.</p>
                </div>

                <div data-aos='fade-up' data-aos-duration='3500' className='singleCard grid'>
                  <div className='iconDiv flex colorOne'>
                      <BsShieldCheck className='icon' />
                  </div>

                  <span className='cardTitle'>Smart Checklist</span>
                  <p>Ahaa!! You have save your money for some expanses!</p>
                </div>

                <div data-aos='fade-up' data-aos-duration='4500' className='singleCard grid'>
                  <div className='iconDiv flex colorTwo'>
                      <BsBookmarkCheck className='icon' />
                  </div>

                  <span className='cardTitle'>Save more</span>
                  <p>Still you need to money for some more expanses !</p>
                  <p>Let Invest Money💲</p>
                </div>

            </div>
          </div>
      </div>
  )
}

export default Info
