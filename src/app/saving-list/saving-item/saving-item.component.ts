import { JsonpClientBackend } from '@angular/common/http';
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
  data:any;
  description:any;


  constructor() { }

  ngOnInit(): void {
    this.data = JSON.parse(this.recipeListItem.data)
    console.log(this.data)
    this.description = this.recipeListItem.description.replace("[", "").replace("]", "").replace(/("|')/g, "");


  }

  onDeleteRecipe(recipe:Recipe){
    this.deleteRecipe.emit(this.recipeListItem);
    console.log("delete")
  }
}
