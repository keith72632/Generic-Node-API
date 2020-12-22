const express = require('express');
const User = require('../models/userModel');
const router = express.Router();

//GET users

const getAllUsers = async(req, res) => {
    const users = await Users.find({});

    res.json(users)
}

const addUser = async(req, res) => {
    const { firstName, lastName } = req.body;
    const user = new User({
        firstName,
        lastName
    })
    await user.save();
    res.json(user);
}
module.exports.getAllUsers = getAllUsers
module.exports.addUser = addUser