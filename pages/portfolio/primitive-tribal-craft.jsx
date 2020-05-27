import Link from 'next/link'
import Navbar from "../../components/Navbar"
import PortfolioSection from "../../components/PortfolioSection"
import Layout from '../../components/Layout'
import Footer from '../../components/Footer.jsx'

const PrimitiveTrible = (props) => {
    return(
        <>
            <Navbar/>
            <div className="nav-margin-top"></div>
            <Layout>
            <div className="breadcrumbs">
                <Link href="/"><img src="/home.png" alt=""/></Link>
                <Link href="/portfolio"><p>> Portfolio ></p></Link>
                <p>Primitive Tribal Craft</p>
            </div>
            </Layout>
            <PortfolioSection 
                image="/primitive-gif.gif"
                title="Primitive Tribal Craft"
                titleLogo="/nordic-logo-port.png"
                content="Primitive Tribal Craft are a bohemian clothes retailer.  I have been working with them on various task throught the past year." 
                theme="Alpha Icon"
                tasks={["Bespoke design and build Contact Us page", "Speed Optimisation (38% improvement)", "Bespoke Announcement Bar", "Image Optimisation", "Mailchimp Intergration and setup"]}
           />
           <Footer />
        </>
    )
}

export default PrimitiveTrible