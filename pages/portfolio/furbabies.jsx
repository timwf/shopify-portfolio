import Link from 'next/link'
import Navbar from "../../components/Navbar"
import PortfolioSection from "../../components/PortfolioSection"
import Layout from '../../components/Layout'
import Footer from '../../components/Footer.jsx'
import WorkSection from '../../components/WorkSection'



const Furbabies = (props) => {
    return(
        <>
            <Navbar/>
            <div className="nav-margin-top"></div>
            <Layout>
            <div className="breadcrumbs">
                <Link href="/"><img src="/home-icon.png" alt=""/></Link>
                <Link href="/portfolio"><p>> Portfolio ></p></Link>
                <p>Furbabies</p>
            </div>
            </Layout>
            <PortfolioSection 
                image="/furbabies-gif.gif"
                title=""
                titleLogo="/furbabies-black.png"
                content="Kates Furbabies are a dog walking service. I designed and built this minimal modern web app from scrath"
                theme="N/A"
                tasks={["Bespoke UX/UI full design", "Mobile Responsive design", "PHP Contact Page", "SEO optimised", "Social Media Intergration"]}
           />
           <WorkSection />
           <Footer />
        </>
    )
}

export default Furbabies