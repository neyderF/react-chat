import express from "express";
import morgan from "morgan";
import { Server } from "socket.io";
import http from 'http';
import cors from 'cors';

const app = express()

app.use(cors())
app.use(morgan('dev'))

const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: '*'
    }
})

io.on('connection', (socket) => {
    console.log(socket.id)
    console.log('user connected')
    socket.on('message', (message) => {
        console.log(message)
        socket.broadcast.emit('message',{ message, from: socket.id })
    })
})

server.listen(4000)

console.log('Server is running on port 4000')