const express = require('express');
const router = express.Router();
const { getAllUsers, addUser } = require('../controllers/usersControllers')

router.route('/')
    .get(getAllUsers)
    .post(addUser)
module.exports = router;