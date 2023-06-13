const express = require('express')
const router = express.Router();
const fs = require('fs')


router.post('/', (req, res, next) => {
    const message = (req.body.username && req.body.title)?`{${req.body.username}:${req.body.title}}` :'';
    fs.appendFile('chat.txt', message, err => {
        if(err) {
           console.log(err);
        }
    })
   res.redirect('/')
})

router.get('/', (req,res,next) => {
    fs.readFile('chat.txt', (err,data) => {
        if(err) throw err;
    
     res.send(
            `${data}`+
            '<form action="/" method="POST" onsubmit="document.getElementById(`username`).value = localStorage.getItem(`username`)"><input type="text" name="title"><input type="hidden" id="username" name="username"><button type="submit">Enter Message</button></form>'
            )
    })
})


    module.exports = router