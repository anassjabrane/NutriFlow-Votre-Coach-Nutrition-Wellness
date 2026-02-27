let allrecipes =[];
async function getRecipes(params) {
    const app = document.getElementById("app");
    app.innerHTML = '<div class="chargement-texte">Chargement des recettes... <div/>'
  try{ 
  let x = await fetch("https://dummyjson.com/recipes");
  let y = await x.json();
  allrecipes = y.recipes; 

        displayRecipes(allrecipes);

  console.log(y);
  displayRecipes(y.recipes);
}
catch(error){
    console.error=(error);
    app.innerHTML='<div class="chargement-texte">Chargement des recettes...<div/>'


}
}
// displayRecipes(y.recipes);

function displayRecipes(recipes) {
  const app = document.getElementById("app");

  // Khwi l-container bach may-t-3awduch les cartes
   app.innerHTML = "";

  for (let i = 0; i < recipes.length; i++) {
    // recette li fuha noba

    let recipe = recipes[i];
    let badgeColor = "";

    if (recipe.caloriesPerServing < 400) {
      badgeColor = "low";
    } else if (
      recipe.caloriesPerServing <= 800 &&
      recipe.caloriesPerServing >= 400
    ) {
      badgeColor = "medium";
    } else {
      badgeColor = "medium";
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
