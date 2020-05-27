import AnimatedHeroContent from "./AnimatedHeroContent";
import { useSpring, animated } from "react-spring";
import Link from 'next/link'




const HeroSection = () => {
    // const props = useSpring({ from: {color: 'green'}, to: { color: 'red'}, delay: 100})
    const animatedStyle = useSpring({
        from: {opacity: 0}, 
        to: {opacity: 1}, 
        delay: 700
      });
      const animatedStyleTwo = useSpring({
        from: {opacity: 0}, 
        to: {opacity: 1}, 
        delay: 1000
      });

      const photoSlideIn = useSpring({
        from: {marginTop: '-500px'}, 
        to: {marginTop: '-50px'}, 
        });
    
    return(
    <div className="hero-wrapper">
        <div className="response-hero">
        <div className="animated-hero-container">
            <AnimatedHeroContent />
            <div className="hero-sub-header-container">
            <div className="sub-header">
                <animated.img style={animatedStyle}  src="/shopify-logo.png" alt=""/>
                <animated.h3 style={animatedStyle} className="hero-sub"><span className="shopify-text">Shopify </span> | Partner | Developer | Designer</animated.h3>
            </div>

            <animated.p style={animatedStyleTwo} className="tim-blurb"><p className="blurb-inner">Hi, I'm Tim - a Bangkok based Shopify devoloper and designer. 
            I have expierience in theme development including custom design and app development. Contact me now for a free consultation!
          
                   </p>    
            </animated.p>
            </div>
        </div>
        <div className="hero-image-container">
        <animated.img className="me-image"style={photoSlideIn} src="/hero-photo.png"/>
        </div>

        </div>
        <div className="hero-social">
        <a href="https://github.com/timwf"><img src="/github-grey.png" alt=""/></a>
        <a href="https://www.linkedin.com/in/timothy-williams-fowler-6a04a9176/"><img src="/linkedin-grey.png" alt=""/></a>
        <img src="/twitter-grey.png" alt=""/>
        <a href="https://codepen.io/timwf"><img src="/codepen-grey.png" alt=""/></a> 

        </div>

        
    </div>

)};

export default HeroSection