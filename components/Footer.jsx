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
                <a href="mailto:timothy-williams-fowler@protonmail.com"><p>timothy-williams-fowler@protonmail.com</p></a>  
                <a href="mailto:timothy-williams-fowler@protonmail.com"><img src="/big-envelope.png" alt=""/></a>                 
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
                <a href="https://www.linkedin.com/in/timothy-williams-fowler-6a04a9176/"><img src="/linkedin-white.png" alt=""/></a>   
                <a href="https://github.com/timwf"><img src="/github-white.png" alt=""/> </a>
                <a href="https://codepen.io/timwf"><img src="/codepen-white.png" alt=""/></a> 
                <a href="https://www.instagram.com/tim_fowler/  "><img src="/instagram-white.png" alt=""/></a>
                             
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
}

export default Footer