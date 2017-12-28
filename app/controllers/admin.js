const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Article = mongoose.model('Article');

module.exports = (app) => {
  app.use('/admin', router);
};
// blog
router.get('/', (req, res, next) => {
  Article.find((err, articles) => {
    if (err) return next(err);
    res.render('admin/index', {
      title: 'Node-Admin Home',
      articles: articles,
      pretty: true,
    });
  });
});
// about
router.get('/posts/list', (req, res, next) => {
  res.render('admin/index', {
    title: 'Node-Blog About',
    pretty: true,
  });
});
// contact
router.get('/contact', (req, res, next) => {
  res.render('admin/index', {
    title: 'Node-Blog Contact',
    pretty: true,
  });
});
