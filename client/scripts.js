// The console.log is because we did not manage to return anything as of yet
const recipes = require("../server/data/main");

const getMainRecipes = async () => {
    const response = await fetch("http://localhost:8080/api/recipes");
    const data = await response.json();
    console.log(data);
    return data;
};

const getRandomRecipe = async () => {
    const response = await fetch("http://localhost:8080/api/recipes/random");
    const data = await response.json();
    console.log(data);
    return data;
};

const searchRecipes = async (query) => {
    const response = await fetch(
        `http://localhost:8080/api/recipes/search?q=${query}`
    );
    const data = await response.json();
    console.log(data);
    return data;
};

const resultsBtn = document.querySelector("#resultsBtn");
const randomBtn = document.querySelector("#randomBtn");
const searchBar = document.querySelector("#searchBar");

resultsBtn.addEventListener("click", resultRecipes);
randomBtn.addEventListener("click", getRandomRecipe);
searchBar.addEventListener("click", searchRecipes);

getMainRecipes();
getRandomRecipe();
searchRecipes("chicken");

// function resultRecipes() {
//     let resultsContainer = document.querySelector("#resultsContainer");
//     const recipes = getMainRecipes();

//     recipes.map((recipe) => {
//         const link = document.createElement('a');
//         link.appendChild(recipe.name);
//         link.title = recipe.name;
//         link.href = recipe.recipe;
//         resultsContainer.appendChild(link);
//     });
// }
