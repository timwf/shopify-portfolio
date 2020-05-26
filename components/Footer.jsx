import Layout from "./Layout"

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
                <h2>home</h2>
                <h2>portfolio</h2>                   
                <h2>services</h2>
                <h2>blog</h2>
                <h2>contact</h2>
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