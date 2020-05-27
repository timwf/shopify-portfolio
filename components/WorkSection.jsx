import Link from 'next/link'
import {useEffect, useState} from 'react'
import { useSpring, animated } from "react-spring";



const WorkSection = () => {
    const [inview, setInview] = useState(false)
    const animatedStyle = useSpring({
        transform:  inview ? 'scale(1.0)' : 'scale(0.8)',
        delay: 0
      });


    useEffect(() => {
        var observer = new IntersectionObserver(function(entries) {
            console.log('working');            
            if(entries[0].isIntersecting === true){
              setInview(true)  
            }             
        }, { threshold: [0] });
        observer.observe(document.querySelector(".work-section-indi"));        
        return () => {            
        }
    }, [])


    return(
        <div className="work-section-container">
        <Link href="/portfolio/nordic-furniture-design">
            <animated.div style={inview ? animatedStyle: null} className="work-section-indi">
                <div className="work-section-indi-overlay">
                    <img className="wok-cover-img" style={{width: 'auto', height: '50px'}} src="/nordic-logo.png" alt=""/>
                </div>
            <img src="/nordic-cover.png" alt=""/>        
        </animated.div>
        </Link>
        <Link href="/portfolio/primitive-tribal-craft">
        <animated.div style={inview ? animatedStyle: null} className="work-section-indi">
            <div className="work-section-indi-overlay">
            <img className="wok-cover-img" style={{width: 'auto', height: '30px'}} src="/primitive-logo.png" alt=""/>
            </div>
            <img src="/primitive-cover.png" alt=""/>
            </animated.div> 
        </Link>
        <Link href="/portfolio/samual-smith">
        <animated.div style={inview ? animatedStyle: null} className="work-section-indi">
            <div className="work-section-indi-overlay">
            <img className="wok-cover-img" style={{width: 'auto', height: '25px'}} src="/sam-smith-logo.png" alt=""/>
            </div>
            <img src="/samsmith-cover.png" alt=""/>
            </animated.div> 
        </Link>


        <Link href="/portfolio/furbabies">
        <animated.div style={inview ? animatedStyle: null} className="work-section-indi">
            <div className="work-section-indi-overlay">
            <img className="wok-cover-img" style={{width: 'auto', height: '40px'}} src="/furbabies-logo.png" alt=""/>
            </div>
            <img src="/furbabies-cover.png" alt=""/>
            </animated.div> 
        </Link>
      
        </div>
        
    )

}

export default WorkSection