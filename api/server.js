const express = require('express');
const cors = require('cors');

const dwarfRouter = require('./dwarves/dwarf-router');
const server = express();

server.use(express.json());
server.use(cors());


server.use('/api', dwarfRouter)

server.get('/', (req, res) => {
    res.status(201).json({
        message: 'Bilbos Companions',
        
    })
})

module.exports = server