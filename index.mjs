import {recipes} from "./recipes.mjs";
import {recipesFactory} from "./recipesFactory.mjs";
import {searchIngredient, searchAppliance, searchUstensil} from "./searchFilter.mjs";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let ingredientsList = [];
let ustensilsList = [];
let applianceList = [];
for (let i=0; i<recipes.length; i++) {
    new recipesFactory(recipes[i].name,
                      recipes[i].time,
                      recipes[i].ingredients,
                      recipes[i].description,
                      recipes[i].appliance,
                      recipes[i].ustensils).
                      recipeHTML();
    for (let j=0; j<recipes[i].ingredients.length; j++) {
        ingredientsList.push(capitalizeFirstLetter(recipes[i].ingredients[j].ingredient));
    }
    applianceList.push(capitalizeFirstLetter(recipes[i].appliance));
    recipes[i].ustensils.forEach((function(item) {
        ustensilsList.push(capitalizeFirstLetter(item));
    }))
    
}

ingredientsList.sort();
ustensilsList.sort();
applianceList.sort();

let ingredientsListUnique = [];
        ingredientsListUnique = [...new Set(ingredientsList)];

        let ingredientsListHTML = "";
        ingredientsListUnique.forEach(function(item) {
            ingredientsListHTML += '<li class="ingredient"><a>'+item+'</a></li>';
        })
        document.getElementById("options-ingredients").innerHTML = ingredientsListHTML;


        let applianceListUnique = [];
        applianceListUnique = [...new Set(applianceList)];

        let applianceListHTML = "";
        applianceListUnique.forEach(function(item) {
            applianceListHTML += '<li class="appliance"><a>'+item+'</a></li>';
        })
        document.getElementById("options-appliance").innerHTML = applianceListHTML;


        let ustensilsListUnique = [];
        ustensilsListUnique = [...new Set(ustensilsList)];

        let ustensilsListHTML = "";
        ustensilsListUnique.forEach(function(item) {
            ustensilsListHTML += '<li class="ustensil"><a>'+item+'</a></li>';
        })
        document.getElementById("options-ustensils").innerHTML = ustensilsListHTML;
    
const btnIngredients = document.getElementById("btn-ingredients");
const btnAppareils = document.getElementById("btn-appareils");
const btnUstensiles = document.getElementById("btn-ustensiles");
const ingredientsDropdown = document.getElementById("ingredients");
const appareilsDropdown = document.getElementById("appareils");
const ustensilesDropdown= document.getElementById("ustensiles");
const closeAppareils = document.getElementById("close-appareils");
const closeIngredients = document.getElementById("close-ingredients");
const closeUstensiles = document.getElementById("close-ustensiles");

btnAppareils.addEventListener("click", function() {
    btnAppareils.style.display = "none";
    appareilsDropdown.style.display = "block";
})

btnIngredients.addEventListener("click", function() {
    btnIngredients.style.display = "none";
    ingredientsDropdown.style.display = "block";
})

btnUstensiles.addEventListener("click", function() {
    btnUstensiles.style.display = "none";
    ustensilesDropdown.style.display = "block";
})

closeAppareils.addEventListener("click", function() {
    btnAppareils.style.display = "block";
    appareilsDropdown.style.display = "none";
})

closeIngredients.addEventListener("click", function() {
    btnIngredients.style.display = "block";
    ingredientsDropdown.style.display = "none";
})

closeUstensiles.addEventListener("click", function() {
    btnUstensiles.style.display = "block";
    ustensilesDropdown.style.display = "none";
})

document.addEventListener("mouseup", function(e) {
    if (!ingredientsDropdown.contains(e.target)) {
        ingredientsDropdown.style.display = "none";
        btnIngredients.style.display ="block";
    }
});

document.addEventListener("mouseup", function(e) {
    if (!appareilsDropdown.contains(e.target)) {
        appareilsDropdown.style.display = "none";
        btnAppareils.style.display ="block";
    }
});

document.addEventListener("mouseup", function(e) {
    if (!ustensilesDropdown.contains(e.target)) {
        ustensilesDropdown.style.display = "none";
        btnUstensiles.style.display ="block";
    }
});


let ingredientsInput = document.getElementById("ingredients-input");
let appliancesInput = document.getElementById("appareils-input");
let ustensilsInput = document.getElementById("ustensils-input");


ingredientsInput.addEventListener("input", searchIngredient);
appliancesInput.addEventListener("input", searchAppliance);
ustensilsInput.addEventListener("input", searchUstensil);