import {searchBarMain} from "./searchBarMain.mjs";

function addSuppressionTagEventListener() {
    let suppressionTag = document.querySelectorAll(".suppression-tag");
    let tags = document.querySelectorAll(".tag");
    let cards = document.querySelectorAll(".card-container");
    // Pour chaque tag, on va ajouter une fonction qui permet de le fermer au clic tout en faisant un appel de celle gérant la recherche de la barre principale
    for (let i=0; i<suppressionTag.length; i++) {
        suppressionTag[i].addEventListener("click", closeTag);
        suppressionTag[i].addEventListener("click", searchBarMain);
        // Cette fonction sert à fermer le tag et ré-afficher les éléments auparavant masqués grâce à lui
        function closeTag() {
            tags[i].style.display = "none";
            tags[i].value = "";
            let filtersIngredient = document.querySelectorAll(".ingredient, .appliance, .ustensil");
            for(let j=0; j<filtersIngredient.length; j++) {
                if(tags[i].textContent.toLowerCase().includes(filtersIngredient[j].textContent.toLowerCase())) {
                    filtersIngredient[j].style.display = "block";
                }
            }
            // Les tags "valides" sont ceux qui apparaissent toujours à l'écran, ceux ayant été fermés (mais pas supprimés du HTML) étant considérés invalides
            let validTags = [];
            for (let k=0; k<tags.length; k++) {
                validTags.push(tags[k].value.toLowerCase());
            }
            // On fait réapparaitre toutes les recettes contenant tous les tags valides
            for (let x=0; x<cards.length; x++) {
                if(validTags.every(item => cards[x].textContent.toLowerCase().includes(item))) {
                    cards[x].style.display = "block";
                }
            }
            let filters = document.querySelectorAll(".ingredient, .appliance, .ustensil");
            // On fait le tri dans la liste des filtres en fonction des recettes apparaissant de nouveau sur le site
            for (let c=0; c<filters.length; c++) {
                let cardSection = document.getElementById("main-js");
                if(!cardSection.innerText.toLowerCase().includes(filters[c].textContent.toLowerCase()) ||
                    validTags.every(item => filters[c].textContent.toLowerCase().includes(item))) {
                    filters[c].style.display = "none";
                } else {
                    filters[c].style.display = "block";
                }
            }
            validTags.length = 0;
        }
    }
}

export {addSuppressionTagEventListener};