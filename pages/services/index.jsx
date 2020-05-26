import Link from 'next/link'
import Navbar from "../../components/Navbar"
import WorkSection from "../../components/WorkSection"
import Layout from '../../components/Layout'
import Footer from '../../components/Footer.jsx'
import ServicesSection from '../../components/SevicesSection'

const ServicesPage = () => {

    return (
        <>
        <Navbar />

        <div className="nav-margin-top"></div>
        <Layout>
        <div className="breadcrumbs">
                <Link href="/"><img src="/home-icon.png" alt=""/></Link>
                <p> > Services</p>
            </div>
            <ServicesSection />
            <div className="nav-margin-top"></div>
        </Layout>

        <Footer />
        </>
    )

}

export default ServicesPage