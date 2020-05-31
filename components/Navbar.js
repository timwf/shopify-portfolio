import Link from 'next/link'
import { useState, useEffect } from 'react'



const Navbar = () => {
    const [scroll, setScroll] = useState(false)
    const [width, setWidth] = useState()
    const [mobilopen, setMobilopen] = useState(false)
    const [contactOpen, setContactOpen] = useState(false)
    
    
 
    const getPosition = () => {
        window.scrollY > 50 ? setScroll(true) : setScroll(false);
        };

    const getWidth = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
      setWidth(window.innerWidth)       
      window.addEventListener("scroll", getPosition);
      return () => window.removeEventListener("scroll", getPosition);        
    });
    
    useEffect(() => {
        window.addEventListener("resize", getWidth);
        return () => window.removeEventListener("resize", getWidth);        
    });

    if (width > 1000) {
        return (
            <>
            <div  className={scroll ? 'nav white' : 'nav'} >
            <div className='logo-container'>
                <Link href="/"><a><img src="/logo.png"/></a></Link>
            </div>
            <div className="menu-items">            
                <Link href="/">
                    <div className="nav-item-container">
                        <img style={{}} src="/home-logo.png"></img>
                        <p>home</p>
                    </div>
                </Link>
                <Link href="/services">
                    <div className="nav-item-container">
                        <img style={{}} src="/services-logo.png"></img>
                        <p>services</p>
                    </div>
                </Link>
    
                <Link href="/portfolio">
                    <div className="nav-item-container">
                        <img style={{}} src="/portfolio-logo.png"></img>
                        <p>portfolio</p>
                    </div>
                </Link>
        
                <p onClick={() => setContactOpen(true)} className="nav-contact"><a>Contact Me</a></p>            
            </div> 
        </div> 
        <div onClick={() => setContactOpen(false)} 
    className={contactOpen ? "active-contact-wrapper pop-up-contact-wrapper" : "pop-up-contact-wrapper"}
    >
        <div className={contactOpen ? "active-contact-container pop-up-contact-container" : "pop-up-contact-container"}>
        <div className="mob-contact-inner">
            <h1 className="mob-contact-contact">CONTACT</h1>
            <h1 className="mob-contact-me">ME</h1>
            <h1 className="mob-contact-now">NOW</h1>
            <div className="mob-contact-icons">
            <a href="mailto:timothy-williams-fowler@protonmail.com"><img src="/contact-mail.png"/></a>
            <a href="https://wa.me/447342087132"><img src="/contact-whatsapp.png"/></a>               
            <a href="http://m.me/tim.williamsfowler" target="_blank"><img src="/contact-messenger.png"/></a>
            <a href="skype:live.timwfowler0?chat"><img src="/contact-skype.png"/></a>
            <a href="https://www.linkedin.com/in/timothy-williams-fowler-6a04a9176/" ><img src="/contact-linkedin.png"/></a>
            <a href="https://github.com/timwf"><img src="/contact-github.png"/></a>
            <a href="tel:+66-806-468-608"><img src="/contact-phone.png"/></a>
            <a href="https://twitter.com/TimWilliamsFow1"><img src="/contact-twitter.png"/></a>
            </div>
        </div>
        </div>
    </div>

        </>
        )
    } else return ( 
    <>
    <div  className={scroll ? 'mobile-nav white' : 'mobile-nav'} >
        <div className="mobile-menu-toggle">
            <img src="/hamburger.png" onClick={() => setMobilopen(true)}></img>
        </div>

        <div  className={mobilopen ? 'show-mobile-menu' : 'hide-mobile-menu'} >
            <div className="mobile-menu-container">
                <div className="close-mobile-container" onClick={() => setMobilopen(false)}>
                    
                    <div className="mobile-items-container">
                    <img className="close-icon-mobile-menu" src="/close-icon.png"></img>
                        <div>
                    <Link href="/"><h1>home</h1></Link>
                    <Link href="/services"><h1>services</h1></Link>
                    <Link href="/portfolio"><h1>portfolio</h1></Link>
                    <div onClick={() => setContactOpen(true)} ><h1>contact</h1></div>
                        </div>

                    </div>
                </div>
            </div>        
        </div>
        <div className="mobile-menu-logo">
            <Link href="/"><a><img src="/logo.png"/></a></Link>
        </div>
    </div> 
   
    <div onClick={() => setContactOpen(false)} 
    className={contactOpen ? "active-contact-wrapper pop-up-contact-wrapper" : "pop-up-contact-wrapper"}
    >
        <div className={contactOpen ? "active-contact-container pop-up-contact-container" : "pop-up-contact-container"}>
        <div className="mob-contact-inner">
            <h1 className="mob-contact-contact">CONTACT</h1>
            <h1 className="mob-contact-me">ME</h1>
            <h1 className="mob-contact-now">NOW</h1>
            <div className="mob-contact-icons">
                <img src="/contact-mail.png"/>
                <img src="/contact-whatsapp.png"/>
                <img src="/contact-messenger.png"/>
                <img src="/contact-skype.png"/>
                <a href="https://www.linkedin.com/in/timothy-williams-fowler-6a04a9176/" ><img src="/contact-linkedin.png"/></a>
                <img src="/contact-github.png"/>
                <img src="/contact-phone.png"/>
                <img src="/contact-twitter.png"/>

            </div>
        </div>
        </div>
    </div>
  
    </>
     ) };

export default Navbar