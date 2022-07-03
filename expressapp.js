// const express = require('express')
import express from 'express';
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World.!')
})

app.get('/about', (req, res) => {
  res.send('This is an about page!')
})

app.listen(port, () => {
  console.log(`Examples app listening at http://localhost:${port}`)
})