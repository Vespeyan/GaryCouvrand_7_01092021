// Cette fonction permet de masquer les recettes qui ne correspondent pas aux tags valides et les filtres qui n'apparaissent alors plus dans les recettes restantes
function reduceCards() {
    let tags = document.querySelectorAll(".tag");
    let cards = document.querySelectorAll(".card-container");
    let validTags = [];
    for (let k=0; k<tags.length; k++) {
        validTags.push(tags[k].value.toLowerCase());
    }
    for (let x=0; x<cards.length; x++) {
        if(!validTags.every(item => cards[x].textContent.toLowerCase().includes(item))) {
            cards[x].style.display = "none";
        }
    }
    let filters = document.querySelectorAll(".ingredient, .appliance, .ustensil");
    for (let i=0; i<filters.length; i++) {
        let cardSection = document.getElementById("main-js");
        if(!cardSection.innerText.toLowerCase().includes(filters[i].textContent.toLowerCase())) {
            filters[i].style.display = "none";
        }
    }
}

export {reduceCards};