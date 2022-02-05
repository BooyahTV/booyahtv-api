const express = require('express'),
    router = express.Router();

const fs = require('fs')
const path = require('path')


var cristianghost = []
var moaigr = []
var dylantero = []
var xcry = []

fs.readFile(path.resolve(__dirname, '../points/cristianghost.json'), 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    cristianghost = JSON.parse(data)
})

fs.readFile(path.resolve(__dirname, '../points/moaigr.json'), 'utf8' , (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    moaigr = JSON.parse(data)
})

fs.readFile(path.resolve(__dirname, '../points/dylantero.json'), 'utf8' , (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    dylantero = JSON.parse(data)
})
fs.readFile(path.resolve(__dirname, '../points/xcry.json'), 'utf8' , (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    xcry = JSON.parse(data)
})


router.get('/cristianghost', function(req, res){
    res.json(cristianghost)
})

router.get('/moaigr', function(req, res){
    res.json(moaigr)
})

router.get('/dylanterolive', function(req, res){
    res.json(dylantero)
})
router.get('/xcry', function(req, res){
    res.json(xcry)
})

module.exports = router;