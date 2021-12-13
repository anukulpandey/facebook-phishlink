const express = require('express');
const app = express()
const port = 3000
let ejs = require('ejs');
app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded()); 
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/login', (req, res) => {
    console.log('Username:'+req.body.email+'\n');
    console.log('Password:'+req.body.passwd);
  })

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})