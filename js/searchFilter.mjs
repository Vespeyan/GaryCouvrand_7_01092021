// Ces fonctions permettent d'afficher/masquer les filtres selon l'input entré dans le champ correspondant
function searchIngredient() {
    let ingredientsInput = document.getElementById("ingredients-input");
    let ingredientsInputValue = ingredientsInput.value.toLowerCase();
    let ingredients = document.querySelectorAll(".ingredient");
    for (let i=0; i<ingredients.length; i++) {
        if(!ingredients[i].textContent.toLowerCase().includes(ingredientsInputValue)) {
            ingredients[i].style.display = "none";
        } else {
            ingredients[i].style.display = "block";
        }
    }
}

function searchAppliance() {
    let appliancesInput = document.getElementById("appareils-input");
    let appliancesInputValue = appliancesInput.value.toLowerCase();
    let appliances = document.querySelectorAll(".appliance");
    for (let i=0; i<appliances.length; i++) {
        if(!appliances[i].textContent.toLowerCase().includes(appliancesInputValue)) {
            appliances[i].style.display = "none";
        } else {
            appliances[i].style.display = "block";
        }
    }
}

function searchUstensil() {
    let ustensilsInput = document.getElementById("ustensils-input");
    let ustensilsInputValue = ustensilsInput.value.toLowerCase();
    let ustensils = document.querySelectorAll(".ustensil");
    for (let i=0; i<ustensils.length; i++) {
        if(!ustensils[i].textContent.toLowerCase().includes(ustensilsInputValue)) {
            ustensils[i].style.display = "none";
        } else {
            ustensils[i].style.display = "block";
        }
    }
}



export {searchIngredient, searchAppliance, searchUstensil};