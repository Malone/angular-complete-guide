import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('Custard Pie', 'You can eat pie', 
        'https://images-gmi-pmc.edge-generalmills.com/9a8a63c9-959d-4565-a0f1-27bc958167d5.jpg'),
        new Recipe('Fried Chicken', 'Grab a chicken leg', 
        'https://www.eatwell101.com/wp-content/uploads/2019/08/tuscan-salmon-recipe.jpg'),
        new Recipe('Potato Salad', 'Side this', 
        'https://images-gmi-pmc.edge-generalmills.com/b4856949-30a8-42d9-bec7-e061ace4d00e.jpg')
      ];

      getRecipes(){
          return this.recipes.slice();
      }
}