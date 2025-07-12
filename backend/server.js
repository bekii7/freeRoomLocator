import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import roomRoutes from './routes/roomRoutes';
import axios from 'axios';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.get('/http://localhost:3000/rooms', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3001/rooms');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from JSON Server' });
  }
});



app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    
    const response = await axios.get('http://localhost:3000/users');
    const users = response.data;

    
    const user = users.find(u => u.username === username);
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    
    res.json({ message: 'Login successful', user: { id: user.id, username: user.username } });
  } catch (err) {
    console.error('Error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
});


app.get('/users', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3000/users');
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users' });
  }
});
app.get('/http://localhost:3000/courses', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3001/courses');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from JSON Server' });
  }
});
app.get('/http://localhost:3000/bookings', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3001/bookings');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from JSON Server' });
  }
});
/* mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Mongo error:', err)); */

app.use('/rooms', roomRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
