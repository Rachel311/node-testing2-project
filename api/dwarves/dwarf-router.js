const express = require('express');
const Dwarf = require('./dwarf-model');
const router = express.Router();

router.get('/dwarf', (req, res, next) => {
    try {
        const dwarf = Dwarf.getAll()
        res.status(200).json(dwarf)
    } catch (err) {
        next(err)
    }
});

router.get('/dwarf/:id', (req, res, next) => {
res.end()
});

router.post('/dwarf', (req, res, next) => {
    try {
        if(!req.body.name) return res.status(422).end()
        res.status(201).json(Dwarf.insert(req.body))
    } catch (err) {
        next(err)
    }
});

router.delete('/dwarf/:id', (req, res, next)=>{
    res.end()
});

module.exports = router;