const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);

describe('recipe tests', () => {
	it('returns all the recipes', async () => {
		const { status, type, body } = await request.get('/api/recipes');

		expect(status).toBe(200);
		expect(type).toBe('application/json');
		expect(body).toHaveLength(10);
	});

	it('returns a results for valid search', async () => {
		const { status, type, body } = await request.get(
			'/api/recipes/search?q=dessert'
		);

		expect(status).toBe(200);
		expect(type).toBe('application/json');
		expect(body).toHaveLength(3);
		expect(body[0].name).toBe('American Pancakes');
		expect(body[0].keywords).toContain('breakfast');
	});

	it('returns a results for valid search', async () => {
		const { status, type, body } = await request.get(
			'/api/recipes/search?q=nothing'
		);

		expect(status).toBe(404);
		expect(type).toBe('application/json');
		expect(body.message).toContain('no recipes');
	});

	it('returns a random recipe', async () => {
		const { status, type, body } = await request.get('/api/recipes/random');

		expect(status).toBe(200);
		expect(type).toBe('application/json');
		expect(body).toBeTruthy();
		expect(body.name).toBeDefined();
		expect(body.ingredients.length).toBeGreaterThanOrEqual(1);
	});
});
