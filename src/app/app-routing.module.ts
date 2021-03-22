import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailsComponent } from './recipe-details/recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipe-list/recipe-list/recipe-list.component';
import { SavingItemComponent } from './saving-list/saving-item/saving-item.component';
import { SavingListComponent } from './saving-list/saving-list.component';

const routes: Routes = [
  { path: '', component: RecipeListComponent},
  { path: 'mylist', component: SavingListComponent},
  { path: 'recipe/:id', component: RecipeDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
