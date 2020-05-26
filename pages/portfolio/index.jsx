import Link from 'next/link'
import Navbar from "../../components/Navbar"
import WorkSection from "../../components/WorkSection"
import Layout from '../../components/Layout'
import Footer from '../../components/Footer.jsx'

const Portfolio = (props) => {
    return(
        <>
        <Navbar />

        <div className="nav-margin-top"></div>
        <Layout>
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