
import Head from 'next/head'
import Router from "next/router";
import withGA from 'next-ga'
import '../pages/styles.scss'



const Layout = (props) => (
    <div className="layout-wrapper">
        <Head> 
        <link rel="shortcut icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>           
        <meta name="description" 
        content="Shopify Partner | Developer | Designer.  Start customizing your Shopify theme now.  Expertise in theme development and design and SEO optimization. Contact me now for a free consultation."></meta>
        

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://timothywilliamsfowler.co.uk"/>
        <meta property="og:title" content="Timothy Williams Fowler. Shopify Partner | Developer | Designer "/>
        <meta property="og:description" content="Shopify Partner | Developer | Designer.  Start customizing your Shopify theme now.  Expertise in theme development and design and SEO optimization. Contact me now for a free consultation."/>
        <meta property="og:image" content="https://github.com/timwf/images/blob/master/hero-photo-seo.png"></meta>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://timothywilliamsfowler.co.uk"/>
        <meta property="twitter:title" content="Timothy Williams Fowler. Shopify Partner | Developer | Designer"/>
        <meta property="twitter:description" content="Shopify Partner | Developer | Designer.  Start customizing your Shopify theme now.  Expertise in theme development and design and SEO optimization. Contact me now for a free consultation."/>
        <meta property="twitter:image" content="https://github.com/timwf/images/blob/master/hero-photo-seo.png"/>

        </Head>
       
        {props.children}
    </div>
)

export default withGA("UA-140228069-7", Router)(Layout)