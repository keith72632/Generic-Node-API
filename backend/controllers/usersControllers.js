const express = require('express');
const User = require('../models/userModel');
const router = express.Router();
const generateToken  = require('../middleware/token')

//GET users

const getAllUsers = async(req, res) => {
    const users = await Users.find({});

    res.json(users)
}

const addUser = async(req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        const user = new User({
            firstName,
            lastName,
            email,
            password
        })
        await user.save();
        res.json(user);
    } catch(error) {
        res.status(404)
        throw new Error('Error')
    }
    
}

const updateUser = async(req, res) => {
    const { firstName, lastName, email, password } = req.body;
    
    const user = await User.findByIdAndUpdate(req.params.id, {
        firstName,
        lastName,
        email,
        password
    });
    res.json(user)
}

const deleteUser = async(req, res) => {
    try {
        const user = await User.findByIdAndRemove(req.params.id);
        res.send(user)
    } catch(error) {
        res.status(403)
        throw new Error(error)
    }
}

const authUser = async(req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({
        email
    });
    if(user && user.matchPassword(password)) {
        res.status(200).json({
            firstName: user.firstName,
            email: user.email,
            id: user._id,
            password: user.password,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('No user')
    }
}

module.exports.getAllUsers = getAllUsers
module.exports.addUser = addUser
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser
module.exports.authUser = authUser
