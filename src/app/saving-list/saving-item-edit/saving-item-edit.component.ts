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
  name: any;
  data: any;
  error: boolean;
  
  description: any;
  
  editForm: FormGroup;
  form:any;


  constructor(private route:ActivatedRoute, private favouritesService: FavouritesService, public fb: FormBuilder, private router: Router) { 
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getData();
  }

  getData(){
    this.favouritesService.getRecipe(this.id).subscribe(res => {
      console.log(res)
      this.recipe = res
      this.name = this.recipe.name
      this.data = JSON.parse(this.recipe.data)

      this.description = this.recipe.description.replace("[", "").replace("]", "").replace(/("|')/g, "");
    })
    
    this.editForm = this.fb.group({
      name: [this.name],
      description:[this.description]
    })
  }

  updateRecipeItem(){
    this.favouritesService.updateRecipeItem(this.id, this.editForm.value).subscribe({
      next: data => {
        console.log(data)
        console.log(this.editForm.value)
        this.router.navigate(['/mylist']);
      },
      error: error => {
        console.log(error)
        this.error = error;
      }
    })

  }

  
}
