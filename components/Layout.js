
import Head from 'next/head'

import '../pages/styles.scss'



const Layout = (props) => (
    <div className="layout-wrapper">
        <Head> 
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>           
        </Head>
       
        {props.children}
    </div>
)

export default Layout