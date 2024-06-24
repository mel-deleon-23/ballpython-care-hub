const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
    page: { 
        type: String, 
    },
    title: { 
        type: String, 
    },
    content: { 
        type: String, 
    },
  });
  
module.exports = mongoose.model('Content', ContentSchema);