const express = require('express');
let {Post} = require('../db/models');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.redirect('/posts');
});

router.get('/posts', async function (req, res) {
  let posts = await Post.findAll({ order: [['id', 'DESC']]});
  res.render('index', { posts });
});

router.post('/posts/:id/vote', async function (req, res) {
  let findPost = await Post.findOne({where:{id:req.params.id}});
  await findPost.increment('votes', { by: 1 });

  res.redirect('/posts');
});

router.delete('/:id', async function (req, res, next) {
  // Создайте здесь логику для удаления постов
});

router.post('/posts', async function (req, res) {
   await Post.create({ title: req.body.title, username: 'User', commentCount: Math.floor(Math.random() * 1000) });
  res.redirect('/posts');
});

router.get('/posts/:id', async function (req, res) {
  let post = await Post.findOne({where:{id:req.params.id}});

  res.render('post', { post });
});

module.exports = router;
