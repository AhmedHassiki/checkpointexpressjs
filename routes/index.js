const express = require('express');
const router = express.Router();

//creating home router
router.get('/', (req, res)=>{
    res.render('home');
})
//creating services router
router.get('/services', (req,res)=>{
    res.render('services');
})
// creating contact router
router.get('/contact', (req, res)=>{
    res.render('contact');
});

module.exports = router;