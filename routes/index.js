var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  const category = req.query.category;
  console.log(category)
  // const jokeData = await fetch('https://api.chucknorris.io/jokes/random').then(res => res.json());
  const jokeData = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`).then(res => res.json());
  const jokeDataCategory = await fetch('https://api.chucknorris.io/jokes/categories').then(res => res.json());
  // jokeData.joke = await fetch(jokeData.value).then(res => res.json());
  res.render('index', { 
    title: ' CHUCKNORRIS',
    jokeData,
    jokeDataCategory,
    category
  
  });
});

module.exports = router;
