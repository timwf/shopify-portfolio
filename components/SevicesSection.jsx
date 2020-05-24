import {useEffect, useState} from 'react'

import ServicesCard from "./ServiceCard"
import { useSpring, animated } from "react-spring";


const ServicesSection = () => {
    const [inview, setInview] = useState(false)
    console.log(inview);
    

    const animatedStyle = useSpring({
        transform:  inview ? 'translate(0px, 0px)' : 'translate(0px, 100px)',
        delay: 0
      });

    useEffect(() => {
        var observer = new IntersectionObserver(function(entries) {
            console.log('working');            
            if(entries[0].isIntersecting === true){
                console.log(inview);         
                setInview(true)  
            }             
        }, { threshold: [0] });
        observer.observe(document.querySelector(".service-section-container"));        
        return () => {            
        }
    }, [])

    

    return(
        <animated.div style={inview ? animatedStyle: null} className="service-section-container">
            <ServicesCard 
                image={"/theme-changes-services.png"} 
                header="Custom Themes and Changes"
                content="Need a new customizable section? Not happy with your navigation.  Want to stand out and create a whole new design? "
                />
            <ServicesCard 
                image={"/starter-shop-service.png"}
                header="Complete Starter Shops"
                content="Get selling within a week! A complete starter shop can cost as little as $800 and will include everything you need to start selling."
                />
            <ServicesCard 
                image={"/seo-op-service.png"}
                header="SEO Optimisation"
                content="SEO is vital for getting clients to tour store.  I use the latest tech and bblsad asvjn adf jnf jn dfjnda jnada."
            />
        </animated.div>
    )

}

export default ServicesSection