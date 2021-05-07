import { Component, OnInit } from '@angular/core';
import { FavouritesService } from '../services/favourites.service';


@Component({
  selector: 'app-saving-list',
  templateUrl: './saving-list.component.html',
  styleUrls: ['./saving-list.component.css']
})
// Observera att jag kan använda shopping-cart som ensam component men har valt att lägga till en 'child component' för att lära mig mer om property binding
export class SavingListComponent implements OnInit {
  recipeList:any = [   

  ];
  constructor(private favouritesService: FavouritesService) { } //messengerservice is not used?

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.favouritesService.getList().subscribe((data:any) =>{
      console.log(data)
      this.recipeList = data;
    });
  }


   deleteRecipe(recipe){
     this.favouritesService.removeFromList(recipe).subscribe((data) =>{
       recipe = data;
     });
     this.getData();
   }
}