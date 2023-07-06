import React,{useEffect} from 'react';

// Import assets
import video from '../../assets/video.mp4';
import owner from '../../assets/owner.jpeg';


//Import Aos
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  //UseEffect to set animation duration-

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    
    <div className='home flex container'>
      
      {/* <div className='mainText flex'>
        <h1 data-aos='fade-left' data-aos-duration='2000'>DHANSHREE INVESTMENT</h1>
        <h2 data-aos='fade-up' data-aos-duration='2500'> On Trust. Create Ever-lasting Memories With Us</h2>
        <img src={owner} className='img' />
      </div> */}
        {/* <h1 data-aos='fade-left' data-aos-duration='2000'>DHANSHREE INVESTMENT</h1> */}
      <div className="titleDiv flex">
        <h1 data-aos='fade-up' data-aos-duration='2500'>Built On Trust. Create Ever-lasting Memories With Us &nbsp; &nbsp;</h1>

              {/* <img data-aos='fade-down' data-aos-duration='5500' src={owner} className='img' /> */}
      </div>
      <div data-aos='fade-down' data-aos-duration='2500' className="homeImages flex">
      
        <div className="videoDiv">
          <video src={video} autoPlay muted loop className='video'></video>

        </div>
        {/* <img src={aeroplane} className='plane' /> */}
      </div>
    </div>
  );
}

export default Home;
