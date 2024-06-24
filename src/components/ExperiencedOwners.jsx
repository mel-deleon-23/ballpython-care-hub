import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExperiencedOwners = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/api/content/experienced-owners');
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
        <div className='experienced-owner-container'>
            <h2 className='experienced-owner-heading'>Experienced Owners</h2>
            <p className='experienced-owner-introduction'>For those who are looking for more ways to improve their ball python's life and husbandry.</p>
            <ul>
                {Array.isArray(posts) && posts.length > 0 ? (
                    posts.map((post) => (
                        <li key={post._id}>
                            <Link to={`/experienced-owners/${post._id}`}>{post.title}</Link>
                        </li>
                    ))
                ) : (
                    <p>Posts Coming Soon!</p>
                )}
            </ul>
        </div>
    );
};

export default ExperiencedOwners;
