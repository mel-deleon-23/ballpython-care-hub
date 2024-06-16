const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');
const BallPythons = require('./models/BallPythons');

dotenv.config();

// PORT
const app = express();
const port = process.env.PORT || "8888";

app.use(cors());
app.use(express.json());

// Connect to database
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("Database connection error: ", err);
});


// Routes
app.get('/api/ballpythons', async (req, res) => {
    try {
        const ballPythons = await BallPythons.find();
        res.json(ballPythons);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/api/ballpythons', async (req, res) => {
    const ballPython = new BallPythons(req.body);
    try {
        const newBallPython = await ballPython.save();
        res.status(201).json(newBallPython);
    } catch (err) {
        res.status(400).json({ message: err.message });
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


//set up server listening
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});