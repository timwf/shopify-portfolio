import Link from 'next/link'
import Navbar from "../../components/Navbar"
import PortfolioSection from "../../components/PortfolioSection"
import Layout from '../../components/Layout'
import Footer from '../../components/Footer.jsx'
import WorkSection from '../../components/WorkSection'

const NordicFurnitureDesign = (props) => {
    return(
        <>
            <Navbar/>
            <div className="nav-margin-top"></div>
            <Layout>
            <div className="breadcrumbs">
                <Link href="/"><img src="/home-icon.png" alt=""/></Link>
                <Link href="/portfolio"><p>> Portfolio ></p></Link>
                <p>Nordic Furniture Design</p>
            </div>
            </Layout>
            <PortfolioSection 
                image="/nordic-gif.gif"
                title="Nordic Furniture Design"
                titleLogo="/nordic-black.png"
                content="Nordic Furniture Design wanted a sleek new collection page layout and bespoke Mega Menu. They are using the free Debut theme and wanted an upgrade. We were able to implement a custom built mega menu and collection pages without upgrading allowing for a real custom professional feel. "
                theme="Customised Debut Theme"
                tasks={[,"Bespoke design and build Collection Pages", "Bespoke design and build Mega Menu", "Bespoke design and build Mobile Navigation", "Logo design", "Bespoke design and build Banner", "Image Optimisation", "Mailchimp Intergration and setup"]}
           />
           <WorkSection />
           <Footer />
        </>
    )
}

export default NordicFurnitureDesign