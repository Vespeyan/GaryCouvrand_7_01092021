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
        col.setAttribute("class", "col-12 col-md-6 col-lg-4");
        row.appendChild(col);
        let recipeIngredients = "";      
        
        for (let i=0; i<this.ingredients.length; i++) {
            if (this.ingredients[i].quantity == null) {
                recipeIngredients += '<li>'+'<p class=ingredient>'+this.ingredients[i].ingredient+'</p>'+'</li>'
            } else if (this.ingredients[i].unit == null) {
                recipeIngredients += '<li>'+'<p class=ingredient>'+this.ingredients[i].ingredient+': '+'</p>'+ this.ingredients[i].quantity+'</li>'
            } else if (this.ingredients[i].unit != null) {
                recipeIngredients += '<li>'+'<p class=ingredient>'+this.ingredients[i].ingredient+': '+'</p>'+ this.ingredients[i].quantity+' '+this.ingredients[i].unit+'</li>'
            }
        }
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
            '        </div>'+                 
            '    </div>'+
            '</div>';
        
    }
}