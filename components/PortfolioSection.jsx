import Layout from "./Layout"
import {Img} from 'react-image'

const PortfolioSection = (props) => {

    return(
        <Layout>
            <div className="portfolio-section-container">
            <div className="portfolio-section-image-container">
            <a href={props.imageURL} > <Img
                    src={props.image}
                    loader={<img src="/image-loader.gif"/>}
                />
                </a>
                
            </div>
            <div className="portfolio-section-content-container">
                <div className="portfolio-section-header">
                    <a href={props.imageURL}><img src={props.titleLogo} alt=""/></a>
                    <h1>{props.title}</h1>
                </div>
                <div className="portfolio-section-content">
                    <p>{props.content}</p>
                </div>
                <div className="portfolio-section-theme-used-container">
                    <img src="/theme-used-logo.png" alt=""/>
                    <p><strong>Theme:  </strong>{props.theme}</p>
                </div>
                <div className="portfolio-section-tick-container">

                {props.tasks.map((task) => {
                       return(
                        <div className="portfolio-section-tick-content" >
                        <img src="/green-tick.png" alt=""/>
                        <p>{task}</p>
                         </div>
                    )
                })}

                </div>
            </div>
            </div>
        </Layout>
    )
}

export default PortfolioSection