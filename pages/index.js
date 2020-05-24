import Head from 'next/head'
import Layout from "../components/Layout"
import HeroSection from '../components/HeroSection'
import SectionBreak from '../components/SectionBreak'
import ServicesSection from '../components/SevicesSection'
import Navbar from '../components/Navbar'
import WorkSection from '../components/WorkSection'




const Index = () => (
    <>
     <Navbar />
   <Layout>
        <Head>
            <title>Shopify Partner | Developer | Designer - Home Page</title>
        </Head>
        <HeroSection />
    </Layout>
    <div className="hero-height">
    <SectionBreak name="Services"/>
    </div>
    <Layout>
    <ServicesSection />
    </Layout>
    <SectionBreak name="Work"/>
    <WorkSection />
    <SectionBreak name="Reviews"/>
    </>
);

export default Index