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
                    <button className='btn'>Enclosures</button>
                </div>
                <div className='resource-card'>
                    <img src="/images/ballpython-in-plant.jpg" alt="" />
                    <button className='btn'>Feeding</button>
                </div>
                <div className='resource-card'>
                    <img src="/images/ballpython-scoping.jpg" alt="" />
                    <button className='btn'>Heating</button>
                </div>
                <div className='resource-card'>
                    <img src="/images/banana-bp.jpg" alt="" />
                    <button className='btn'>Substrates</button>
                </div>
                <div className='resource-card'>
                    <img src="/images/banana-bp.jpg" alt="" />
                    <button className='btn'>Shedding</button>
                </div>
                <div className='resource-card'>
                    <img src="/images/ballpython-in-plant.jpg" alt="" />
                    <button className='btn'>Breeding</button>
                </div>
          </div>
        </div>
    );
}

export default Resources 