import Link from 'next/link'
import { useState, useEffect } from 'react'



const Navbar = () => {
    const [scroll, setScroll] = useState(false)
    const [width, setWidth] = useState()
    const [mobilopen, setMobilopen] = useState(false)
    console.log(width);
    
 
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
                <Link href="/blog">
                    <div className="nav-item-container" style={{paddingRight: "35px"}}>
                        <img style={{}} src="/blog-logo.png"></img>
                        <p>blog</p>
                    </div>
                </Link>            
                <p className="nav-contact"><Link href="/portfolio"><a>Contact Me</a></Link></p>            
            </div> 
        </div> 
        )
    } else return ( 
        
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
                    <Link href="/contact"><h1>contact</h1></Link>
                        </div>

                    </div>
                </div>
            </div>        
        </div>
        <div className="mobile-menu-logo">
            <Link href="/"><a><img src="/logo.png"/></a></Link>
        </div>
    </div> 
     ) };

export default Navbar