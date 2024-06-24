const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User'); 
const router = express.Router();

// Register new user
// router.post('/register', async (req, res) => {
//     const { username, password } = req.body;
//     try {
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);
//         const newUser = new User({ username, password: hashedPassword });
//         await newUser.save();
//         res.status(201).json({ message: 'User registered successfully' });
//     } catch (error) {
//         console.error('Error registering user:', error);
//         res.status(500).json({ message: error.message });
//     }
// });

// Login user
// router.post('/login', async (req, res) => {
//     const { username, password } = req.body;
//     try {
//         const user = await User.findOne({ username });
//         if (user && await bcrypt.compare(password, user.password)) {
//             const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//             res.json({ token });
//         } else {
//             res.status(401).json({ message: 'Invalid credentials' });
//         }
//     } catch (error) {
//         console.error('Error logging in user:', error);
//         res.status(500).json({ message: error.message });
//     }
// });

// router.post('/login', async (req, res) => {
//     const { username, password } = req.body;
//     try {
//         const user = await User.findOne({ username });
//         if (!user) {
//             console.log('User not found');
//             return res.status(401).json({ message: 'Invalid credentials' });
//         }
        
//         const isPasswordMatch = await bcrypt.compare(password, user.password);
//         console.log('Password match:', isPasswordMatch);

//         if (isPasswordMatch) {
//             const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//             res.json({ token });
//         } else {
//             res.status(401).json({ message: 'Invalid credentials' });
//         }
//     } catch (error) {
//         console.error('Error logging in user:', error);
//         res.status(500).json({ message: error.message });
//     }
// });

module.exports = router;