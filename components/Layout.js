
import Head from 'next/head'

import '../pages/styles.scss'



const Layout = (props) => (
    <div className="layout-wrapper">
        <Head> 
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>           
        <meta name="description" 
        content="Shopify Partner | Developer | Designer.  Start customizing your Shopify theme now.  Expertise in theme development and design and SEO optimization. Contact me now for a free consultation."></meta>
        </Head>
       
        {props.children}
    </div>
)

export default Layout