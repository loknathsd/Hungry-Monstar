
//  const url =`https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`
//  fetch(url)
// .then(res => res.json())
// .then(data => displayMeals(data.meals));



// const displayMeals = foods => {
//     const mealsDiv = document.getElementById("meals-area");
//     let input = document.getElementById("searchInput").value;
//     console.log(input);
// for (let i = 0; i < foods.length; i++) {
//     const mealName = foods[i];

//     const div = document.createElement("div");
//     div.className = "meal-area";

//     const mealInfo = `
//     <img class="img-size" src ="${mealName.strMealThumb}">
//     <h3 class="name-title">${mealName.strMeal}</h3>
// `;
//     div.innerHTML = mealInfo;

//     mealsDiv.appendChild(div);


// }

//     };
const mealInfo = document.getElementById("mealInfo");
const mealList = document.getElementById("meals-area");
const button = document.getElementById("searchButton");
button.addEventListener("click", getMeal);
// mealList.addEventListener("click", function () {
//     console.log("me too clicked");
// });

function getMeal() {
    let searchInputText = document.getElementById("searchInput").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`)
        .then(response => response.json())
        .then(data => {
            let html = "";
            if (data.meals) {
                data.meals.forEach(meal => {
                    html += `
               <div class="meal-area">
               <img class="img-size" src ="${meal.strMealThumb}">
               <h3 class="name-title">${meal.strMeal}</h3>
               </div>
               `
                });
            }
            mealList.innerHTML = html;

        });

};
////////





















