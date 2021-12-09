import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginModel } from 'src/app/models/login.model';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { SecurityService } from 'src/app/services/security.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  listadoProductos: ProductModel[] = []
  isLogin: boolean = false;
  subs: Subscription = new Subscription();
  constructor(private productoService: ProductService,private securityService: SecurityService) { }

  ngOnInit(): void {
    this.getAllProductos()
    this.subs = this.securityService.obtenerDatosUsuarioEnSesion().subscribe((datos:LoginModel) => {
      if(this.securityService.isLoggin() != false){
        //console.log(this.securityService.isLoggin() )
        this.isLogin = true
      }else{
        this.isLogin = false
      }
    })
  }

  getAllProductos(){
    this.productoService.getProdcuctos().subscribe((datos: ProductModel[]) => {
      this.listadoProductos = datos
    })
  }
}
