const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
    console.log('Nova conexão', socket.id);

    socket.on('hello', message => {
        console.log(message);
    });

    setTimeout(() => {
        socket.emit('world', {
            message: 'OmniStack'
        });
    }, 5000);
});

mongoose.connect('mongodb+srv://omniStack:y2uzXjC2nFLdHV9z@clusterzero-09qhx.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);