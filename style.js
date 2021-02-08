
const mealInfo = document.getElementById("mealInfo");
const mealList = document.getElementById("meals-area");
const button = document.getElementById("searchButton");
button.addEventListener("click", getMeal);


function getMeal() {
    let searchInputText = document.getElementById("searchInput").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputText}`)
        .then(response => response.json())
        .then(data => {
            let html = "";
            if (data.meals) {
                data.meals.forEach(meal => {
                    html += `
               <div class="meal-area">
               <img class="img-size" src ="${meal.strMealThumb}">
               <h3 class="name-title">${meal.strMeal}</h3>
               <button class="detail-btn" onclick = "getMealInfo('${meal.idMeal}')">Detail</button>
               </div>
               `
                });
            }
            mealList.innerHTML = html;

        });

};


const getMealInfo = id => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res =>res.json())
    .then(data =>{
        let html = "";
        if (data.meals) {
            data.meals.forEach(meal => {
                html += `
           <div class="mealInfo-area">
           <img class="info-img-size" src ="${meal.strMealThumb}">
           <h2 class="name-title">${meal.strMeal}</h2>
           <p>Ingredients</p>
                    <ul>                    
                        <li>${meal.strIngredient1}</li>
                        <li>${meal.strIngredient2}</li>
                        <li>${meal.strIngredient3}</li>
                        <li>${meal.strIngredient4}</li>
                        <li>${meal.strIngredient5}</li>
                        <li>${meal.strIngredient6}</li>
                        <li>${meal.strIngredient7}</li>
                        <li>${meal.strIngredient8}</li>
                        <li>${meal.strIngredient9}</li>
                        <li>${meal.strIngredient10}</li>
                    </ul>
           
           <div>
           `
            });
        }
        mealInfo.innerHTML = html;

})
};



















