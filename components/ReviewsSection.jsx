import Layout from "./Layout";
import ReviewsCard from "./ReviewsCard";

const ReviewsSection = () => (
    <Layout>
        <div className="reviews-section-container">
            <ReviewsCard 
                image="/DanWhitfield.png"
                name="Dan Whitfield"
                content="Tim took the time in the beginning to outline the job in good detail and specifics. The job was completed promptly. Communication was respectful and helpful. I enjoyed working with Tim"
            />
            <ReviewsCard
                image="/TillieGiles.png"
                name="Tillie Giles"
                content="Very prompt & quick to responding to my request and new exactly what i was after. Completed the job within the hour, excellent service!"
            />
            <ReviewsCard 
                image="/PaulinaWilkins.png"
                name="Paulina Wilkins"
                content="Tim was great to work with. He completed what we asked for on time and at the price quoted. We are very happy with our website."     
            />
            <ReviewsCard 
                image="/AllanStevens.png"
                name="Allan Stevens"
                content="and typesetting industry. Lorem Ipsum has been the "     
            />
            <ReviewsCard 
                image="/NeilRivas.png"
                name="Neil Rivas"
                content="and typesetting industry. Lorem Ipsum has been the "     
            />
            <ReviewsCard 
                image="/MitchelLutz.png"
                name="Mitchel Lutz"
                content="and typesetting industry. Lorem Ipsum has been the "     
            />
        </div>
    </Layout>

)

export default ReviewsSection