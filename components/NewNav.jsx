import Link from 'next/link'
import { useState, useEffect } from 'react'
import Layout from './Layout';



const NewNav = () => {
    const [scroll, setScroll] = useState(false)

    const getPosition = () => {
        window.scrollY > 50 ? setScroll(true) : setScroll(false);
        };

    useEffect(() => {
      window.addEventListener("scroll", getPosition);
      return () => window.removeEventListener("scroll", getPosition);        
      });

    
    return (
    <div  className={scroll ? 'nav white' : 'nav'}>
        <div className="new-nav-right">
        <div className='new-nav-logo-show'>            
        <Link href="/"><a><img style={{height: "50px"}}src="/logo.png"/></a></Link>
            {/* <p><Link href="/services"><a>Services</a></Link></p>
            <p><Link href="/about"><a>About</a></Link></p>
            <p><Link href="/portfolio"><a>Portfolio</a></Link></p>
        <p className="nav-contact"><Link href="/portfolio"><a>Contact Me</a></Link></p> */}            
        </div>

        </div>

        <div className='new-nav-toggle'>
            <img src="/hamburger.png" alt=""/>
        </div>

    </div>
    
)
    };

export default NewNav