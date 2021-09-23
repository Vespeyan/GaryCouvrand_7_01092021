// On importe les différentes fonctions dont on aura besoin plus tard
import {recipes} from "./recipes.mjs";
import {recipesFactory} from "./js/recipesFactory.mjs";
import {searchIngredient, searchAppliance, searchUstensil} from "./js/searchFilter.mjs";
import {reduceCards} from "./js/reduceCards.mjs";
import {addSuppressionTagEventListener} from "./js/addSuppressionTagEventListener.mjs";
import {searchBarMain} from "./js/searchBarMain.mjs";
import {searchBarForIngredients} from "./js/searchBarForIngredients.mjs";

// Cette fonction permet d'afficher les phrases visées avec une majuscule pour la première lettre
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// On crée des tableaux vides qui contiendront les différents types d'éléments qu'on devra réutiliser plus tard
let ingredientsList = [];
let ustensilsList = [];
let applianceList = [];
// Cette boucle permet de créer les objets générés avec les informations du JSON
for (let i=0; i<recipes.length; i++) {
    new recipesFactory(recipes[i].name,
                      recipes[i].time,
                      recipes[i].ingredients,
                      recipes[i].description,
                      recipes[i].appliance,
                      recipes[i].ustensils).
                      // On écrit ici le HTML correspondant
                      recipeHTML();
    /* On remplit ici les différents tableaux qui nous serviront à afficher les éléments par 
        catégories, tout en appliquant à ces mêmes éléments la fonction servant à leur mettre une majuscule
    */
    for (let j=0; j<recipes[i].ingredients.length; j++) {
        ingredientsList.push(capitalizeFirstLetter(recipes[i].ingredients[j].ingredient.toLowerCase()));
    }
    applianceList.push(capitalizeFirstLetter(recipes[i].appliance.toLowerCase()));
    recipes[i].ustensils.forEach((function(item) {
        ustensilsList.push(capitalizeFirstLetter(item.toLowerCase()));
    }))
    
}

// On classe le contenu des tableaux par odre alphabétique
ingredientsList.sort();
ustensilsList.sort();
applianceList.sort();

/* La méthode Set() permet de supprimer les doublons, étant donné que l'on ne veut qu'une occurrence de chaque terme
    dans notre menu. Ensuite grâce à une boucle forEach, on remplit le HTML avec chaque élément de ce nouveau tableau sans doublons
*/
let ingredientsListUnique = [];
ingredientsListUnique = [...new Set(ingredientsList)];
let ingredientsListHTML = "";
ingredientsListUnique.forEach(function(item) {
    ingredientsListHTML += '<li class="ingredient"><a>'+item+'</a></li>';
});
document.getElementById("options-ingredients").innerHTML = ingredientsListHTML;

let applianceListUnique = [];
applianceListUnique = [...new Set(applianceList)];
let applianceListHTML = "";
applianceListUnique.forEach(function(item) {
    applianceListHTML += '<li class="appliance"><a>'+item+'</a></li>';
});
document.getElementById("options-appliance").innerHTML = applianceListHTML;

let ustensilsListUnique = [];
ustensilsListUnique = [...new Set(ustensilsList)];
let ustensilsListHTML = "";
ustensilsListUnique.forEach(function(item) {
    ustensilsListHTML += '<li class="ustensil"><a>'+item+'</a></li>';
});
document.getElementById("options-ustensils").innerHTML = ustensilsListHTML;

/* Toute cette partie du code sert à gérer le comportement des boutons dropdowns, il s'agit de faire apparaitre le menu correspondant
    au bouton sur lequel on a cliqué, tout en fermant celui éventuellement ouvert avant et en faisait également disparaitre le bouton
    sur lequel on vient de cliquer. Rien de notable à préciser, il s'agit de fonctions très simples.
*/
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
});

btnIngredients.addEventListener("click", function() {
    btnIngredients.style.display = "none";
    ingredientsDropdown.style.display = "block";
});

btnUstensiles.addEventListener("click", function() {
    btnUstensiles.style.display = "none";
    ustensilesDropdown.style.display = "block";
});

closeAppareils.addEventListener("click", function() {
    btnAppareils.style.display = "block";
    appareilsDropdown.style.display = "none";
});

closeIngredients.addEventListener("click", function() {
    btnIngredients.style.display = "block";
    ingredientsDropdown.style.display = "none";
});

closeUstensiles.addEventListener("click", function() {
    btnUstensiles.style.display = "block";
    ustensilesDropdown.style.display = "none";
});

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

// On définit des variables correspondantes aux inputs des filtres
let ingredientsInput = document.getElementById("ingredients-input");
let appliancesInput = document.getElementById("appareils-input");
let ustensilsInput = document.getElementById("ustensils-input");

// On ajoute des écouteurs d'événements à ces inputs avec les fonctions correspondantes
ingredientsInput.addEventListener("input", searchIngredient);
appliancesInput.addEventListener("input", searchAppliance);
ustensilsInput.addEventListener("input", searchUstensil);

const filtersIngredient = document.querySelectorAll(".ingredient");
const filtersAppliance = document.querySelectorAll(".appliance");
const filtersUstensil = document.querySelectorAll(".ustensil");

// Cette boucle ajoute plusieurs écouteurs d'événements à chaque ingrédient de la liste de filtres
for (let i=0; i<filtersIngredient.length; i++) {
    filtersIngredient[i].addEventListener("click", addTagIngredient);
    filtersIngredient[i].addEventListener("click", reduceCards);
    filtersIngredient[i].addEventListener("click", addSuppressionTagEventListener);
    // Cette fonction permet de créer un tag qui contient le nom de l'ingrédient choisi et de le faire disparaitre de la liste de filtres
    function addTagIngredient() {
        let tag = document.createElement("button");
        tag.setAttribute("type", "button");
        tag.setAttribute("class", "tag btn-primary btn-sm");
        tag.value = filtersIngredient[i].textContent;
        tag.innerHTML = '<p>'+filtersIngredient[i].textContent+ 
                        '<img src="images/croix.png" alt="suppression tag" class="suppression-tag"></p>';
        document.getElementById("tags-section").appendChild(tag);
        filtersIngredient[i].style.display = "none";
    }    
}

// Même chose pour les appareils
for (let i=0; i<filtersAppliance.length; i++) {
    filtersAppliance[i].addEventListener("click", addTagAppliance);
    filtersAppliance[i].addEventListener("click", reduceCards);
    filtersAppliance[i].addEventListener("click", addSuppressionTagEventListener);

    function addTagAppliance() {
        let tag = document.createElement("button");
        tag.setAttribute("type", "button");
        tag.setAttribute("class", "tag btn-success btn-sm");
        tag.value = filtersAppliance[i].textContent;
        tag.innerHTML = '<p>'+filtersAppliance[i].textContent+ 
                        '<img src="images/croix.png" alt="suppression tag" class="suppression-tag"></p>';
        document.getElementById("tags-section").appendChild(tag);
        filtersAppliance[i].style.display = "none";
    }    
}

// Même chose pour les ustensiles
for (let i=0; i<filtersUstensil.length; i++) {
    filtersUstensil[i].addEventListener("click", addTagUstensil);
    filtersUstensil[i].addEventListener("click", reduceCards);
    filtersUstensil[i].addEventListener("click", addSuppressionTagEventListener);

    function addTagUstensil() {
        let tag = document.createElement("button");
        tag.setAttribute("type", "button");
        tag.setAttribute("class", "tag btn-danger btn-sm");
        tag.value = filtersUstensil[i].textContent;
        tag.innerHTML = '<p>'+filtersUstensil[i].textContent+ 
                        '<img src="images/croix.png" alt="suppression tag" class="suppression-tag"></p>';
        document.getElementById("tags-section").appendChild(tag);
        filtersUstensil[i].style.display = "none";
    }    
}

// Ici on définit une variable pour la barre de recherche principal à laquelle on va joindre deux fonctions différentes
let searchBarInput = document.getElementById("form1");
searchBarInput.addEventListener("input", searchBarMain);
searchBarInput.addEventListener("input", searchBarForIngredients);









