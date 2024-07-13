// const express = require('express');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const cors = require('cors');
// const { Server } = require('socket.io');
// const http = require('http');
// const authRoutes = require('./routes/auth');
// const bookingRoutes = require('./routes/booking');
// const adminRoutes = require('./routes/admin');
// const mongoose = require('mongoose');
// const path = require('path');
// const router = express.Router();

// dotenv.config();
// connectDB();

// const app = express();

// // MongoDB connection using Mongoose
// mongoose.connect('mongodb://127.0.0.1:27017/movie', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.log(err));

// // router.route('/').post(res)
// // Define User schema and model (example)
// const userSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
// });
// const User = mongoose.model('User', userSchema);

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Static files and SPA handling
// app.use(express.static(path.join(__dirname, './movie-booking-app/src')));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, './movie-booking-app/src/index.html'));
// });

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/booking', bookingRoutes);
// app.use('/api/admin', adminRoutes);

// // WebSocket setup
// const server = http.createServer(app);
// const io = new Server(server, {
//     cors: {
//         origin: process.env.FRONTEND_URL,
//         methods: ['GET', 'POST'],
//     },
// });

// io.on('connection', (socket) => {
//     console.log('New WebSocket connection');
// });

// // Server start
// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const { Server } = require('socket.io');
const http = require('http');
const authRoutes = require('./routes/auth');
const bookingRoutes = require('./routes/booking');
const adminRoutes = require('./routes/admin');
const mongoose = require('mongoose');
const path = require('path');

dotenv.config();
// connectDB();

// if (process.env.MONGO_URI) {
//     console.error('MONGO_URI is not defined in the environment variables');
//     process.exit(1); // Exit with failure
//   }

const app = express();

// MongoDB connection using Mongoose
const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/movie";
    mongoose.connect(mongoUri)
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.log(err));

// Define User schema and model (example)
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
});
const User = mongoose.model('User', userSchema);

// Middleware
app.use(express.json());
app.use(cors());

// Static files and SPA handling
app.use(express.static(path.join(__dirname, './movie-booking-app/src')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './movie-booking-app/src/index.html'));
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/booking', bookingRoutes);
app.use('/api/admin', adminRoutes);

// WebSocket setup
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:4200/',
        methods: ['GET', 'POST'],
    },
});

io.on('connection', (socket) => {
    console.log('New WebSocket connection');
});

// Server start
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
