import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FavouritesService } from 'src/app/services/favourites.service';
import { FormBuilder, FormGroup } from "@angular/forms";


@Component({
  selector: 'app-saving-item-edit',
  templateUrl: './saving-item-edit.component.html',
  styleUrls: ['./saving-item-edit.component.css']
})
export class SavingItemEditComponent implements OnInit {
  id:any;
  recipe:any;
  
  editForm: FormGroup;

  constructor(private route:ActivatedRoute, private favouritesService: FavouritesService, public fb: FormBuilder, private router: Router) { 
    this.editForm = this.fb.group({
      name: [],
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getData();
  }

  getData(){
    this.favouritesService.getRecipe(this.id).subscribe(data => {
      console.log(data)
      this.recipe = data
      console.log(this.recipe)
      console.log(this.editForm.value)

    })
  }

  updateRecipeItem(){
    this.favouritesService.updateRecipeItem(this.id, this.editForm.value).subscribe(res => {
    })
    this.router.navigate(['/mylist']);
    console.log(this.editForm.value)
  }
}
