function searchBarForIngredients() {
    let ingredients = document.querySelectorAll(".ingredient, .appliance, .ustensil");
    // regex permettant de vérifier que l'input ne contient que des lettres, avec au moins trois lettres, tout en prenant en compte les espaces
    let regex = /^[A-Za-z ]{3,}$/;
    let searchBarInput = document.getElementById("form1");
    let searchBarInputValue = searchBarInput.value.toLowerCase();
    
    // Si l'input est conforme au regex et que celui-ci n'est pas contenu dans le nom de l'ingrédient, alors l'ingrédient disparait de la liste
    for (let i=0; i<ingredients.length; i++) {
        if(regex.test(searchBarInputValue) && !ingredients[i].innerText.toLowerCase().includes(searchBarInputValue)) {
            ingredients[i].style.display = "none";
            // Sinon, l'ingrédient réapparait ou reste
        } else {
            ingredients[i].style.display = "block";
        }
    }
}

export {searchBarForIngredients};