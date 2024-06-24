const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');
const multer = require('multer');
const path = require('path');
const app = express();
const port = process.env.PORT || 8888;
const BallPythons = require('./models/BallPythons');
const Content = require('./models/Content');
const authRouter = require('./routes/auth');

dotenv.config();
app.use(cors());
app.use(express.json());

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to database
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("Database connection error: ", err);
});

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
});
  
const upload = multer({ storage: storage });

// Create content with image upload
app.post('/api/content', upload.single('image'), async (req, res) => {
    const { page, title, content } = req.body;
    const image = req.file ? req.file.filename : null;
    const newContent = new Content({ page, title, content, image });
    try {
      const savedContent = await newContent.save();
      res.status(201).json(savedContent);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

app.use('/api', authRouter);

// Routes to get content by page
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

pages.forEach(page => {
    app.get(`/api/content/${page}`, async (req, res) => {
        try {
            const content = await Content.find({ page });
            res.json(content);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });
});

// Read content
app.get('/api/content/:page', async (req, res) => {
    const { page } = req.params;
    try {
      const content = await Content.find({ page });
      res.json(content);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

// Update content
app.put('/api/content/:id', async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
      const updatedContent = await Content.findByIdAndUpdate(id, { title, content }, { new: true });
      res.json(updatedContent);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

// Delete content
app.delete('/api/content/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await Content.findByIdAndDelete(id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

// Route to fetch data from API Ninjas
app.get('/api/external/ballpythons', async (req, res) => {
    const name = req.query.name || 'python';
    try {
        const response = await axios.get(`https://api.api-ninjas.com/v1/animals?name=${name}`, {
            headers: {
                'X-Api-Key': process.env.API_KEY
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Set up server listening
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});
