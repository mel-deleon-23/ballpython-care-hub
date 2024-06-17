import React from 'react';
import '../css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Resources = () => {
    return (
        <div className='resources-container'>
            {/* Card Section */}
            <div className='resources-heading'>
                <h3>Resources</h3>
            </div>
            <div className='resource-card-container'>
                <div className='resource-card'>
                    <img src="/images/banana-bp.jpg" alt="" />
                    <a href='/enclosures'><button className='btn'>Enclosures</button></a>
                </div>
                <div className='resource-card'>
                    <img src="/images/ballpython-in-plant.jpg" alt="" />
                    <a href='/feeding'><button className='btn'>Feeding</button></a>
                </div>
                <div className='resource-card'>
                    <img src="/images/ballpython-scoping.jpg" alt="" />
                    <a href='/heating'><button className='btn'>Heating</button></a>
                </div>
                <div className='resource-card'>
                    <img src="/images/banana-bp.jpg" alt="" />
                    <a href='/substrates'><button className='btn'>Substrates</button></a>
                </div>
                <div className='resource-card'>
                    <img src="/images/banana-bp.jpg" alt="" />
                    <a href='/shedding'><button className='btn'>Shedding</button></a>
                </div>
                <div className='resource-card'>
                    <img src="/images/ballpython-in-plant.jpg" alt="" />
                    <a href='/breeding'><button className='btn'>Breeding</button></a>
                </div>
            </div>
        </div>
    );
}

export default Resources 