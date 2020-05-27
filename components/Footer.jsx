import Layout from "./Layout"
import Link from 'next/link'

const Footer = () => {

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
                <Link href="/contact"><h2>contact</h2></Link>
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

        </>
    )
}

export default Footer