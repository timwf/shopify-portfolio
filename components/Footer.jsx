import Layout from "./Layout"
import Link from 'next/link'
import { useState, useEffect } from 'react'

const Footer = () => {
    const [contactOpen, setContactOpen] = useState(false)

    return(
        <>
        <div className="footer-wrapper">
        <Layout>
            <div className="footer-container">
                <div className="footer-first footer-section"> 
                <p>info@timothy-willams-fowler.com</p>  
                <img src="/big-envelope.png" alt=""/>                 
                </div>
                <div className="footer-second footer-section"> 
                <Link href="/"><h2>home</h2></Link>
                <Link href="/portfolio"><h2>portfolio</h2></Link>                
                <Link href="/services"><h2>services</h2></Link>
                <div onClick={() => setContactOpen(true)} ><h2>contact</h2></div>
                </div>
                <div className="footer-third footer-section">
                <p>terms and conditions</p>   
                <div className="footer-social">
                <img src="/linkedin-white.png" alt=""/>   
                <img src="/github-white.png" alt=""/> 
                <img src="/codepen-white.png" alt=""/>   
                <img src="/instagram-white.png" alt=""/>                    
                </div>
                </div>

            </div>
        </Layout>
        </div>
        <div onClick={() => setContactOpen(false)} 
    className={contactOpen ? "active-contact-wrapper-footer pop-up-contact-wrapper-footer" : "pop-up-contact-wrapper-footer"}
    >
        <div className={contactOpen ? "active-contact-container-footer pop-up-contact-container-footer" 
        : "pop-up-contact-container-footer"}>
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
    )
}

export default Footer