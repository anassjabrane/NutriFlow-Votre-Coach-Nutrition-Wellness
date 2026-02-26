async function getRecipes(params) {
    let x =await fetch('https://dummyjson.com/recipes');
    let y = await x.json();

    console.log(y);

}
getRecipes();


function displayRecipes(recipes) {
    const app = document.getElementById("app");

    // Khwi l-container bach may-t-3awduch les cartes
    app.innerHTML="";

    for (let i=0; i<recipes.length; i++){

        // recette li fuha noba 
        
        let recipe = recipes[i];
        
        // ajouter la carte de html 

        const card =  `
        <div class "recipes-card">
             <img src="${recipe.img}" alt="§{recipe.name}">
            <h1>${recipe.name}</h1>
            <p>${recipe.temps-preparation}</p>

        </div> `;

        app.innerHTML=app.innerHTML + card;

    }
}

