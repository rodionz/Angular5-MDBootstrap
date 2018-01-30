import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping list/shopping-list.service';

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 
    'This is simply a test', 
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
  [
    new Ingredient('Meat',1),
    new Ingredient('French Fries', 20)

  ]),
    new Recipe('Another Recipe',
     'This is another simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [new Ingredient('Buns',2),
    new Ingredient('Meat',2)]
  )
  ];
  constructor(private Slservice : ShoppingListService) { }
   

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientstoShoppingList(ingredients: Ingredient[]){
     this.Slservice.addIngredients(ingredients)
  }
}
