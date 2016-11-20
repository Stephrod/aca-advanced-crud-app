// TODO: Add your controller logic here.
const PostModel = require('../models/PostModel');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const PostsController = {

  list: function(req, res, next){
    PostModel.find().exec()
    .then(posts => res.render('posts', {posts}))
    .catch(err => next(err))
  },

  show: function(req, res, next){
    PostModel.findById(req.params.id).exec()
    .then(post => res.render('post', {post}))
    .catch(err => next(err))
  },

  form: function(req, res, next){
    res.render('post_form', {title: 'New Post'})
  },

  create: function(req, res, next){
    new PostModel ({
      title: req.body.title,
      author: req.body.author,
      date: req.body.date,
      text: req.body.text,
    }).save()
      .then(res.redirect('/posts'))
      .catch(err => next(err))
  },

  edit: function(req, res, next){
    PostModel.findById({_id: req.params.id}).exec()
    .then(post => res.render('post_edit_form', {post}))
    .catch(err => next())
  },

  update: function(req, res, next) {
    PostModel.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        author: req.body.author,
        date: req.body.date,
        text: req.body.text,
      }, {new: true}).exec()
      // {new: true, runValidators: true}).exec()
        .then(res.redirect('/posts'))
        .catch(err => next(err))
      },

  remove: function(req,res, next){
    PostModel.findByIdAndRemove({_id:req.params.id}).exec()
    .then(res.redirect('/posts'))
    .catch(err => next(err))
  }
};

module.exports = PostsController
