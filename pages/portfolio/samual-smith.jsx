import Link from 'next/link'
import Navbar from "../../components/Navbar"
import PortfolioSection from "../../components/PortfolioSection"
import Layout from '../../components/Layout'
import Footer from '../../components/Footer.jsx'
import WorkSection from '../../components/WorkSection'

const SamualSmith = (props) => {
    return(
        <>
            <Navbar/>
            <div className="nav-margin-top"></div>
            <Layout>
            <div className="breadcrumbs">
                <Link href="/"><img src="/home-icon.png" alt=""/></Link>
                <Link href="/portfolio"><p>> Portfolio ></p></Link>
                <p>Samual Smith</p>
            </div>
            </Layout>
            <PortfolioSection 
                image="/sam-gif.gif"
                title=""
                titleLogo="/sam-black.png"
                content="Samual Smith wanted to stand out with something special - I designed and built this unique Landing Page paired with Hero anaimation and Shopify Admin customisable sections"
                theme="Customised Debut Theme"
                tasks={["Bespoke design and build Landing Page", "Shopify Admin editable sections", "Unique animated design and build Hero Section", "Logo re-design", "Bespoke Product Slider"]}
           />
           <WorkSection />
           <Footer />
        </>
    )
}

export default SamualSmith