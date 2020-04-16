const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const connectedUsers = {}; // Map of userId and socket.id

io.on('connection', socket => {
    const { user } = socket.handshake.query;

    connectedUsers[user] = socket.id;
});

mongoose.connect('mongodb+srv://omniStack:y2uzXjC2nFLdHV9z@clusterzero-09qhx.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

// Middleware (The interceptor that run before the other Express calls on the endpoints)
app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);