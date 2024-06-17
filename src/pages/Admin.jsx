import React, { useState } from 'react';

const Admin = () => {
    const [content, setContent] = useState('');
    const [contentList, setContentList] = useState(JSON.parse(localStorage.getItem('contentList')) || []);

    const handleAddContent = () => {
        const newContentList = [...contentList, content];
        setContentList(newContentList);
        localStorage.setItem('contentList', JSON.stringify(newContentList));
        setContent('');
    };

    return (
        <div className="admin-container">
            <h3>Admin Panel</h3>
            <textarea 
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Add new content here..."
            ></textarea>
            <button onClick={handleAddContent}>Add Content</button>
            <div className="content-list">
                {contentList.map((item, index) => (
                    <div key={index} className="content-item">
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Admin;
