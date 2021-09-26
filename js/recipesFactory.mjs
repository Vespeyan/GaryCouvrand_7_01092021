export class recipesFactory {
    constructor(name, time, ingredients, description, appliance, ustensils) {
        this.name = name;
        this.time = time;
        this.ingredients = ingredients;
        this.description = description;
        this.appliance = appliance;
        this.ustensils = ustensils;
    }
    recipeHTML() {
        const row = document.getElementById("main-js");
        let col = document.createElement("div");
        col.setAttribute("class", "col-12 col-md-6 col-lg-4 card-container");
        row.appendChild(col);
        let recipeIngredients = "";
        let recipeUstensils = "";      
        
        this.ingredients.forEach(function(element) {
            if (element.quantity == null) {
                recipeIngredients += '<li>'+'<p class=card-ingredient>'+element.ingredient+'</p>'+'</li>'
            } else if (element.unit == null) {
                recipeIngredients += '<li>'+'<p class=card-ingredient>'+element.ingredient+'</p>'+ ': '+element.quantity+'</li>'
            } else if (element.unit != null) {
                recipeIngredients += '<li>'+'<p class=card-ingredient>'+element.ingredient+'</p>'+ ': '+element.quantity+' '+element.unit+'</li>'
            }
        })
        this.ustensils.forEach(function(element) {
            recipeUstensils += '<li>'+'<p class=card-ustensils>'+element+'</p>'+'</li>';
        })
        col.innerHTML =
            '<div class="card">'+
            '    <img class="card-img-top" src="images/img.png" alt=""/>'+
            '    <div class="card-body">'+
            '        <div class="title-time d-flex justify-content-between">'+
            '            <h5 class="card-title">'+this.name+'</h5>'+
            '            <p class="card-time">'+'<img class="time-img" src="images/Vector.png"/>'+' '+this.time+' min</p>'+
            '        </div>'+
            '        <div class="ingredients-recipe d-flex justify-content-between">'+
            '            <ul class="ingredients-list">'+
                            recipeIngredients+
            '            </ul>'+
            '            <p class="recipe">'+this.description+'</p>'+
            '            <ul class="ustensils-list">'+
                            recipeUstensils+
            '            </ul>'+
            '            <p class="card-appliance">'+this.appliance+'</p>'+     
            '        </div>'+                 
            '    </div>'+
            '</div>';
        
    }
}