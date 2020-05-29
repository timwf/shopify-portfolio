const ServicesCard = (props) => {

    return(
        <div className="service-card">
            <img src={props.image} alt=""/>
            <div className="service-card-header">
                 <p>{props.header}</p>
            </div>
            <div className="service-card-content">
                <p>{props.content}</p>
            </div>

        </div>
    )

}

export default ServicesCard