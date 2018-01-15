import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeDetailComponent } from './recipies/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipies/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipies/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './shopping list/shopping-edit/shopping-edit.component';
import { RecipesComponent } from './recipies/recipes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpModule
  ],
  providers: [],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
