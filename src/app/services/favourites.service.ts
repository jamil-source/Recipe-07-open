import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  list= [];
  constructor() { }
  

  // on init eller när du vill hämta listan
  getList(){
    console.log(this.list)
    return this.list;
  }

  // om du vill spara eller något. kör denna.
  setList(list){
    this.list = list;
  }

  hasInList(item){
    return this.list.indexOf(item) !== -1;
  }

  // om du vill lägga till i listan
  pushIntoList(item){ 
    console.log(this.list)
    this.list.push(item)
  }

  // om du vill ta bort
  removeFromList(item){
    console.log('before removal')
    console.log(this.list)
    this.list.splice(this.list.indexOf(this.list.find(i => i.uri === item.uri)), 1)
    console.log('after removal')
    console.log(this.list)
  }

}
