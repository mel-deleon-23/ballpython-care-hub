import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PostEditor = () => {
  const { id } = useParams();
  const [post, setPost] = useState({ title: '', content: '' });

  useEffect(() => {
    if (id) {
      axios.get(`/api/posts/${id}`).then(response => setPost(response.data));
    }
  }, [id]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`/api/posts/${id}`, post).then(response => console.log(response.data));
    } else {
      axios.post('/api/posts', post).then(response => console.log(response.data));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={post.title} onChange={handleChange} placeholder="Title" />
      <textarea name="content" value={post.content} onChange={handleChange} placeholder="Content" />
      <button type="submit">Save</button>
    </form>
  );
};

export default PostEditor;
