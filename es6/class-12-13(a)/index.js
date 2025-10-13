const fetchData = async () => {
  try {

    const reponse = await fetch("https://dummyjson.com/recipes");
    return reponse.json();

  } catch (error) {
    // console.log(error);
    throw new Error(`ERRO in Data Fetch : ${error}`)

  }
}

const getData = async () => {
  try {
    const result = await fetchData()
    const recipes = result?.recipes;

    showRecipes(recipes);

  } catch (error) {
    throw new Error(`ERRO in GET Data  : ${error}`)

  }
}



getData()



//////////////////// show recipes

const showRecipes = (recipes) => {

  const recipeContainer = document.getElementById("recipeContainer");

  if (recipes && recipes.length > 0) {
    recipes.forEach(recipe => {

      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
   <img src="${recipe?.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${recipe?.name}</h5>
    <p class="card-text">Cusine: ${recipe?.cuisine}</p>
    <p class="card-text">Ratings: ${recipe?.rating}</p>
    <p class="card-text">Servings: ${recipe?.servings}</p>
    
 <a class="btn btn-danger" href="./detail.html?id=${recipe.id}">Recipe Details</a>


    <!-- Button trigger modal 
    <button onclick="showDetails(${recipe.id})" type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
     Recipe Details
   </button>
   -->
  </div>`


      recipeContainer.appendChild(card)
    });
  } else {
    recipeContainer.innerHTML = `
    <p class="fs-3 text-secondary fw-bolder">  Recipe not found </p>`
  }

}


///////////////////////// Recipe Details 

const detailImg = document.getElementById("detail-img");
const detailTitle = document.getElementById("detailTitle");
const detailTimings = document.getElementById("detailTimings");
const detailIng = document.getElementById("detail-ING");
const detailIns = document.getElementById("detail-ins");

const showDetails = async (id) => {

  let result = await fetchData();
  const recipes = result?.recipes
  const recipe = recipes.find((r) => r.id === id);
  console.log(recipe);

  detailImg.src = recipe.image;
  detailTitle.innerText = recipe.name;
  detailTimings.innerText = recipe.prepTimeMinutes;

  // ingredients
  recipe.ingredients.forEach((ingredient) => {
    const li = document.createElement("li");
    li.innerText = ingredient;
    detailIng.appendChild(li)
  })


  // instructions
  recipe.instructions.forEach((instruction) => {
    const li = document.createElement("li");
    li.innerText = instruction;
    detailIns.appendChild(li)
  })      





}