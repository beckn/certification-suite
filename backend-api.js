import express from 'express';
import pkg from 'body-parser';
const { json } = pkg;
import * as jsonwebtoken from 'jsonwebtoken';
import cors from 'cors';
import mongoose,{connect} from 'mongoose';
// import User from './Models/User.js'; // Replace with your User model
// const {findOne}=User;
const app = express();
const secretKey = 'your_secret_key_here'; // Change this to a strong secret key

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

 const User = mongoose.model('User', userSchema);

// Connect to MongoDB (change the connection URL to your own MongoDB instance)
mongoose.connect('mongodb://localhost:27017/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(json());
app.use(cors());

app.post('/login', async (req, res) => {
  try {
    const name=req.body.username;
    const password=req.body.password;

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
    console.log(newUser);

    await newUser.save();

    // Generate JWT token
    // const token = jsonwebtoken.sign({ email }, secretKey, { expiresIn: '1h' });

    res.status(200).json({ message: 'Registration successful.'});
  } catch (error) {
    res.status(500).json({ message: 'Registration failed. Please try again.' });
  }
});

const PORT = 5000; // Change this to the desired port number
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));