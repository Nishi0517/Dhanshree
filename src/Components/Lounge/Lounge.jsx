import React,{useEffect}  from "react";
//imported images
//  import imageGrid from '../../assets/images-Grid2.PNG'
import imageGrid from "../../assets/sip-swp.jpg";
import mf from "../../assets/mf.jpg";

//Import Aos
import Aos from 'aos'
import 'aos/dist/aos.css' 

const Lounge = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[]) 

  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">
        <div data-aos='fade-down' data-aos-duration='2500' className="imgDiv">
          <img  src={imageGrid} className="imgOne" />
          {/* <img data-aos='fade-left' data-aos-duration='2500' src={mf} className="imgTwo" /> */}
        </div>
        
        {/* <div data-aos='fade-down' data-aos-duration='2500' className="imgDiv">
          <img src={mf} className="img" />
        </div> */}

        <div className="textDiv">
          <h1 data-aos='fade-left' data-aos-duration='2500'>Business Plans</h1>

          <div className="grids grid">
            <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
              <h2 className=" gridTitle">SIP</h2>
              <p>
              Systematic Investment Plan (SIP) is a popular investment strategy in which investors regularly invest a fixed amount in mutual funds.
              {/* It allows individuals to invest in a disciplined manner and build wealth over time.
              SIPs offer benefits like rupee-cost averaging and the power of compounding, making them an attractive option for long-term wealth creation. 
              With SIPs, investors can start with small amounts and benefit from market fluctuations while reducing the impact of volatility. 
              It is a convenient and effective way to achieve financial goals through regular investing. */}
              </p>
            </div>

            <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
              <h2 className=" gridTitle">SWP</h2>
              <p>
              Systematic Withdrawal Plan (SWP) is an investment strategy that allows investors to withdraw a fixed amount from their mutual fund investments at regular intervals.
              {/* It provides a steady income stream while keeping the remaining investment intact. 
              SWP is commonly used by retirees or individuals seeking regular cash flows from their investments. 
              With SWP, investors can customize the withdrawal frequency, amount, and duration as per their financial needs. 
              It offers flexibility and convenience, enabling individuals to manage their cash flow requirements and fullfillments while staying invested in the market. */}
              </p>
            </div>

            <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
              <h2 className=" gridTitle">Mutual Funds</h2>
              <p>
              Mutual funds are investment vehicles that pool money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities. 
              {/* They are managed by professional fund managers who aim to generate returns for investors. 
              Mutual funds offer the advantages of diversification, professional management, and liquidity. 
              They provide individuals with an opportunity to participate in the financial markets even with smaller investment amounts. 
              Mutual funds are popular among both novice and experienced investors for their potential to achieve long-term financial goals. */}
              </p>
            </div>

            <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
              <h2 className=" gridTitle">Insurance service</h2>
              <p>
              Insurance is a risk management tool that provides financial protection against unexpected events or losses. 
              {/* It involves an agreement between an individual or entity and an insurance company, where the insured pays regular premiums in exchange for coverage. 
              Insurance policies can offer various types of protection, such as life insurance, health insurance, property insurance, and more. 
              Insurance helps individuals and businesses mitigate financial risks and provides peace of mind in uncertain situations. */}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Lounge;
