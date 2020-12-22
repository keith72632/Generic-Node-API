const mongoose = require('mongoose')
const express = require('express')

const connectDb = async() => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI, {
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

export default connectDb