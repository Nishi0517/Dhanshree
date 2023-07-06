import React, { useEffect, useState } from "react";

//imported icons
import { BsPersonFillCheck, BsPinMap } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";

// import { BsFillPersonCheckFill } from "react- icons/bs";
//imported images
import gridImage from "../../assets/Images-Grid.png";
//Import Aos
import Aos from "aos";
import "aos/dist/aos.css";

//import countup for counting dynamically
import CountUp from "react-countup";
//import for count when scrool is trigger
import ScrollTrigger from "react-scroll-trigger";

const Support = () => {
  const [counterOn, setCounterOn] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleEnterViewport = () => {
    setCounterOn(true);
  };

  const handleExitViewport = () => {
    setCounterOn(false);
  };

  const formatValue = (value) => {
    return `${value}+`;
  };

  return (
    <div className="support container section">
      <div className="sectionContainer">
        <div className="tittlesDiv">
          <h1>About Us</h1>
          <br />
         
         
        </div>
        <div>
        <h2 data-aos="fade-down" data-aos-duration="2500">
            Plan your port folio with Us
          </h2>
        </div>

        <div className="infoDiv grid">
          <div className="textDiv grid">
            <div
              data-aos="fade-down"
              data-aos-duration="4500"
              className="singleInfo"
            >
              <span className="number colorTwo">01</span>
              <h4>
                YEARS OF EXPERIENCE &nbsp;
                <AiOutlineCalendar className="icon" />
              </h4>
              <ScrollTrigger
                onEnter={handleEnterViewport}
                onExit={handleExitViewport}
              >
                <p>
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={18}
                      duration={10}
                      formattingFn={formatValue}
                    />
                  )}
                </p>
              </ScrollTrigger>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="4500"
              className="singleInfo"
            >
              <span className="number">03</span>
              <h4>
              COUNTRY &nbsp;
              <BsPinMap className="icon" />
              </h4>
              <ScrollTrigger
                onEnter={handleEnterViewport}
                onExit={handleExitViewport}
              >
                <p>
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={5}
                      duration={10}
                      formattingFn={formatValue}
                    />
                  )}
                </p>
              </ScrollTrigger>
            </div>
            

          </div>
          <div className="textDiv grid gridTwo">
           
            <div
              data-aos="fade-down"
              data-aos-duration="2500"
              className="singleInfo"
            >
              <span className="number">02</span>

              <h4>
                TRUSTED & HAPPY CLIENTS &nbsp;
                <BsPersonFillCheck className="icon" />
              </h4>

              {/* <BsFillPersonCheckFill className='icon/> */}
              <ScrollTrigger
                onEnter={handleEnterViewport}
                onExit={handleExitViewport}
              >
                <p>
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={1000}
                      duration={2}
                      formattingFn={formatValue}
                    />
                  )}
                </p>
              </ScrollTrigger>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="2500"
              className="singleInfo"
            >
              <span className="number colorTwo">04</span>

              <h4>
                  STATES &nbsp;
                  <BiMap className="icon" />
                </h4>
              {/* <BsFillPersonCheckFill className='icon/> */}
              <ScrollTrigger
                onEnter={handleEnterViewport}
                onExit={handleExitViewport}
              >
                <p>
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={8}
                      duration={5}
                      formattingFn={formatValue}
                    />
                  )}
                </p>
              </ScrollTrigger>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
