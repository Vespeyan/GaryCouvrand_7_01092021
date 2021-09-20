function searchBarForIngredients() {
    let ingredients = document.querySelectorAll(".ingredient, .appliance, .ustensil");
    let cardSection = document.getElementById("main-js");
    
    // Si l'input est conforme au regex et que celui-ci n'est pas contenu dans le nom de l'ingrédient, alors l'ingrédient disparait de la liste
    for (let i=0; i<ingredients.length; i++) {
        if(!cardSection.innerText.toLowerCase().includes(ingredients[i].textContent.toLowerCase())) {
            ingredients[i].style.display = "none";
        } else {
            ingredients[i].style.display = "block";
        }
    }
}
export {searchBarForIngredients};