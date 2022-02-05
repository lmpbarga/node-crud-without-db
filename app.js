const express = require('express')
const app = express()
const hostname = 'localhost';
const port = 3000

const users = [
  {
    id: "1",
    name: "1"
  },
  {
    id: "2",
    name: "2"
  },
  {
    id: "3",
    name: "3"
  },
]

app.use(express.json())

app.get('/users', (req, res) => {
  res.send(users)
})

app.post('/user', function (req, res) {
  users.push(req.body)
  res.sendStatus(200)
})

app.get('/user/:id', function (req, res) {
  const { id } = req.params
  const user = users.find(user => user.id === id)

  res.status(200).send(user)
})

app.put('/user/:id', function (req, res) {
  const { id } = req.params
  const userNewData = req.body
  const userIndex = users.findIndex(user => user.id === id)

  if(userIndex && userNewData) {
    users.splice(userIndex, 1);
    users.push(req.body)
  }

  res.status(200).send(req.body)
})

app.delete('/user/:id', function (req, res) {
  const { id } = req.params
  const userIndex = users.findIndex(user => user.id === id)
  if(userIndex !== -1){``
    users.splice(userIndex, 1);
  }
  res.sendStatus(200)
})


app.listen(port, () => {
  console.log(`Example app listening on port http://${hostname}:${port}/`)
})