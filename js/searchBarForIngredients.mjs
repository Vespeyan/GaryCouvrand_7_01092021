function searchBarForIngredients() {
    let ingredients = document.querySelectorAll(".ingredient, .appliance, .ustensil");
    let cardSection = document.getElementById("main-js");
    
    // Si l'input est conforme au regex et que celui-ci n'est pas contenu dans le nom de l'ingrédient, alors l'ingrédient disparait de la liste
    ingredients.forEach(function(element) {
        if(!cardSection.innerText.toLowerCase().includes(element.textContent.toLowerCase())) {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
    })
}
export {searchBarForIngredients};