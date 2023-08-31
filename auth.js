import express from 'express';
const router = express.Router();
// const bcrypt = require('bcrypt');
import User from './Models/User.js'; // Replace with your User model

// POST /api/login
router.post('/login', async (req, res) => {
  try {
    const { name, password } = req.body;

    // Find the user by name
    const user = await User.findOne({ name });
    console.log(name);
    if (!user) {
      return res.json({ success: false, message: 'User not found' });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = (password==user.password);

    if (!isPasswordValid) {
      return res.json({ success: false, message: 'Invalid password' });
    }

    // User is authenticated, generate a JWT token or handle session

    res.json({ success: true, message: 'Login successful' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'An error occurred' });
  }
});

export default router;