import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FavouritesService } from 'src/app/services/favourites.service';

import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  inList: boolean;
  recipeDetails:any = {};

  constructor(
    private favouritesService: FavouritesService,
    private recipeService:RecipeService,
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    let id = this.route.snapshot.params.id;
    let newId = encodeURIComponent(id);
    this.showRecipeDetails(newId)
  }

  showRecipeDetails(id){
    this.recipeService.getRecipeDetails(id).subscribe(recipes => {
      console.log(this.recipeDetails = recipes);//1
      this.inList = this.favouritesService.hasInList(this.recipeDetails)
    });
    
  }

  addToList(){
    if (!this.inList){
      this.favouritesService.pushIntoList(this.recipeDetails)//is one recipe
      this.inList = !this.inList;
    } else {
      alert('already in list!')
    }

  }


}
