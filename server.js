const express=require('express')
const dotenv=require('dotenv').config()
const app= express()
const port= process.env.PORT || 5000


app.use(express.json());
app.use(express.urlencoded({extended: true}))
// Endpoints
app.use('/api/utilisateurs', require('./backend/Routers/usersRoute'))

app.listen(port,
    ()=>console.log(`Serveur started on port ${port}`))