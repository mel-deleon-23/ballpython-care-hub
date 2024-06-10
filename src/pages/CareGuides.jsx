import React from 'react';
import '../css/styles.css';

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
                    <img src="/images/banana-bp.jpg" alt="" />
                    <button className='btn'>Enclosures</button>
                </div>
                <div className='care-guide-card'>
                    <img src="/images/ballpython-in-plant.jpg" alt="" />
                    <button className='btn'>Feeding</button>
                </div>
                <div className='care-guide-card'>
                    <img src="/images/ballpython-scoping.jpg" alt="" />
                    <button className='btn'>Heating</button>
                </div>
                <div className='care-guide-card'>
                    <img src="/images/banana-bp.jpg" alt="" />
                    <button className='btn'>Substrates</button>
                </div>
            </div>
        </div>
    );
}

export default CareGuides 