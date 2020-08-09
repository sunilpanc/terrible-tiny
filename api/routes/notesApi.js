const express = require('express');
const app = require('../app');
const router = express.Router();

router.get('/',function(req,res){
    res.send('Api is working');
})
// let number=null;
// app.post('/notesApi', function(req,res){
//     number = req.body.number;
// })
// console.log(number);

module.exports = router;