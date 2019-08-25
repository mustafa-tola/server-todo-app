const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')
app.use(cors())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET", "PUT", "POST", "DELETE", "OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, accesstoken");
    next();
})
var bodyParser = require('body-parser')
// parse application/json
app.use(bodyParser.json())


var todos = [
    {id: 1, title: "Do something 1", desc: "Hello World!"},
    {id: 2, title: "Do something 2", desc: "Hello World!"},
    {id: 3, title: "Do something 3", desc: "Hello World!"},
    {id: 4, title: "Do something 4", desc: "Hello World!"},
    {id: 5, title: "Do something 5", desc: "Hello World!"}

]

app.get('/get-todos', (req, res) => {
    res.send(todos)
})

app.post('/add-todo', (req, res) => {
    console.log('body: new todo ', req.body)
    // ADD NEW TODO IN TODOS
    todos.push(req.body)
    res.send(todos)
})


app.put('/update-todo', (req, res )=>{
    console.log('req', req)
    // write your update logic here
    let todoToUpdate = req.body
    todos = todos.map((todo) => {
        if (todo.id== todoToUpdate.id){
            return (todoToUpdate)
        }
        return(todo)
    })
    res.send(todos)
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))