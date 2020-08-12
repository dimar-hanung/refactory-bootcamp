const express = require('express')
const axios = require('axios');
const { response } = require('express');
const app = express()
const pug = require('pug');
const port = 3000
app.set('view engine', 'pug');
app.get('/', (req, res) => {
  res.send('Halo Express')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const fetchuser = async () =>{

    return axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => res.data)
    .catch(err => err)

}

app.get('/user', async (req, response) => {
    const userList = await fetchuser()
    .then(res => res)
    .catch(err => console.log(err))
    response.json(userList) 
    // response.json(userList)
  })
  
  app.get('/pug', (req, res) => {
    res.render("hello")
  })

 

// Compile the source code
const compiledFunction = pug.compileFile('template.pug');

// Render a set of data
const a = compiledFunction({
    name: 'Timothy'
  })

  const b = compiledFunction({
    name: 'Forbes'
  })
// "<p>Timothy's Pug source code!</p>"

// Render another set of data

// "<p>Forbes's Pug source code!</p>"