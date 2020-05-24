import Link from 'next/link'
import { useState, useEffect } from 'react'



const Navbar = () => {
    const [scroll, setScroll] = useState(false)

    const getPosition = () => {
        window.scrollY > 50 ? setScroll(true) : setScroll(false);
        };

    useEffect(() => {
      window.addEventListener("scroll", getPosition);
      return () => window.removeEventListener("scroll", getPosition);        
      });
    
    return (
    <div  className={scroll ? 'nav white' : 'nav'} >
        <div className='logo-container'>
            <Link href="/"><a><img src="/logo.png"/></a></Link>
        </div>
        <div className="menu-items">            
            <p><Link href="/services"><a>Services</a></Link></p>
            <p><Link href="/about"><a>About</a></Link></p>
            <p><Link href="/portfolio"><a>Portfolio</a></Link></p>
            <p className="nav-contact"><Link href="/portfolio"><a>Contact Me</a></Link></p>
            
        </div>

 
    </div>
    
)
    };

export default Navbar