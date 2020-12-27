import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe(1, 'Custard Pie', 'You can eat pie', 
        'https://images-gmi-pmc.edge-generalmills.com/9a8a63c9-959d-4565-a0f1-27bc958167d5.jpg', 
        [
            new Ingredient('Frutas', 3),
            new Ingredient('Leche', 1)
        ]),
        new Recipe(2, 'Fried Chicken', 'Grab a chicken leg', 
        'https://www.eatwell101.com/wp-content/uploads/2019/08/tuscan-salmon-recipe.jpg',
        [
            new Ingredient('Pollo', 1),
            new Ingredient('Chile verde', 5)
        ]),
        new Recipe(3, 'Potato Salad', 'Side this', 
        'https://images-gmi-pmc.edge-generalmills.com/b4856949-30a8-42d9-bec7-e061ace4d00e.jpg',
        [
            new Ingredient('Papas', 10),
            new Ingredient('Salsa de tomate', 2)
        ])
      ];

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(id: number){
          return this.recipes.find( recipe => recipe.id === id );
      }
}