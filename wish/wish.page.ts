import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Wish } from '../interfaces/wishlists';
import { WishDataService } from '../services/wish-data.service';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.page.html',
  styleUrls: ['./wish.page.scss'],
})
export class WishPage implements OnInit {


  private slug: string;
  public wish: Wish;


  constructor(private route:ActivatedRoute, private dataService: WishDataService) { }

  ngOnInit() {
    
    this.slug = this.route.snapshot.paramMap.get('id');

    this.loadWish();
    
  }

  loadWish() {
      this.wish = this.dataService.getWish(this.slug);
  }

}
