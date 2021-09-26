// Ces fonctions permettent d'afficher/masquer les filtres selon l'input entré dans le champ correspondant
function searchIngredient() {
    let ingredientsInput = document.getElementById("ingredients-input");
    let ingredientsInputValue = ingredientsInput.value.toLowerCase();
    let ingredients = document.querySelectorAll(".ingredient");
    ingredients.forEach(function(element) {
        if(!element.textContent.toLowerCase().includes(ingredientsInputValue)) {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
    })
}

function searchAppliance() {
    let appliancesInput = document.getElementById("appareils-input");
    let appliancesInputValue = appliancesInput.value.toLowerCase();
    let appliances = document.querySelectorAll(".appliance");
    appliances.forEach(function(element) {
        if(!element.textContent.toLowerCase().includes(appliancesInputValue)) {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
    })
}

function searchUstensil() {
    let ustensilsInput = document.getElementById("ustensils-input");
    let ustensilsInputValue = ustensilsInput.value.toLowerCase();
    let ustensils = document.querySelectorAll(".ustensil");
    ustensils.forEach(function(element) {
        if(!element.textContent.toLowerCase().includes(ustensilsInputValue)) {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
    })
}



export {searchIngredient, searchAppliance, searchUstensil};