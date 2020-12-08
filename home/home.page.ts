import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { WishDataService } from '../services/wish-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public searchValue: String;
  
  constructor(public dataService:WishDataService, private alertCtrl: AlertController) {}

  addWish():void {
    this.alertCtrl.create({
      header: "Make A Wish",
      cssClass: "createAlrt",
      

      inputs: [
        {
          cssClass: "inputName",
          placeholder: 'Wish Name',
          type: 'text',
          name: 'item',

        },
        {
          placeholder: 'Price',
          type: 'text',
          name: 'price',
        },
        {
          placeholder: 'Your Name',
          type: 'text',
          name: 'giver',
        },
        {
          placeholder: 'Wish Image URL',
          type: 'text',
          name: 'url',
        },
        {
          placeholder: 'Where to buy',
          type: 'text',
          name: 'buy',
        },
      ],
      buttons: [
        
        {
          text: 'Create',
          handler: (data) => {
            this.dataService.createWish(data);
          }
        }
      ]

    }).then((prompt) => {
      prompt.present();
    })
  }

  updateWish(wish):void {
    this.alertCtrl.create({
      header: "Revise Wish",
      cssClass: "updateAlrt",
      

      inputs: [
        {
          
          value: wish.item,
          type: 'text',
          name: 'item',

        },
        {
          value: wish.price,
          type: 'text',
          name: 'price',
        },
        {
          value: wish.giver,
          type: 'text',
          name: 'giver',
        },
        {
          value: wish.url,
          type: 'text',
          name: 'url',
        },
        {
          value: wish.buy,
          type: 'text',
          name: 'buy',
        },
      ],
      buttons: [
        
        {
          text: 'Update',
          handler: (data) => {
            
            this.dataService.updateWish(wish, data);


          }
        }
      ]

    }).then((prompt) => {
      prompt.present();
    })
  }

  deleteWish(wish):void {
    this.dataService.deleteWish(wish)
  }

  searchName():void {
    console.log(this.searchValue)
    this.dataService.searchValue(this.searchValue);
  }

}



