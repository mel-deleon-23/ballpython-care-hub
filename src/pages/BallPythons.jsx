import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/styles.css';

const BallPythons = () => {
    const [ballPythons, setBallPythons] = useState([]);
    const [externalData, setExternalData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('Component mounted, fetching data...');
        // const fetchData = async () => {
        //     try {
        //         const response = await axios.get('http://localhost:8888/api/ballpythons');
        //         console.log('Data fetched successfully:', response.data);
        //         setBallPythons(response.data);
        //         setLoading(false);
        //     } catch (err) {
        //         console.error('Error fetching data:', err);
        //         setError(err);
        //         setLoading(false);
        //     }
        // };

        const fetchExternalData = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:8888/api/external/ballpythons?name=ball%20python'
                );
                console.log('External API response:', response.data);
                setExternalData(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        // fetchData();
        fetchExternalData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='ballpythons-container'>
            <h2 className='ballpythons-heading'>Ball Pythons</h2>
            {externalData.map((data, index) => (
                <div key={index} className='ballpython-item'>
                    <h3>{data.name}</h3>
                    <p>Life Span: {data.characteristics.lifespan}</p>
                    <p>Length: {data.characteristics.length}</p>
                    <p>Litter size: {data.characteristics.litter_size}</p>
                    <p>Scientific Name: {data.taxonomy.scientific_name}</p>
                    <p>Country of Origin: {data.locations}</p>
                </div>
            ))}
        </div>
    );
}

export default BallPythons;
