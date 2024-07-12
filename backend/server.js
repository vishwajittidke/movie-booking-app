const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const { Server } = require('socket.io');
const http = require('http');
const authRoutes = require('./routes/auth');
const bookingRoutes = require('./routes/booking');
const adminRoutes = require('./routes/admin');

dotenv.config();
connectDB();

const app = express();
app.use('/api/auth', authRoutes)
app.use(express.json());
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST']
  }
});

io.on('connection', socket => {
  console.log('New WebSocket connection');
});

app.use('/api/auth', authRoutes);
app.use('/api/booking', bookingRoutes);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
