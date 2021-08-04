const router = require('express').Router();
const mainRecipes = require('../data/main');
const recipes = require('../data/allRecipes');

router.get('/', (req, res) => {
	res.json(mainRecipes);
});

router.get('/search', (req, res) => {
	const { q: query } = req.query;
	const results = recipes.filter(recipe => recipe.keywords.includes(query));
	res.json(results);
});

router.get('/random', (req, res) => {
	const randomIndex = Math.floor(Math.random() * recipes.length);
	const recipe = recipes[randomIndex];
	res.json(recipe);
});

module.exports = router;
