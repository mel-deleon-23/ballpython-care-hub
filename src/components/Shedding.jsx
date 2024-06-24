import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Shedding = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/api/content/shedding');
                if (Array.isArray(response.data)) {
                    setPosts(response.data);
                } else {
                    console.error('Error: Response data is not an array', response.data);
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div className='shedding-container'>
            <h2 className='shedding-heading'>Shedding</h2>
            <p className='shedding-introduction'>Information about shedding for ball pythons...</p>
            <ul>
                {Array.isArray(posts) && posts.length > 0 ? (
                    posts.map((post) => (
                        <li key={post._id}>
                            <Link to={`/shedding/${post._id}`}>{post.title}</Link>
                        </li>
                    ))
                ) : (
                    <p>Posts Coming Soon!</p>
                )}
            </ul>
        </div>
    );
};

export default Shedding;
