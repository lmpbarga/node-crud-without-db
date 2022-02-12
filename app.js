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

app.post('/users', function (req, res) {
  users.push(req.body)
  res.sendStatus(200)
})

app.get('/users/:id', function (req, res) {
  const { id } = req.params
  const user = users.find(user => user.id === id)

  res.status(200).send(user)
})

app.put('/users/:id', function (req, res) {
  const { id } = req.params
  const {name} = req.body
  const userIndex = users.findIndex(user => user.id === id)

  if(userIndex) {
    users.splice(userIndex, 1);
    users.push({
      id,
      name
    })
  }

  res.sendStatus(200)
})

app.delete('/users/:id', function (req, res) {
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