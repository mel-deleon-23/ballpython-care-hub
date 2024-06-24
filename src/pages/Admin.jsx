import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/adminStyles.css'; 

const Admin = () => {
  const [contents, setContents] = useState([]);
  const pages = [
    'first-time-owners', 
    'experienced-owners', 
    'breeding', 
    'enclosures', 
    'feeding', 
    'heating', 
    'substrates', 
    'shedding'
  ];

  useEffect(() => {
    fetchContents();
  }, []);

  const fetchContents = async () => {
    try {
      const allContents = [];
      for (const page of pages) {
        const response = await axios.get(`http://localhost:8888/api/content/${page}`);
        if (Array.isArray(response.data)) {
          allContents.push(...response.data);
        } else {
          console.error(`Error: Expected an array from API response for ${page}`, response.data);
        }
      }
      setContents(allContents);
    } catch (error) {
      console.error('Error fetching contents:', error);
      setContents([]); // Ensure contents is always an array even in case of error
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8888/api/content/${id}`);
      fetchContents(); // Re-fetch contents after deletion
    } catch (error) {
      console.error('Error deleting content:', error);
    }
  };

  const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  const truncate = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="container admin-container">
      <h2 className="admin-heading">Admin Panel</h2>
      <Link to="/create-content" className="btn btn-primary mb-3">Create New Content</Link>
      <h3 className="admin-subheading">Existing Content</h3>
      <ul className="list-group">
        {contents.map((content) => (
          <li key={content._id} className="list-group-item">
            <h4>{content.title}</h4>
            <p>{truncate(stripHtml(content.content), 300)}</p>
            <Link to={`/edit/${content._id}`} className="btn btn-warning mr-2">Edit</Link>
            <button onClick={() => handleDelete(content._id)} className="btn btn-danger">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
