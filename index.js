
const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const path = require('path')
const cors = require('cors')

app.use(cors())

var cristianghost = []

app.get('/api/points/cristianghost', (req, res) => {
  res.json(cristianghost)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

fs.readFile(path.resolve(__dirname, 'points.json'), 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  cristianghost = JSON.parse(data)
  //console.log(users)
})