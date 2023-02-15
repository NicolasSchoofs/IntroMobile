import { Component } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';

import { DataService, Product } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private data: DataService) { }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

 products: Product[] | undefined
 productById : Product | undefined
 productToAdd: Product = {
  "id": "NEW PRODUCT",
  "price": "999999",
  "name": "NEW PRODUCT",
  "brand": "Beefeater",
  "description": "The Beefeater is an absolute classic and one of the most recognizable and typical gins on the market. It is a London Dry Gin that is very loved by Martini amateurs. The bottle and the taste are very recognizable and have been unchanged during the past years.",
  "link": "/products/BEE-15"
}
 

 ngOnInit(): void {
  this.data.getProducts().subscribe(data => {this.products = data}, error => { console.error(error)} )
  this.data.getProductById("BEE-15").subscribe(data => {this.productById = data}, error => { console.error(error)} )
  this.data.addProduct(this.productToAdd).subscribe(data => {this.products = data}, error => { console.error(error)} )
 }

}
