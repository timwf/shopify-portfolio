

const ReviewsCard = (props) => {

    return(
        <div className="reviews-card-container">
            <div className="reviews-card-image">
                <img src={props.image} alt=""/>
            </div>
            <div className="reviews-card-name">
                <h3>{props.name}</h3>
            </div>
            <div className="review-stars">
                <img src="/five-stars.png" alt=""/>
            </div>
            <div className="reviews-quotation-mark">
                <img src="/quotation-mark.png" alt=""/>
            </div>
            <div className="reviews-content">
                <p>{props.content}</p>
            </div>
            
        </div>
    )
}

export default ReviewsCard