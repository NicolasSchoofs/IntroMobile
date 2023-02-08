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

 ngOnInit(): void {
  this.data.getProducts().subscribe(data => {this.products = data}, error => { console.error(error)} )
  this.data.getProductById("BEE-15").subscribe(data => {this.productById = data}, error => { console.error(error)} )
 }

}
