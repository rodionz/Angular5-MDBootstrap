import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute } from '@angular/router/src/router_state';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  constructor(private recipeService : RecipesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe();
  }

  onAddToShoppingList(){
   this.recipeService.addIngredientstoShoppingList(this.recipe.ingredients)
  }
}
