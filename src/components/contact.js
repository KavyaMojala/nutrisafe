import React, { useState } from 'react';
import './contact.css'; // Ensure this points to your CSS file

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        question: '',
        details: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Here you can handle form submission, like sending the data to an API
        setSubmitted(true);
        setFormData({ name: '', email: '', question: '', details: '' }); // Reset form after submission
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>
            "Our team of expert Registered Dietitians and nutrition specialists is dedicated to helping you. Feel free to ask any questions about food, nutrition, or your dietary needs, and we’ll respond promptly to provide guidance."

                
            </p>
            <p>
                For detailed nutrition advice, please Contact us.
            </p>
            {submitted ? (
                <div className="thank-you-message">
                    <h2>Thank you for your submission!</h2>
                    <p>You will receive a confirmation email soon.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Your Information</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                            placeholder="Name *"
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                            placeholder="Email *"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="question">Your Question *</label>
                        <input 
                            type="text" 
                            id="question" 
                            name="question" 
                            value={formData.question} 
                            onChange={handleChange} 
                            required 
                            placeholder="Question *"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="details">More Detail/Explanation</label>
                        <textarea 
                            id="details" 
                            name="details" 
                            value={formData.details} 
                            onChange={handleChange} 
                            rows="4" 
                            placeholder="Provide more details..."
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label>
                            <input 
                                type="checkbox" 
                                name="confirmation" 
                                required 
                            />
                            Receive an email confirmation of your submission.
                        </label>
                    </div>
                    <button type="submit" className="submit-btn">Submit Question</button>
                </form>
            )}
            
        </div>
    );
};

export default Contact;
