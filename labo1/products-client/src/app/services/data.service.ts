import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


export interface Product {
  id: string;
  price: string;
  name: string;
  brand: string;
  description: string;
  link: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private productsServiceURI: string = 'http://localhost:3000/products/'
  private contentHeaders: HttpHeaders

  constructor(private http: HttpClient) {
    this.contentHeaders = new HttpHeaders().set('Content-type', 'application/x-ww-form-urlencoded')
  }

  public getProducts(): Observable<Product[]> {
    let url = `${this.productsServiceURI}`

    return this.http.get<Product[]>(url)
  }
  public getProductById(id: string): Observable<Product> {
    let url = `${this.productsServiceURI}/${id}`

    return this.http.get<Product>(url)
  }
  public addProduct(product: Product): Observable<Product[]> {
    let url = `${this.productsServiceURI}/add`

    return this.http.post<Product[]>(url, product)

  }

  // public getMessageById(id: number): Message {
  // }
}
