import React, { useState } from 'react';
import '../css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const [email, setEmail] = useState('');
    const [thankYouMessage, setThankYouMessage] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, such as sending the email to your server or an API.
        console.log('Email submitted:', email);
        setThankYouMessage(true);
        setEmail(''); // Clear the input after submission
    };

    return (
        <div className='home-container'>
          <section className='home-image'>
            <img src="/images/ball-python-on-branch.jpg" alt="Banana Ball Python morph"
            className='header-image' />
          </section>
          {/* Intro Text */}
          <div className='home-introduction'>
          <h2 className='intro-heading'>Ball Python Care Hub</h2>
            <p className='intro-text'>
              Welcome to the Ball Python Care Hub! Your ultimate online resource for everything related to ball pythons! 
              Whether you're a seasoned enthusiast or just starting your journey with these fascinating reptiles, 
              our platform is designed to be your go-to hub for all things ball python. Dive into our comprehensive guides, 
              discover expert care tips, and connect with a vibrant community of fellow python lovers. At the Ball Python Care Hub, 
              we are dedicated to providing valuable information, essential resources, and a space to share experiences and knowledge, 
              ensuring that both you and your ball python thrive. 
            </p>
          </div>
          {/* Card Section */}
          <section className='card-container'>
            <div className='card'>
                <img src="/images/banana-bp.jpg" alt="" />
                <a href='/careguides'><button className='btn'>Care Guides</button></a>
            </div>
            <div className='card'>
                <img src="/images/ballpython-in-plant.jpg" alt="" />
                <a href='/resources'><button className='btn'>Resources</button></a>
            </div>
            <div className='card'>
                <img src="/images/ballpython-scoping.jpg" alt="" />
                <a href='/ballpythons'><button className='btn'>Ball Pythons</button></a>
            </div>
          </section>
          {/* Newsletter Sign Up Section */}
          <section className='email-signup-container'>
            <h2 className='email-heading'>Subscribe to our Newsletter</h2>
            <form onSubmit={handleFormSubmit} className='email-signup-form'>
                <div className="form-group d-flex">
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter your email" 
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    <button type="submit" className="btn">Subscribe</button>
                </div>
            </form>
            {thankYouMessage && <p className='thank-you-message'>Thank you for subscribing to our newsletter!</p>}
          </section>
        </div>
    );
}

export default Home 