import React from 'react';
import '../css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CareGuides = () => {
    return (
        <div className='care-guide-container'>
            {/* Card Section */}
            <div className='care-guide-heading'>
                <h3>Care Guides</h3>
            </div>
            {/* Intro Text */}
            <div className='care-guide-introduction'>
                <p className='care-guide-intro-text'>
                Here we have our care guides for ball python owners new and experienced!
                </p>
            </div>
            <div className='care-guide-card-container'>
                <div className='care-guide-card'>
                    <img src="/images/ballpython-first-time-owners.jpg" alt="" />
                    <a href='/first-time-owners'><button className='btn'>First Time Owners</button></a>
                </div>
                <div className='care-guide-card'>
                    <img src="/images/ballpython-experienced-owners.jpg" alt="" />
                    <a href='/experienced-owners'><button className='btn'>Experienced Owners</button></a>
                </div>
            </div>
        </div>
    );
}

export default CareGuides 