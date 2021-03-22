import { Component, OnInit } from '@angular/core';
import { FavouritesService } from '../services/favourites.service';


@Component({
  selector: 'app-saving-list',
  templateUrl: './saving-list.component.html',
  styleUrls: ['./saving-list.component.css']
})
// Observera att jag kan använda shopping-cart som ensam component men har valt att lägga till en 'child component' för att lära mig mer om property binding
export class SavingListComponent implements OnInit {
  recipeList = [

  ];
  constructor(private favouritesService: FavouritesService) { } //messengerservice is not used?

  ngOnInit(): void {
    this.recipeList = this.favouritesService.getList();
  }


  deleteRecipe(recipe){
    this.favouritesService.removeFromList(recipe);
    this.recipeList = this.favouritesService.getList();
  }
}