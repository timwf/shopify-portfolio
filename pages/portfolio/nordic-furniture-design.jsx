import Link from 'next/link'
import Navbar from "../../components/Navbar"
import PortfolioSection from "../../components/PortfolioSection"
import Layout from '../../components/Layout'
import Footer from '../../components/Footer.jsx'

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
                image="/nordic-cover.png"
                title="Nordic Furniture Design"
                titleLogo="/nordic-logo-port.png"
                content="Nordic Furniture Design wanted a sleek new collection page layout and bespoke Mega Menu. They are using the free Debut theme and wanted an upgrade. We were able to implement a custom built mega menu and collection page without upgrading saving loading times and allowing for a real custom proffesional feel."
                theme="Customised Debut Theme"
                tasks="Bespoke Product pages"
           />
           <Footer />
        </>
    )
}

export default NordicFurnitureDesign