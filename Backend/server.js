require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors'); // ✅ important
const authRoutes = require('./routes/auth');

const app = express();

const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET;
const MONGO_URI = process.env.MONGODB_URI;

// ✅ CORS middleware
app.use(cors({
  origin: 'http://localhost:5173', // React frontend
  credentials: true,               // Allow cookies
}));

// Middleware
app.use(cookieParser());
app.use(bodyParser.json());

// ✅ MongoDB Connection
mongoose.connect('mongodb://localhost:27017/authdbms', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.log('❌ MongoDB error:', err));

// ✅ Routes
app.use('/api/auth', authRoutes);

// ✅ Server Start
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
