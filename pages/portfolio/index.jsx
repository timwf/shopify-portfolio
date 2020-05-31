import Link from 'next/link'
import Navbar from "../../components/Navbar"
import WorkSection from "../../components/WorkSection"
import Layout from '../../components/Layout'
import Footer from '../../components/Footer.jsx'
import Head from 'next/head'

const Portfolio = (props) => {
    return(
        <>
        <Navbar />

        <div className="nav-margin-top"></div>
        <Layout>
        <Head>
            <title>Timothy Williams Fowler. Shopify Partner | Developer | Designer - Portfolio</title>
            
        </Head>
        <div className="breadcrumbs">
                <Link href="/"><img src="/home-icon.png" alt=""/></Link>
                <p> > Portfolio</p>
            </div>
        </Layout>
        <WorkSection />
        <Footer />
        </>
    )
}

export default Portfolio