// Fonction gérant le comportement de la barre de recherche principale
function searchBarMain() {
    // Regex permettant de vérifier que l'input est en toutes lettres, avec minimum trois lettres et en prenant en compte les espaces
    let regex = /^[A-Za-z ]{3,}$/;
    let searchBarInput = document.getElementById("form1");
    let searchBarInputValue = searchBarInput.value.toLowerCase();
    let cardInfos = document.querySelectorAll(".card-container");
    let tags = document.querySelectorAll(".tag");
    let validTags = [];

    for (let n=0; n<tags.length; n++) {
        validTags.push(tags[n].value.toLowerCase());
    }
    cardInfos.forEach(function(element) {
        // Si l'input correspond à la regex et n'est pas contenu dans la recette, la recette disparait
        if(regex.test(searchBarInputValue) && !element.innerText.toLowerCase().includes(searchBarInputValue)) {
            element.style.display = "none";
        /* Si l'input correspond à la regex et se trouve dans la recette ET si tous les tags valides affichés sont bien
            présents dans la recette également, alors la recette réapparait et le message d'erreur disparait s'il a été affiché
        */
        } else if(regex.test(searchBarInputValue) && element.textContent.toLowerCase().includes(searchBarInputValue) && validTags.every(item => element.textContent.toLowerCase().includes(item))) {
            document.getElementById("error-message").style.display = "none";
            element.style.display = "block";
        /* Si la barre d'input est vide et que tous les tags valides affichés sont bien présents dans la recette
            le message d'erreur disparait et la recette est réaffichée
        */
        } else if(searchBarInputValue === "" && validTags.every(item => element.innerText.toLowerCase().includes(item))) {
            document.getElementById("error-message").style.display = "none";
            element.style.display = "block";
        } 
    })


    // Si le contenu du container des recettes est vide, alors un message d'erreur apparait
    if(document.getElementById("main-js").innerText == "") {
        document.getElementById("error-message").style.display = "block";
    } else {
        document.getElementById("error-message").style.display = "none";
    }
    validTags.length = 0;
}

    


export {searchBarMain};