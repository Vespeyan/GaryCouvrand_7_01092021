import {searchBarMain} from "./searchBarMain.mjs";
import {searchBarForIngredients} from "./searchBarForIngredients.mjs";

function addSuppressionTagEventListener() {
    let suppressionTag = document.querySelectorAll(".suppression-tag");

    // Pour chaque tag, on va ajouter une fonction qui permet de le fermer au clic tout en faisant un appel de celle gérant la recherche de la barre principale
    suppressionTag.forEach(function(element) {
        element.addEventListener("click", closeTag);
        element.myParam = i;
        element.addEventListener("click", searchBarMain);
        element.addEventListener("click", searchBarForIngredients);
    })
}
        // Cette fonction sert à fermer le tag et ré-afficher les éléments auparavant masqués grâce à lui
        function closeTag(evt) {
            let tags = document.querySelectorAll(".tag");
            let cards = document.querySelectorAll(".card-container");

            tags[evt.target.myParam].style.display = "none";
            tags[evt.target.myParam].value = "";
            let filtersIngredient = document.querySelectorAll(".ingredient, .appliance, .ustensil");
            for(let j=0; j<filtersIngredient.length; j++) {
                if(tags[evt.target.myParam].textContent.toLowerCase().includes(filtersIngredient[j].textContent.toLowerCase())) {
                    filtersIngredient[j].style.display = "block";
                }
            }
            // Les tags "valides" sont ceux qui apparaissent toujours à l'écran, ceux ayant été fermés (mais pas supprimés du HTML) étant considérés invalides
            let validTags = [];
            tags.forEach(function(element) {
                validTags.push(element.value.toLowerCase());
            })
            // On fait réapparaitre toutes les recettes contenant tous les tags valides
            cards.forEach(function(element) {
                if(validTags.every(item => element.textContent.toLowerCase().includes(item))) {
                    element.style.display = "block";
                }
            })

            let filters = document.querySelectorAll(".ingredient, .appliance, .ustensil");
            // On fait le tri dans la liste des filtres en fonction des recettes apparaissant de nouveau sur le site
            filters.forEach(function(element) {
                let cardSection = document.getElementById("main-js");
                if(!cardSection.innerText.toLowerCase().includes(element.textContent.toLowerCase()) ||
                    validTags.every(item => element.textContent.toLowerCase().includes(item))) {
                    element.style.display = "none";
                } else {
                    element.style.display = "block";
                }
            })
            validTags.length = 0;
        }
    


export {addSuppressionTagEventListener};