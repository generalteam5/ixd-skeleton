
/*
 * GET home page.
 */
express=require('express');
router=express.Router();


router.get('/', function(req, res){
  res.render('index');
});

router.get('/overview', function(req, res){
  res.render('overview');
});