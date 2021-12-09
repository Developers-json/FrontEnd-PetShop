import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'http://localhost:3000/'
  token: string = "";

  constructor(private http: HttpClient, private securityService: SecurityService) { 
    this.token = securityService.getToken()
  }

  getProdcuctos(): Observable<ProductModel[]>{
    return this.http.get<ProductModel[]>(`${this.url}productos`)
  }

  getProdcuctosID(id:String): Observable<ProductModel>{
    return this.http.get<ProductModel>(`${this.url}productos/${id}`)
  }

  addProducto(producto: ProductModel):Observable<ProductModel>{
    return this.http.post<ProductModel>(
      `${this.url}productos`, 
      producto, 
      {
        headers: new HttpHeaders({
         'Authorization': `Bearer ${this.token}`
        })
      }
    )
  }

  setProducto(producto: ProductModel):Observable<ProductModel>{
    return this.http.put<ProductModel>(
      `${this.url}productos/${producto.id}`, 
      producto, 
      {
        headers: new HttpHeaders({
         'Authorization': `Bearer ${this.token}`
        })
      }
    )
  }

  deleteProducto(id: string):Observable<any>{
    return this.http.delete(
      `${this.url}productos/${id}`,
      {
        headers: new HttpHeaders({
         'Authorization': `Bearer ${this.token}`
        })
      }
    )
  }

}
