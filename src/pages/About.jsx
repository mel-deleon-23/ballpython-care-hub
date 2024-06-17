import React from 'react';
import '../css/styles.css';

const About = () => {
  return (
    <div className='about-container'>
        {/* Card Section */}
        <div className='about-heading'>
            <h3 className='intro-heading'>About Us</h3>
        </div>
        <div className='about-introduction'>
            <p className='about-text'>
              Welcome to the Ball Python Care Hub! Your ultimate online resource for everything related to ball pythons! 
              Whether you're a seasoned enthusiast or just starting your journey with these fascinating reptiles, 
              our platform is designed to be your go-to hub for all things ball python. Dive into our comprehensive guides, 
              discover expert care tips, and connect with a vibrant community of fellow python lovers. At the Ball Python Care Hub, 
              we are dedicated to providing valuable information, essential resources, and a space to share experiences and knowledge, 
              ensuring that both you and your ball python thrive. 
            </p>
            <br />
            <p className='about-text'>
              Our site offers a wide array of features to cater to every aspect of ball python care. Explore detailed articles 
              on habitat setup, feeding, health, and behavior to ensure your ball python is happy and healthy. 
              Stay up-to-date with the latest research and trends in ball python care, and take advantage of our step-by-step 
              tutorials for common tasks like shedding assistance and handling.
            </p>
            <br />
            <p className='about-text'>
              At the Ball Python Care Hub, we believe in the importance of education and community. Our mission is to foster 
              a supportive environment where you can grow as a reptile keeper and share your passion with others. 
              Thank you for choosing us as your trusted source for all things ball python. Together, we can ensure these 
              wonderful creatures receive the care and love they deserve.
            </p>
        </div>
        {/* <section className='card-container'>
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
        </section> */}
    </div>
  );
}

export default About 