import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/model/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:any = {};
  search:any = "";

  constructor(private recipeService:RecipeService, private router:Router) { }

  ngOnInit(): void {
    this.recipeService.getRecipe().subscribe(recipes =>{
      console.log(this.recipes = recipes);
    });
  }

  getRecipeBySearch(input:NgForm){
    console.log(input)
    const recipeType = this.checkedRecipeTypes(input)
    const search = this.search;
    
    this.recipeService.searchRequest(search, recipeType).subscribe(recipes => {
      this.recipes = recipes;
    })
  }

  checkedRecipeTypes(input: NgForm){
    const recipeTypes = [];

    for(const i in input.value){
      if(input.value[i] === true){
        console.log(input.value[i])
        recipeTypes.push(i)
      }
    }

    return recipeTypes;
  }


  onSelect(recipe){
    encodeURIComponent(recipe);
    this.router.navigate(['/recipe', recipe])
  }

}
