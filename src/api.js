async function getRecipes(params) {
  let x = await fetch("https://dummyjson.com/recipes");
  let y = await x.json();

  console.log(y);
  displayRecipes(y.recipes);
}
// displayRecipes(y.recipes);

function displayRecipes(recipes) {
  const app = document.getElementById("app");

  // Khwi l-container bach may-t-3awduch les cartes
  app.innerHTML = "";

  for (let i = 0; i < recipes.length; i++) {
    // recette li fuha noba

    let recipe = recipes[i];
    let badgeColor = "green";

    if (recipe.caloriesPerServing < 400) {
      badgeColor = "green";
    } else if (
      recipe.caloriesPerServing <= 800 &&
      recipe.caloriesPerServing >= 400
    ) {
      badgeColor = "orange";
    } else {
      badgeColor = "red";
    }

    // ajouter la carte de html

    const card = `
        <div class="recipes-card">
             <img src="${recipe.image}" alt="${recipe.image}">
            <h1>${recipe.name}</h1>

            <span class="nutre-badge">${badgeColor}<p>${recipe.prepTimeMinutes}Kcal</p></span>

        </div> `;

    app.innerHTML = app.innerHTML + card;
  }
}
getRecipes();
