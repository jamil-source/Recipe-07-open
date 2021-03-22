import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from 'src/app/model/recipe';

@Component({
  selector: 'app-saving-item',
  templateUrl: './saving-item.component.html',
  styleUrls: ['./saving-item.component.css']
})
export class SavingItemComponent implements OnInit {
  @Input() recipeListItem:any
  // @Input() recipe:any
  @Output() deleteRecipe: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
    console.log(this.recipeListItem)
  }

  onDeleteRecipe(recipe:Recipe){
    this.deleteRecipe.emit(recipe);
  }
}
