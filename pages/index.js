import Head from 'next/head'
import { useState } from 'react'

const Index = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState('')

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => {
        setIsModalOpen(false)
        setSubmitStatus('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        
        try {
            const formData = new FormData(e.target)
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message')
            }
            
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            
            if (response.ok) {
                setSubmitStatus('success')
                setTimeout(() => {
                    closeModal()
                    setIsSubmitting(false)
                }, 2000)
            } else {
                setSubmitStatus('error')
                setIsSubmitting(false)
            }
        } catch (error) {
            setSubmitStatus('error')
            setIsSubmitting(false)
        }
    }

    return (
        <>
            <Head>
                <title>Site Under Maintenance - Timothy Williams Fowler</title>
                <meta name="description" content="Site is currently under maintenance. Please check back soon." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            
            <div className="maintenance-container">
                <div className="maintenance-content">
                    <div className="maintenance-logo-wrap">
                        <div className="maintenance-logo">
                            <svg className="cm cm-cm" width="151" height="180" viewBox="0 0 151 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M37.335 111.696C25.895 111.696 16.847 108.628 10.191 102.492C3.53503 96.252 0.207031 87.932 0.207031 77.532C0.207031 74.828 0.311031 72.8 0.519031 71.448L4.41903 39.936C5.35503 32.032 7.90303 25.064 12.063 19.032C16.327 13 21.787 8.31999 28.443 4.99199C35.203 1.664 42.743 0 51.063 0C62.607 0 71.707 2.912 78.363 8.736C85.123 14.56 88.503 22.412 88.503 32.292C88.503 33.332 88.399 35.1 88.191 37.596C88.191 38.012 87.931 38.376 87.411 38.688C86.995 39 86.475 39.208 85.851 39.312L61.671 40.872H61.203C59.955 40.872 59.435 40.3 59.643 39.156C59.747 38.636 59.799 37.856 59.799 36.816C59.799 33.176 58.759 30.316 56.679 28.236C54.599 26.156 51.739 25.116 48.099 25.116C44.043 25.116 40.611 26.416 37.803 29.016C35.099 31.512 33.487 34.892 32.967 39.156L28.911 72.696C28.807 73.216 28.755 73.996 28.755 75.036C28.755 78.572 29.795 81.38 31.875 83.46C34.059 85.54 36.919 86.58 40.455 86.58C44.511 86.58 47.891 85.332 50.595 82.836C53.299 80.236 54.911 76.856 55.431 72.696C55.535 72.176 55.795 71.76 56.211 71.448C56.627 71.032 59.0016 70.1439 59.7296 70.2479L81.795 72.228C83.251 72.436 83.927 72.956 83.823 73.788C82.887 81.276 80.339 87.88 76.179 93.6C72.019 99.32 66.559 103.792 59.799 107.016C53.143 110.136 45.655 111.696 37.335 111.696Z" fill="white"/>
                                <path d="M125.718 71.4959C126.134 70.6639 126.862 70.2479 127.902 70.2479H149.274C149.794 70.2479 150.21 70.4559 150.522 70.8719C150.834 71.1839 150.938 71.5999 150.834 72.1199L137.886 177.576C137.782 178.096 137.522 178.564 137.106 178.98C136.794 179.292 136.378 179.448 135.858 179.448H114.33C113.81 179.448 113.394 179.292 113.082 178.98C112.77 178.564 112.666 178.096 112.77 177.576L120.414 114.864C120.518 114.448 120.466 114.24 120.258 114.24C120.05 114.24 119.842 114.396 119.634 114.708L103.878 136.236C103.462 137.068 102.734 137.484 101.694 137.484H90.9296C89.9936 137.484 89.3176 137.068 88.9016 136.236L78.4496 114.552C78.3456 114.24 78.1897 114.084 77.9817 114.084C77.7737 114.084 77.6176 114.292 77.5136 114.708L69.8697 177.576C69.7657 178.096 69.5056 178.564 69.0896 178.98C68.7776 179.292 68.3616 179.448 67.8416 179.448H46.3136C45.7936 179.448 45.3776 179.292 45.0656 178.98C44.7536 178.564 44.6496 178.096 44.7536 177.576L57.7016 72.1199C57.7016 71.5999 57.9096 71.1839 58.3256 70.8719C58.7416 70.4559 59.2096 70.2479 59.7296 70.2479H80.9456C81.9856 70.2479 82.6616 70.6639 82.9736 71.4959L99.8216 105.504C100.134 106.128 100.446 106.128 100.758 105.504L125.718 71.4959Z" fill="white"/>
                            </svg>

                            <svg className="cm cm-cart" width="445" height="445" viewBox="0 0 445 445" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M34.8333 7H34.6316L34.4302 7.01162L32.0006 7.15178L31.7978 7.16348L31.5961 7.18691C17.7462 8.79555 7 20.5545 7 34.8333C7 50.2053 19.4614 62.6667 34.8333 62.6667H52.6213L85.2215 274.568L85.237 274.669L85.2554 274.769L85.9206 278.388L85.939 278.489L85.9604 278.589C92.7797 310.434 120.981 333.5 153.913 333.5H334.743H334.848L334.954 333.497L338.751 333.382L338.857 333.379L338.962 333.373C369.73 331.515 395.828 309.494 402.588 279.077L437.004 124.205L437.048 124.008L437.08 123.808L437.475 121.38L437.507 121.178L437.528 120.976C439.194 104.828 426.536 90.3333 409.833 90.3333H113.199L104.01 30.6011L103.98 30.4079L103.939 30.2166L103.454 27.9207L103.413 27.7285L103.362 27.539C100.111 15.5412 89.184 7 76.5 7H34.8333ZM187.667 399.417C187.667 378.292 170.542 361.167 149.417 361.167C128.292 361.167 111.167 378.292 111.167 399.417C111.167 420.542 128.292 437.667 149.417 437.667C170.542 437.667 187.667 420.542 187.667 399.417ZM375.167 399.417C375.167 378.292 358.042 361.167 336.917 361.167C315.792 361.167 298.667 378.292 298.667 399.417C298.667 420.542 315.792 437.667 336.917 437.667C358.042 437.667 375.167 420.542 375.167 399.417ZM347.748 268.719C345.79 274.128 340.622 277.833 334.743 277.833H154.109L152.177 277.725C146.124 276.967 141.19 272.27 140.241 266.103L121.763 146H375.136L348.29 266.804L347.748 268.719Z" fill="white" stroke="white" strokeWidth="14"/>
                            </svg>
                        </div>
                    </div>
                    <h1 className="maintenance-text">Under Site Maintenance</h1>
                    <button 
                        className="contact-button"
                        onClick={openModal}
                        aria-label="Open contact form"
                    >
                        Contact Us
                    </button>
                </div>
            </div>

            {/* Contact Modal */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button 
                            className="modal-close"
                            onClick={closeModal}
                            aria-label="Close contact form"
                        >
                            ×
                        </button>
                        
                        <h2 className="modal-title">Get In Touch</h2>
                        
                        {submitStatus === 'success' ? (
                            <div className="success-message">
                                <p>Thank you! Your message has been sent successfully.</p>
                            </div>
                        ) : (
                            <form 
                                onSubmit={handleSubmit}
                                className="contact-form"
                            >
                                
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input 
                                        type="text" 
                                        id="name"
                                        name="name" 
                                        required 
                                        placeholder="Your Name"
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        type="email" 
                                        id="email"
                                        name="email" 
                                        required 
                                        placeholder="your@email.com"
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea 
                                        id="message"
                                        name="message" 
                                        required 
                                        rows="4"
                                        placeholder="Your message..."
                                    ></textarea>
                                </div>
                                
                                <button 
                                    type="submit" 
                                    className="submit-button"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                                
                                {submitStatus === 'error' && (
                                    <div className="error-message">
                                        <p>Sorry, there was an error sending your message. Please try again.</p>
                                    </div>
                                )}
                            </form>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default Index