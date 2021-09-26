// Cette fonction permet de masquer les recettes qui ne correspondent pas aux tags valides et les filtres qui n'apparaissent alors plus dans les recettes restantes
function reduceCards() {
    let tags = document.querySelectorAll(".tag");
    let cards = document.querySelectorAll(".card-container");
    let validTags = [];
    tags.forEach(function(element) {
        if(element.value != "") {
        validTags.push(element.value.toLowerCase());
        }
    })
    cards.forEach(function(element) {
        let items = element.querySelectorAll(".card-ingredient, .card-appliance, .card-ustensils");
        let itemsArray = [];
        items.forEach(itemsElement =>{
            itemsArray.push(itemsElement.textContent.toLowerCase());
        })
        if(!validTags.every(item => itemsArray.includes(item))) {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
        itemsArray.length = [];
    })
    
    let filters = document.querySelectorAll(".ingredient, .appliance, .ustensil");
    filters.forEach(function(element) {
        let cardSection = document.getElementById("main-js");
        if(!cardSection.innerText.toLowerCase().includes(filters[i].textContent.toLowerCase())) {
            element.style.display = "none";
        }
    })
    validTags.length = 0;

}

export {reduceCards};