const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/PetBeltExam', {
    useNewUrlParser:true,
    useUnifiedTopology: true
})
.then(()=>{console.log('Connected to DB')})
.catch((err)=>{console.log(err)})