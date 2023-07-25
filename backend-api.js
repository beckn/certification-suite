const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const secretKey = 'your_secret_key_here'; // Change this to a strong secret key

// Connect to MongoDB (change the connection URL to your own MongoDB instance)
mongoose.connect('mongodb://localhost:27017/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a Mongoose schema for the user
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  password: String,
});

// Create a Mongoose model based on the schema
const User = mongoose.model('User', userSchema);

app.use(bodyParser.json());
app.use(cors());

// Registration endpoint
app.post('/register', async (req, res) => {
  const { name, email, phone, password } = req.body;

  // Simple validation (you should add more robust validation in a real application)
  if (!name || !email || !phone || !password) {
    return res.status(400).json({ message: 'Please provide all fields.' });
  }

  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already registered.' });
    }

    // Create a new user
    const newUser = new User({ name, email, phone, password });
    await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });


    res.status(200).json({ message: 'Registration successful.' , token});
  } catch (error) {
    res.status(500).json({ message: 'Registration failed. Please try again.' });
  }
});

const PORT = 5000; // Change this to the desired port number
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));