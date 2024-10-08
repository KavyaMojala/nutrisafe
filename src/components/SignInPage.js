import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignInPage.css';

const SignInPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [captcha, setCaptcha] = useState('');
    const [captchaInput, setCaptchaInput] = useState('');

    const navigate = useNavigate();

    // Function to generate random alphanumeric CAPTCHA
    const generateCaptcha = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const length = 6; // Set the length of the CAPTCHA
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        setCaptcha(result);
    };

    useEffect(() => {
        generateCaptcha(); // Generate CAPTCHA when the component mounts
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleCaptchaChange = (e) => {
        setCaptchaInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (captchaInput !== captcha) {
            alert('Incorrect CAPTCHA. Please try again.');
            generateCaptcha(); // Regenerate CAPTCHA if the answer is incorrect
            return;
        }
        console.log('Form submitted:', formData);
        
        // Redirect to user page after successful login
        navigate('/user'); 
    };

    return (
        <div className="signin-page">
            <div className="form-container">
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>CAPTCHA: {captcha}</label>
                        <input
                            type="text"
                            value={captchaInput}
                            onChange={handleCaptchaChange}
                            required
                            placeholder="Enter the CAPTCHA"
                        />
                    </div>
                    <button type="submit" className="styled-button">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default SignInPage;
