import React,{useState} from "react";
//imported icons====>
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import {BiSolidPhoneCall} from "react-icons/bi";
import {MdEmail} from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";

//imported images
import logo from "../../assets/logo.jpg";

const Navbar = () => {

// Let us remove the Navbar in the small width screens=>

  const [active,setActive] = useState('navBarMenu')
  const showNavBar = () =>{
    setActive('navBarMenu showNavBar')
  }

  const removeNavBar = () =>{
    setActive('navBarMenu') 
  }


  //Let us add a background color to the second navbar ==>

  const [noBg,addBg] =useState('navBarTwo')
  const addBgColor = ()=>{
    if(window.scrollY>=10){
      addBg('navBarTwo navbar_With_Bg')
    }
    else{
      addBg('navBarTwo')
    }
  }

  window.addEventListener('scroll',addBgColor)


  return (
    <div className="navBar menu flex">
      <div className="navBarOne menu flex">
      
        <div>
          <SiConsul className="icon" />
          {/* <BiSolidPhoneCall className="icon" /> 9898570923 */}
        </div>

          <h1>Dhanshree Investment</h1>
          <div>
            <li className="menu flex">
              {" "}
              {/* <BsPhoneVibrate className="icon" /> Dhanshree Investment */}
              <BiSolidPhoneCall className="icon" />&nbsp; 9898570923
           
            </li>
          <li className="flex">
            {" "}
            {/* <AiOutlineGlobal className="icon" /> Languages */}
            <MdEmail className="icon" />&nbsp; monildaru2007@gmail.com
          </li>

          </div>
        </div>

          {/* <div className="atb flex">
            <h2 style={{fontSize:"25px",color:"red"}}>Dhanshree Investment</h2>
          </div> */}


      <div className={noBg}>
        <div className="logoDiv">
          <img src={logo} className="logo" />
        </div>

        <div className={active}>
          <ul className="menu flex">
            <li onClick={removeNavBar} className="listItem">Home</li>
            <li onClick={removeNavBar} className="listItem">About</li>
            <li onClick={removeNavBar} className="listItem">Investment</li>
            <li onClick={removeNavBar} className="listItem">Mutual Funds</li>
            <li onClick={removeNavBar} className="listItem">Consultations</li>
          </ul>
          {/* <ul className="menu flex">
            <li>
              <h1>
              Dhanshree Investment
              </h1>
            </li>
          </ul> */}

          <button onClick={removeNavBar} className="btn flex btnOne">Contact</button>
        </div>

        {/* <button className="btn flex btnTwo">Support</button> */}

        {/* <h1>Dhanshree Investment</h1> */}

        <div onClick={showNavBar} className="toggleIcon">
          <CgMenuGridO className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
