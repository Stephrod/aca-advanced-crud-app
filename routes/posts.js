const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const PostModel = require('../models/PostModel');
const PostsController = require ('../controllers/PostsController');
// TODO: Add your routes to the route here.
router.get('/', PostsController.list);

router.get('/:id', PostsController.show);

router.post('/', PostsController.create);

router.put('/:id', PostsController.update);

router.delete('/:id', PostsController.remove);


module.exports = router
