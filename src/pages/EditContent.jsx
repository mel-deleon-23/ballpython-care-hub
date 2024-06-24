import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../css/createContent.css'; 

const EditContent = () => {
  const { id } = useParams();
  const [page, setPage] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get(`http://localhost:8888/api/content/${id}`);
        const { page, title, content, image } = response.data;
        setPage(page);
        setTitle(title);
        setContent(content);
        setImage(image); // Assuming image is the URL or filename
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    fetchContent();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('page', page);
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }

    try {
      await axios.put(`http://localhost:8888/api/content/${id}`, formData, { 
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/admin'); // Redirect to admin page after successful submission
    } catch (error) {
      console.error('Error updating content:', error);
    }
  };

  return (
    <div className="container">
      <h2>Edit Content</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label>Page</label>
          <select
            className="form-control"
            value={page}
            onChange={(e) => setPage(e.target.value)}
            required
          >
            <option value="">Select Page</option>
            <option value="first-time-owners">First Time Owners</option>
            <option value="experienced-owners">Experienced Owners</option>
            <option value="breeding">Breeding</option>
            <option value="enclosures">Enclosures</option>
            <option value="feeding">Feeding</option>
            <option value="heating">Heating</option>
            <option value="substrates">Substrates</option>
            <option value="shedding">Shedding</option>
          </select>
        </div>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <ReactQuill
            value={content}
            onChange={setContent}
            modules={{
              toolbar: [
                [{ header: '1' }, { header: '2' }, { font: [] }],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                ['link', 'image'],
                ['clean'],
              ],
            }}
            formats={[
              'header',
              'font',
              'size',
              'bold',
              'italic',
              'underline',
              'strike',
              'blockquote',
              'list',
              'bullet',
              'link',
              'image',
            ]}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="file"
            className="form-control-file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Content</button>
      </form>
    </div>
  );
};

export default EditContent;
