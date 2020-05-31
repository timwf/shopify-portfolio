import Link from 'next/link'
import Navbar from "../../components/Navbar"
import WorkSection from "../../components/WorkSection"
import Layout from '../../components/Layout'
import Footer from '../../components/Footer.jsx'
import ServicesSection from '../../components/SevicesSection'
import Head from 'next/head'

const ServicesPage = () => {

    return (
        <>
        <Navbar />

        <div className="nav-margin-top"></div>
        <Layout>
        <Head>
            <title>Timothy Williams Fowler. Shopify Partner | Developer | Designer - Services</title>
            
        </Head>
        <div className="breadcrumbs">
                <Link href="/"><img src="/home-icon.png" alt=""/></Link>
                <p> > Services</p>
            </div>
            <ServicesSection />
            <div className="nav-margin-top"></div>
        </Layout>
        <WorkSection />
        <Footer />
        </>
    )

}

export default ServicesPage