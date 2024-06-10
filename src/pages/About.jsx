import React from 'react';
import '../css/styles.css';

const About = () => {
    return (
        <div className='about-container'>
        {/* Intro Text */}
          <div className='care-guide-heading'>
            <h3>About Us</h3>
          </div>
          <div className='home-introduction'>
            <p className='intro-text'>
              Welcome to the Ball Python Care Hub! Your ultimate online resource for everything related to ball pythons! 
              Whether you're a seasoned enthusiast or just starting your journey with these fascinating reptiles, 
              our platform is designed to be your go-to hub for all things ball python. Dive into our comprehensive guides, 
              discover expert care tips, and connect with a vibrant community of fellow python lovers. At the Ball Python Care Hub, 
              we are dedicated to providing valuable information, essential resources, and a space to share experiences and knowledge, 
              ensuring that both you and your ball python thrive. 
            </p>
          </div>
        </div>
    );
}

export default About 