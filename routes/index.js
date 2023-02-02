const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const Home = require('../views/Home');
const { Post } = require('../db/models');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.redirect('/posts');
});

router.get('/posts', async (req, res) => {
  const posts = await Post.findAll({ order: [['id', 'DESC']] });

  const home = React.createElement(Home, { posts });
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.post('/posts/:id/vote', async (req, res) => {
  const findPost = await Post.findOne({ where: { id: req.params.id } });
  await findPost.increment('votes', { by: 1 });
  res.json(findPost);
  // console.log('!!!findPost --->', findPost);
  // res.redirect('/posts');
});

router.delete('/:id', async (req, res) => {
  // Создайте здесь логику для удаления постов
});

router.post('/posts', async (req, res) => {
  await Post.create({ title: req.body.title, username: 'User', commentCount: Math.floor(Math.random() * 1000) });
  res.redirect('/posts');
});

router.get('/posts/:id', async (req, res) => {
  const post = await Post.findOne({ where: { id: req.params.id } });
  // Создайте и отрисуйте здесь React-компонент Post
});

module.exports = router;
