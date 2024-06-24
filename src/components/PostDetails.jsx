import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`/api/content/${id}`);
                setPost(response.data);
            } catch (error) {
                console.error('Error fetching post details:', error);
            }
        };
        fetchPost();
    }, [id]);

    if (!post) return <div>Loading...</div>;

    return (
        <div className='post-details'>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    );
};

export default PostDetails;
