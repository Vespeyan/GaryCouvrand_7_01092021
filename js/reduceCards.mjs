// Cette fonction permet de masquer les recettes qui ne correspondent pas aux tags valides et les filtres qui n'apparaissent alors plus dans les recettes restantes
function reduceCards() {
    let tags = document.querySelectorAll(".tag");
    let cards = document.querySelectorAll(".card-container");
    let validTags = [];
    for (let k=0; k<tags.length; k++) {
        if(tags[k].value != "") {
        validTags.push(tags[k].value.toLowerCase());
        }
    }
    for (let x=0; x<cards.length; x++) {
        let items = cards[x].querySelectorAll(".card-ingredient, .card-appliance, .card-ustensils");
        let itemsArray = [];
        items.forEach(singleElement =>{
            itemsArray.push(singleElement.textContent.toLowerCase());
        })
        if(!validTags.every(item => itemsArray.includes(item))) {
            cards[x].style.display = "none";
        } else {
            cards[x].style.display = "block";
        }
        itemsArray.length = [];
    }
    
    let filters = document.querySelectorAll(".ingredient, .appliance, .ustensil");
    for (let i=0; i<filters.length; i++) {
        let cardSection = document.getElementById("main-js");
        if(!cardSection.innerText.toLowerCase().includes(filters[i].textContent.toLowerCase())) {
            filters[i].style.display = "none";
        }
    }
    validTags.length = 0;

}

export {reduceCards};