const express = require('express')
const app = express();
const mongoose = require('mongoose')
require('dotenv').config()
const userRouter = require('./routes/userRoutes')
const connectDb = async() => {
    try{
        const connect = await mongoose.connect('mongodb+srv://thinmint:tigers10@clusterk.98gsi.mongodb.net/Testing?retryWrites=true&w=majority', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: true
        })
        console.log(`MongoDb connected ${connect.connection.host}`)
    } catch(error) {
        console.log(error)
    }
    
};


app.use(express.json());
app.use('/api/users', userRouter);
connectDb()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))


