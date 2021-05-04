import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FavouritesService } from 'src/app/services/favourites.service';

import { RecipeService } from 'src/app/services/recipe.service';
import { AuthStateService } from 'src/app/shared/auth-state.service';
import { TokenService } from 'src/app/shared/token.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  inList: boolean;
  recipeDetails:any = {};
  isSignedIn: boolean;

  constructor(
    private favouritesService: FavouritesService,
    private recipeService:RecipeService,
    private router: Router, 
    private route: ActivatedRoute,
    private auth: AuthStateService,
    public token: TokenService,
  ) { }

  ngOnInit(): void {
    
    let id = this.route.snapshot.params.id;
    let newId = encodeURIComponent(id);
    this.showRecipeDetails(newId)
    
    this.auth.userAuthState.subscribe(val => {
      this.isSignedIn = val;
  });
  }

  showRecipeDetails(id){
    this.recipeService.getRecipeDetails(id).subscribe(recipes => {
      console.log(this.recipeDetails = recipes);//1
      this.inList = this.favouritesService.hasInList(this.recipeDetails)
    });
    
  }

  addToList(){
    console.log(this)
    if (!this.inList){
      console.log(this.recipeDetails)
      this.favouritesService.pushIntoList(this.recipeDetails)//is one recipe
      this.inList = !this.inList;
    } else {
      alert('already in list!')
    }

  }


}
