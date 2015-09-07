var express = require('express'),
    router = express.Router();

var navs = [ {name: 'Angular', value: 'angular'},
             {name: 'Backbone', value: 'backbone'},
             {name: 'React', value: 'react'},
             {name: 'Misc', value: 'misc'}
           ];

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'MVC Demos', navs: navs });
});
router.get('/angular', function (req, res) {
  res.render('angular', { title: 'Angular Demos', navs: navs });
});
router.get('/backbone', function (req, res) {
  res.render('backbone', { title: 'Backbone Demos', navs: navs });
});
router.get('/react', function (req, res) {
  res.render('react', { title: 'React Demos', navs: navs });
});
router.get('/mva', function (req, res) {
  res.render('mva', { title: 'MVA Demos', navs: navs });
});

module.exports = router;
