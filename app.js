const express = require('express')
const fs = require('fs')

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());
const content = [];

app.get('/login',(req, res, next) => {
    res.send('<form action="/" onsubmit = "localStorage.setItem(`username`, document.getElementById(`username`).value)"  method="POST"><input type="email" name="username" id="username"><button type="submit">Login</button></form>')
})

app.post('/', (req, res, next) => {

    
    console.log(`{${req.body.username}:${req.body.title}}`)
   // console.log(content);
   
   const message = (req.body.username && req.body.title)?`{${req.body.username}:${req.body.title}}` :'';
   fs.appendFile('message.txt', message, err => {
       if(err) {
           console.log(err);
       }
   })
   res.redirect('/')
})

app.get('/', (req,res,next) => {
    fs.readFile('message.txt', (err,data) => {
        if(err) throw err;
    
     res.send(
            `${data}`+
            '<form action="/" method="POST" onsubmit="document.getElementById(`username`).value = localStorage.getItem(`username`)"><input type="text" name="title"><input type="hidden" id="username" name="username"><button type="submit">Enter Message</button></form>'
            )
    
        })
    })


    // console.log(req.body)


app.listen(4000);