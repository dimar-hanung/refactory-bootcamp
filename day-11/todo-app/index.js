const express   = require('express')
const pug       = require('pug');
const mongoose  = require('mongoose');
const bodyParser= require('body-parser')
const list     = require('./routes/list');

const app   = express()
const port  = 3000

// Menyambungkan ke database
mongoose.connect("mongodb://localhost:27017/todo-app", {
  useNewUrlParser: true,
  useFindAndModify:false,
  useUnifiedTopology: true,
  useCreateIndex:true
});
app.use(bodyParser.urlencoded({ extended: true }))

// Set View engine template menjadi pug
app.set('view engine', 'pug')
app.use(express.static("public"));
app.use(list)

app.get('/tambah', (req, res) => res.render("add"))
app.get('/edit', (req, res) => res.render("edit"))
  
app.listen(port, () => {
  console.log(`todo app listening at http://localhost:${port}`)
})

