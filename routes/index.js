var express = require('express'),
    router = express.Router();

var navs = [ {name: 'Angular', value: 'angular'},
             {name: 'Backbone', value: 'backbone'},
             {name: 'React', value: 'react'},
             {name: 'Misc', value: 'misc'}
           ];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MVC Demos', navs: navs });
});
router.get('/angular', function(req, res, next) {
  res.render('angular', { title: 'Angular', navs: navs });
});
router.get('/backbone', function(req, res, next) {
  res.render('backbone', { title: 'Backbone', navs: navs });
});
router.get('/react', function(req, res, next) {
  res.render('react', { title: 'React', navs: navs });
});
router.get('/mva', function(req, res, next) {
  res.render('mva', { title: 'MVA', navs: navs });
});

module.exports = router;
