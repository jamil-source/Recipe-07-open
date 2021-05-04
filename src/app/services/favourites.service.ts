import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  list= [];
  constructor(private http: HttpClient) { }
  

  // on init eller när du vill hämta listan
  getList(){
    console.log(this.list)
    return this.http.get('http://127.0.0.1:80/api/auth/mylist');
  }

  getRecipe(id){
    return this.http.get(`http://127.0.0.1:80/api/auth/mylist/${id}`);
  }

  // om du vill spara eller något. kör denna.
  setList(list){
    //this.list = list;
    console.log(list[0]);
    // let formData: any = new FormData();
    // formData.append("name", list[0].label);
    // formData.append("recipeList_id", list[0].totalWeight);
    let formData = {
      recipeList_id: list[0].uri,
      name: list[0].label,
      data: JSON.stringify(list)
    };
  


    console.log(formData);
    return this.http.post('http://127.0.0.1:80/api/auth/mylist', formData);
  }

  hasInList(item){
    return this.list.indexOf(item) !== -1;
  }

  // om du vill lägga till i listan
  pushIntoList(item){ 
    this.list.push(item[0].label);
    this.setList(item).subscribe({
      next: data => {
          console.log(data)
      },
      error: error => {
          console.error('There was an error!', error);
      }
    })
  }

  updateRecipeItem(id, data){
    return this.http.put(`http://127.0.0.1:80/api/auth/mylist/${id}`, data);
  }



  // om du vill ta bort
  removeFromList(item){
    console.log('before removal')
    console.log(this.list)
    console.log(item)
    // item.splice(this.list.indexOf(this.list.find(i => i.uri === item.uri)), 1)
    console.log('after removal');
    return this.http.delete(`http://127.0.0.1:80/api/auth/mylist/${item.id}`);
  }



  

}
