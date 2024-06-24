import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const FirstTimeOwners = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/api/content/first-time-owners');
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
        <div className='first-time-owner-container'>
            <h3 className='first-time-owner-heading'>First Time Owners</h3>
            <p className='first-time-owner-introduction'>Welcome to the world of ball pythons! Here’s everything you need to know as a first-time owner.</p>
            <ul>
                {Array.isArray(posts) && posts.length > 0 ? (
                    posts.map((post) => (
                        <li key={post._id}>
                            <Link to={`/first-time-owners/${post._id}`}>{post.title}</Link>
                        </li>
                    ))
                ) : (
                    <p>Posts Coming Soon!</p>
                )}
            </ul>
        </div>
    );
};

export default FirstTimeOwners;
