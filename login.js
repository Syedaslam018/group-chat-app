const express = require('express') 

const login = express.Router();

login.get('/login',(req, res, next) => {
    res.send('<form action="/" onsubmit = "localStorage.setItem(`username`, document.getElementById(`username`).value)"  method="POST"><input type="email" name="username" id="username"><button type="submit">Login</button></form>')
})


module.exports = login