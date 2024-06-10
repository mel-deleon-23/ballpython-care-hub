import React from 'react';
import '../css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div className='home-container'>
          <div className='home-image'>
            <img src="/images/ball-python-on-branch.jpg" alt="Banana Ball Python morph"
            className='header-image' />
          </div>
          {/* Intro Text */}
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
          {/* Card Section */}
          <div className='card-container'>
            <div className='card'>
                <img src="/images/banana-bp.jpg" alt="" />
                <button className='btn'>Care Guides</button>
            </div>
            <div className='card'>
                <img src="/images/ballpython-in-plant.jpg" alt="" />
                <button className='btn'>Resources</button>
            </div>
            <div className='card'>
                <img src="/images/ballpython-scoping.jpg" alt="" />
                <button className='btn'>Ball Pythons</button>
            </div>
          </div>
        </div>
    );
}

export default Home 