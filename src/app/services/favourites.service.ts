import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  list= [];
  recipeList;
  constructor(private http: HttpClient, public authService: AuthService) {
    // this.getList().subscribe((data:any) =>{
    //   this.recipeList = data;
    // })
  }
  


  
  //READ
  getList(){
    console.log(this.list)
    return this.http.get('http://127.0.0.1:80/api/auth/mylist');
  }

  //READ
  getRecipe(id){
    return this.http.get(`http://127.0.0.1:80/api/auth/mylist/${id}`);
  }

  // CREATE
  setList(list){
    //this.list = list;
    console.log(list[0]);
    // let formData: any = new FormData();
    // formData.append("name", list[0].label);
    // formData.append("recipeList_id", list[0].totalWeight);
    let formData = {
      recipeList_id: list[0].uri,
      name: list[0].label,
      description: JSON.stringify(list[0].ingredientLines),
      data: JSON.stringify(list)
    };

    // const result = this.recipeList.search(({ recipeList_id }) => recipeList_id === list[0].uri);
    // if (result) {
    //   alert('ALREADY IN YOUR LIST!')
    // } else {
    //   alert('Added to your list')
    // }
  


    console.log(formData);
    return this.http.post('http://127.0.0.1:80/api/auth/mylist', formData);
  }

  hasInList(item){
    return this.list.indexOf(item) !== -1;
  }

  // UPDATE
  updateRecipeItem(id, data){
    return this.http.put(`http://127.0.0.1:80/api/auth/mylist/${id}`, data);
  }



  // DELETE
  removeFromList(item){
    console.log('before removal')
    console.log(this.list)
    console.log(item)
    console.log('after removal');
    return this.http.delete(`http://127.0.0.1:80/api/auth/mylist/${item.id}`);
  }



  

}
