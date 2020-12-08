import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Wish } from '../interfaces/wishlists';

@Injectable({
  providedIn: 'root'
})
export class WishDataService {
  public wishlists: Wish[] = [];
  public filterWishlists: Wish[] = [];
  public loadAll: boolean = true;
  public loaded: boolean = false;

  

  searchValue(value: String):void {
    
    this.filterWishlists = this.filterWish(value);
  }

  filterWish(searchString) {
    console.log("filter")
    this.loadAll = false;
    return this.wishlists.filter(wish => 
      wish.giver.indexOf(searchString) !== -1);
    
      
    
  }

  constructor(private storage:Storage) { }

  

  createWish(data):void {

    console.log(data)


    this.wishlists.push({

      id:this.generateSlug(data.item),
      item: data.item,
      price: data.price,
      giver: data.giver,
      url: data.url,
      buy: data.buy
      
    })



    this.save()
  }

  updateWish(wish, data):void {
    let index = this.wishlists.indexOf(wish)

    console.log(wish)

    if(index > -1){

      this.wishlists[index].item = data.item;


      this.save();
    }
  }

  deleteWish(wish):void {
    let index = this.wishlists.indexOf(wish)

    if(index > -1){

      this.wishlists.splice(index, 1)


      this.save();
    }
  }


  generateSlug(item):string {
    let slug = item.toLowerCase().replace(`/\s+g, '-'`);

    let exists = this.wishlists.filter((wish) => {
      return wish.id.substring(0, slug.length) === slug;
    });

    if(exists.length > 0) {
      slug = slug + exists.length.toString()
    }
    return slug;
  }

  getWish(id):Wish {
    return this.wishlists.find((wish) => 
    
    wish.id === id);
   
  }

  load():Promise<boolean> {
    
    return new Promise((resolve) => {

      this.storage.get('wishlists').then((wishlists) => {

        if(wishlists != null) {
          this.wishlists = wishlists;
        }



        this.loaded = true;
        resolve(true);
      })
    })
  }

  save():void {
    this.storage.set('wishlists', this.wishlists)
  }
}

