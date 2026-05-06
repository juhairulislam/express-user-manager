const express = require('express')
const app = express()
const cors = require('cors')

const port =process.env.PORT || 8000 ;

app.use(cors()) ;
app.use(express.json()) ;


app.get('/', (req, res) => {
  res.send('Hello from home World!')
})

const users = [
    {
    id:1 ,
    name: 'joan doe' ,
    age: 25,
    email: 'joan@gmail.com'
} ,

{ id:2 ,
    name: 'hoan doe' ,
    age: 27,
    email: 'hoan@gmail.com'

} ,
{
     id:3 ,
    name: 'toan doe' ,
    age: 28,
    email: 'toan@gmail.com'
},
{
     id:4 ,
    name: 'coan doe' ,
    age: 18,
    email: 'coan@gmail.com'
},
{
     id:5 ,
    name: 'joan doe' ,
    age: 38,
    email: 'joan@gmail.com'
}

]

app.get('/users', (req, res) => {
  res.send(users)
})

app.post('/users' , (req, res) =>{

    console.log('data in the request' , req.body) ;

    const newUser = req.body ;
    newUser.id = newUser.length + 1 ;
    users.push(newUser)

    res.send({success: true , data: newUser , message: 'User added successfully'}) 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
