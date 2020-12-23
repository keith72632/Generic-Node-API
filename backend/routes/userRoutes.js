const express = require('express');
const router = express.Router();
const { 
    getAllUsers,
    addUser, 
    updateUser, 
    deleteUser,
    authUser 
} = require('../controllers/usersControllers')

router.route('/')
    .get(getAllUsers)
    .post(addUser)

router.route('/:id')
    .put(updateUser)
    .delete(deleteUser)
router.route('/login')
    .post(authUser)

module.exports = router;