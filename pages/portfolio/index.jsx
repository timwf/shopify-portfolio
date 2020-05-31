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
            <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://timothywilliamsfowler.co.uk/portfolio"/>
        <meta property="og:title" content="Timothy Williams Fowler. Shopify Partner | Developer | Designer "/>
        <meta property="og:description" content="Shopify Partner | Developer | Designer.  Start customizing your Shopify theme now.  Expertise in theme development and design and SEO optimization. Contact me now for a free consultation."/>
        <meta property="og:image" content="/hero-photo-seo.png"></meta>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://timothywilliamsfowler.co.uk/portfolio"/>
        <meta property="twitter:title" content="Timothy Williams Fowler. Shopify Partner | Developer | Designer"/>
        <meta property="twitter:description" content="Shopify Partner | Developer | Designer.  Start customizing your Shopify theme now.  Expertise in theme development and design and SEO optimization. Contact me now for a free consultation."/>
        <meta property="twitter:image" content="/hero-photo-seo.png"/>
            
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