import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailsComponent } from './recipe-details/recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipe-list/recipe-list/recipe-list.component';
import { SavingItemComponent } from './saving-list/saving-item/saving-item.component';
import { SavingListComponent } from './saving-list/saving-list.component';

import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuard } from './auth.guard';
import { SavingItemEditComponent } from './saving-list/saving-item-edit/saving-item-edit.component';
const routes: Routes = [
  { path: '', component: RecipeListComponent},
  { path: 'mylist', component: SavingListComponent, canActivate: [AuthGuard]},
  { path: 'mylist/:id', component: SavingItemEditComponent, canActivate: [AuthGuard]},
  { path: 'recipe/:id', component: RecipeDetailsComponent},
  { path: 'login', component: SigninComponent },
  { path: 'register', component: SignupComponent },
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
