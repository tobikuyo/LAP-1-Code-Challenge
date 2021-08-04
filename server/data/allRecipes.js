const recipes = [
	{
		name: 'Chicken Vesuvio',
		image: 'https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg',
		recipe: 'http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html',
		source: 'Serious Eats',
		totalTime: 60,
		calories: 428,
		keywords: ['main', 'chicken', 'lunch', 'dinner'],
		ingredients: [
			'1/2 cup olive oil',
			'5 cloves garlic, peeled',
			'2 large russet potatoes, peeled and cut into chunks',
			'1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)',
			'3/4 cup white wine',
			'3/4 cup chicken stock',
			'3 tablespoons chopped parsley',
			'1 tablespoon dried oregano',
			'Salt and pepper',
			'1 cup frozen peas, thawed'
		]
	},
	{
		name: 'Baked Chicken',
		image: 'https://bit.ly/3A4VF3Z',
		recipe: 'http://www.marthastewart.com/318981/baked-chicken',
		source: 'Martha Stewart',
		totalTime: 50,
		calories: 901,
		keywords: ['main', 'chicken', 'lunch', 'dinner'],
		ingredients: [
			'6 bone-in chicken breast halves, or 6 chicken thighs and wings, skin-on',
			'1/2 teaspoon coarse salt',
			'1/2 teaspoon Mrs. Dash seasoning',
			'1/4 teaspoon freshly ground black pepper'
		]
	},
	{
		name: 'Chorizo-Lemon Butter',
		image: 'https://www.edamam.com/web-img/6f7/6f7e4bdb2c411d115e4ce1921d70bb9c.jpg',
		recipe: 'https://www.epicurious.com/recipes/food/views/chorizo-lemon-butter-51241480',
		source: 'Epicurious',
		totalTime: 45,
		calories: 286,
		keywords: ['main', 'chorizo', 'lunch', 'dinner'],
		ingredients: [
			'3 ounces Spanish chorizo, finely chopped',
			'1 stick of butter, softened',
			'Zest and juice of 1 lemon',
			'1/2 cup flat-leaf parsley leaves, coarsely chopped',
			'Salt'
		]
	},
	{
		name: 'Chilli Con Carne',
		image: 'https://bit.ly/3fpFzKm',
		recipe: 'https://www.bbcgoodfood.com/recipes/chilli-con-carne-recipe',
		keywords: ['main', 'beef', 'rice', 'tomato', 'lunch', 'dinner'],
		source: 'BBC Good Food',
		totalTime: 45,
		calories: 286,
		ingredients: [
			'2 sticks of celery',
			'olive oil',
			'400 g basmati rice',
			'sea salt and freshly ground black pepper',
			'2 x 400g tins of chopped tomatoes',
			'2 medium onions',
			'2 cloves of garlic',
			'1 x 230g tub of guacamole',
			'2 red peppers',
			'2 tablespoons balsamic vinegar',
			'2 medium carrots',
			'1 small bunch of fresh coriander',
			'1 lime',
			'1 heaped teaspoon',
			'1 x 400g tin of chickpeas',
			'1 x 500g tub of natural yoghurt',
			'1 x 400g tin of red kidney beans',
			'500 g good quality minced beef',
			'1 heaped teaspoon ground cinnamon',
			'ground cumin',
			'1 heaped teaspoon chilli powder'
		]
	},
	{
		name: 'Cottage Pie',
		image: 'https://www.edamam.com/web-img/0e3/0e309cd8f58bf400b204a88c2ab658c1.jpg',
		recipe: 'http://www.bbcgoodfood.com/recipes/775643/cottage-pie',
		source: 'BBC Good Food',
		totalTime: 95,
		calories: 542,
		keywords: ['main', 'beef', 'potato', 'lunch', 'dinner'],
		ingredients: [
			'3 tbsp olive oil',
			'1¼kg beef mince',
			'2 onions, finely chopped',
			'3 carrots, chopped',
			'3 celery sticks, chopped',
			'2 garlic clove, finely chopped',
			'3 tbsp plain flour',
			'1 tbsp tomato purée',
			'large glass red wine (optional)',
			'850ml beef stock',
			'4 tbsp Worcestershire sauce',
			'few thyme sprigs',
			'2 bay leaves',
			'1.8kg potatoes, chopped',
			'225ml milk',
			'25g butter',
			'200g strong cheddar, grated',
			'freshly grated nutmeg'
		]
	},
	{
		name: 'Lamb Curry',
		image: 'https://bit.ly/3jhD124',
		recipe: 'http://simplyrecipes.com/recipes/lamb_curry/',
		source: 'Simply Recipes',
		totalTime: 90,
		calories: 328,
		keywords: ['main', 'lamb', 'curry', 'lunch', 'dinner'],
		ingredients: [
			'2 lamb shanks AND 2 lamb shoulder steaks (yielding about 2 lbs of meat without the bone)',
			'1 large onions, chopped, about 3 1/2 cups',
			'3-5 cloves of garlic, crushed',
			'2-3 Tbsp ghee (clarified butter) or 1 Tbsp olive oil with butter',
			'2-3 Tbsp curry powder',
			'2 tsp salt',
			'1 Tbsp black pepper',
			'1 Tbsp ground coriander',
			'1 Tbsp cumin',
			'1 tsp fresh rosemary, chopped',
			'1 tsp thyme, dried',
			'1/2 Meyer lemon sliced (with rind)',
			'2 peeled and chopped apples (tart green granny smith if possible), about 2 cups',
			'1/4 cup of raisins (my addition to Maria',
			'1 1/2 cups chicken broth*',
			'8-12 small potatoes, quartered, about 1 1/2 pounds',
			'Chutney, yogurt, rice'
		]
	},
	{
		name: 'Salmon & Spinach with Tartare Cream',
		image: 'https://www.edamam.com/web-img/52c/52cfc0dc7ddf15bf53b0780662c90324.jpg',
		recipe: 'https://www.bbcgoodfood.com/recipes/salmon-spinach-tartare-cream',
		source: 'BBC Good Food',
		totalTime: 20,
		calories: 256,
		keywords: ['main', 'salmon', 'spinach', 'lunch', 'dinner'],
		ingredients: [
			'1 tsp sunflower or vegetable oil',
			'2 skinless salmon fillets',
			'250g bag spinach',
			'2 tbsp reduced-fat crème fraîche',
			'juice ½ lemon',
			'1 tsp caper, drained',
			'2 tbsp flat-leaf parsley, chopped',
			'lemon wedges, to serve'
		]
	},
	{
		name: 'Rosemary Pork Chops',
		image: 'https://www.edamam.com/web-img/598/598fd3761c79153d3c5913afc9bdd24f.jpg',
		recipe: 'https://www.epicurious.com/recipes/food/views/rosemary-pork-chops-240946',
		source: 'Epicurious',
		totalTime: 65,
		calories: 467,
		keywords: ['main', 'pork', 'lunch', 'dinner'],
		ingredients: [
			'3 garlic cloves',
			'2 teaspoons coarsely chopped rosemary',
			'3 tablespoons olive oil',
			'4 (1/2-inch-thick) bone-in rib pork chops (1 1/2 pounds)',
			'Accompaniment: lemon wedges'
		]
	},
	{
		name: 'Rib-eye with Steak Pan Potatoes & Peas',
		image: 'https://www.edamam.com/web-img/e22/e2228ce8c7f449fae3bc11b7cec14488.jpg',
		recipe: 'https://www.bbcgoodfood.com/recipes/rib-eye-steak-pan-potatoes-peas',
		source: 'BBC Good Food',
		totalTime: 30,
		calories: 536,
		keywords: ['main', 'steak', 'beef', 'potato', 'pea', 'dinner'],
		ingredients: [
			'2 rib-eye steaks , about 300g each and 2cm thick',
			'2 garlic cloves , grated',
			'2 tbsp red wine vinegar',
			'12 new potatoes , quartered',
			'4 tbsp olive oil , plus extra for drizzling',
			'25g butter',
			'50g frozen peas or fresh',
			'8 radishes , sliced, any leaves picked and washed'
		]
	},
	{
		name: 'Falafel Burgers',
		image: 'https://bit.ly/3yokqb5',
		recipe: 'https://www.chowhound.com/recipes/falafel-burgers-31319',
		source: 'Chowhound',
		totalTime: 90,
		calories: 468,
		keywords: ['main', 'vegatarian', 'burger', 'falafel', 'lunch', 'dinner'],
		ingredients: [
			'1 1/2 cups dried garbanzo beans, also known as chickpeas',
			'1/2 medium red onion, coarsely chopped',
			'4 medium garlic cloves, peeled',
			'1 cup finely chopped cilantro',
			'1 cup finely chopped flat-leaf parsley',
			'1 tablespoon freshly squeezed lemon juice',
			'1 tablespoon ground cumin',
			'1 tablespoon chili powder',
			'1 1/2 teaspoons kosher salt',
			'1 teaspoon baking powder',
			'3 tablespoons vegetable oil',
			'6 brioche or hamburger buns (see Game Plan note), split',
			'1/2 cup plain Greek yogurt',
			'6 tablespoons tomato jam (optional, see Game Plan note)',
			'Lettuce leaves'
		]
	},

	{
		name: 'American Pancakes',
		image: 'https://bit.ly/3ChtZuz',
		recipe: 'http://www.bbcgoodfood.com/recipes/335615/',
		source: 'BBC Good Food',
		totalTime: 15,
		calories: 376,
		keywords: ['breakfast', 'pancakes', 'dessert'],
		ingredients: [
			'100 g Self Raising Flour',
			'150 ml Cold Milk',
			'2 tbsp Sugar',
			'1 beaten Egg'
		]
	},
	{
		name: 'Full English Breakfast',
		image: 'https://www.edamam.com/web-img/d0e/d0ea495c1a04eff9f2b808e339bd5d0d.jpg',
		recipe: 'http://www.jamieoliver.com/recipes/pork-recipes/the-full-english',
		source: 'Jamie Oliver',
		totalTime: 20,
		calories: 427,
		keywords: ['breakfast', 'english', 'bacon', 'beans', 'sausages', 'eggs'],
		ingredients: [
			'250 g smoked dry cured back bacon',
			'a loaf of thick sliced bread for toasting',
			'2 small tomatoes scored on top',
			'170 g black pudding sliced',
			'6 eggs preferably free range or organic cracked into a bowl and beaten',
			'sea salt and freshly ground black pepper',
			'1 x 420g can of baked beans',
			'2 knobs of butter',
			'4 field mushrooms wiped',
			'6 good quality pork and leek sausages'
		]
	},
	{
		name: 'Easy Chocolate Molten Cakes',
		image: 'https://www.edamam.com/web-img/ef5/ef53a025e73cf2ed5de74c3f000d0d40.jpg',
		recipe: 'https://www.bbcgoodfood.com/recipes/easy-chocolate-molten-cakes',
		source: 'BBC Good Food',
		totalTime: 35,
		calories: 475,
		keywords: ['dessert', 'cake', 'chocolate'],
		ingredients: [
			'100g butter, plus extra to grease',
			'100g dark chocolate, chopped',
			'150g light brown soft sugar',
			'3 large eggs',
			'½ tsp vanilla extract',
			'50g plain flour',
			'single cream, to serve'
		]
	},
	{
		name: 'Salted Chocolate and Hazelnut Brownies',
		image: 'https://www.edamam.com/web-img/543/54350e8e9e3537f902fc8eedf9703120.jpg',
		recipe: 'https://www.bbcgoodfood.com/recipes/easy-chocolate-molten-cakes',
		source: 'BBC Good Food',
		totalTime: 55,
		calories: 475,
		keywords: ['dessert', 'brownie', 'chocolate', 'hazelnut'],
		ingredients: [
			'100g slightly salted butter , cut into small pieces, plus extra for the tin',
			'200g 70% dark chocolate , broken into chunks',
			'150g chocolate and hazelnut spread',
			'3 eggs , beaten',
			'200g golden caster sugar',
			'150g plain flour',
			'100g toasted pecan nuts , roughly chopped',
			'ice cream and caramel sauce, to serve'
		]
	},
	{
		name: 'Sesame, Halloumi and Courgette Fritters with Chilli Honey Drizzle',
		image: 'https://www.edamam.com/web-img/d3f/d3f14c62ca69f6866c20fb211ddad64f.jpg',
		recipe: 'https://www.bbcgoodfood.com/recipes/sesame-halloumi-courgette-fritters-chilli-honey-drizzle',
		source: 'BBC Good Food',
		totalTime: 23,
		calories: 354,
		keywords: ['starter', 'halloumi', 'courgette', 'fritters', 'honey'],
		ingredients: [
			'2 medium courgettes , grated',
			'½ tsp sea salt , plus extra to serve',
			'30g self-raising flour',
			'20g rice or cornflour',
			'2 tbsp toasted sesame seeds',
			'¼ tsp ground white pepper',
			'2 tsp mint leaves , finely chopped',
			'80g halloumi , grated',
			'2 large eggs',
			'2 spring onions , finely sliced',
			'vegetable oil , for frying',
			'2 tbsp honey',
			'½ tsp pul biber or other chilli flakes',
			'2 lemons , zested'
		]
	},
	{
		name: 'Crab Cakes',
		image: 'https://bit.ly/3CgAVrS',
		recipe: 'http://www.seriouseats.com/recipes/2013/04/the-food-lab-crab-cakes-recipe.html',
		source: 'Serious Eats',
		totalTime: 23,
		calories: 354,
		keywords: ['starter', 'crab', 'cakes', 'tartare'],
		ingredients: [
			'1 pound fresh lump or jumbo lump crab meat, picked over',
			'2 tablespoons mayonnaise',
			'2 tablespoons chopped chives, tarragon, parsley, or a mix (optional)',
			'2 large eggs, divided',
			'1 1/2 cups panko-style bread crumbs',
			'3 tablespoons canola or vegetable oil',
			'3 tablespoons unsalted butter',
			'Kosher salt',
			'1 recipe Extra Tangy Tartare Sauce or lemon wedges for serving'
		]
	}
];

module.exports = recipes;
