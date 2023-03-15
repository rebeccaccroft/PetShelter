const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

require('./config/mongoose.config')
require('./routes/pet.routes')(app)