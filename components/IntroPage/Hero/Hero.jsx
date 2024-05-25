import React from 'react'
import './Hero.css'
import hero_image from "../../../assets/hero_image.png";
import Calories from "../../../assets/calories.png";
import NumberCounter from 'number-counter';
const Hero = () => {
    const transition = {type:'spring', duration:3}
    const mobile = window.innerWidth<=768 ? true: false;
    return (
    <div className="hero" id='home'>

        {/* <div className="blur hero-blur"></div> */}
       <div className="right-h"> 
       {/* right class data come here */}

            {/*Hero Images */}
            <img src={hero_image} alt="" className="hero-image" />
            {/*Calories div*/}
            <div 
            className="calories">
                <img src={Calories} alt="" />
                <div>
                    <span>Calories Burned</span> 
                    <span>220 kcal</span>
                </div>
            </div>
       {/* right class data end here  */}

       </div> {/*Right Side Start */}
       <div className="left-h">
            {/* left class data come here  */}
                {/* the best ad*/} 
                <div className="blur hero-blur"></div>

        <div className="the-best-ad">
            <div>
            </div>
            <span>the best fitness club in the town</span>
        </div>

        {/* Hero Headings */}
        <div className="hero-text">
            <div>
                <span className='stroke-text'>Shape </span>
                <span>Your</span>
            </div>
            <div>
                <span>Ideal Body</span>
            </div>
            <div>
                <span>
                    In here we will help you to shape and build your ideal body and 
                    live up your life to fullest
                </span>
            </div>
        </div>

        {/*Figures */}
        <div className="figures">
            <div>
                <span>
                <NumberCounter end={140} start={100} delay='4' preFix="+"/>
                </span>
                <span>expert coaches</span>
            </div>
            <div>
                <span>
                <NumberCounter end={978} start={800} delay='4' preFix="+"/>
                </span>
                <span>members joined</span>
            </div>
            <div>
                <span>
                <NumberCounter end={50} start={0} delay='4' preFix="+"/>
                </span>
                <span>fitness programs</span>
            </div>
        </div>

        {/*hero buttons */}
        <div className="hero-buttons">
            <buttons className="btn">Get Started</buttons>
            <buttons className="btn">Learn More</buttons>
        </div>
            {/* left class data end here  */}
       </div> 
    </div>
  );
}

export default Hero;
