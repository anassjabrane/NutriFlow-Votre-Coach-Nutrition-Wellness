async function getRecipes(params) {
    let x =await fetch('https://dummyjson.com/recipes');
    let y = await x.json();

    console.log(y);
}


