const router = require('express').Router();
const recipes = require('../data');

router.get('/', (req, res) => {
	res.json(recipes);
});

router.get('/random', (req, res) => {
	const randomIndex = Math.floor(Math.random() * recipes.length);
	const recipe = recipes[randomIndex];
	res.json(recipe);
});

module.exports = router;
