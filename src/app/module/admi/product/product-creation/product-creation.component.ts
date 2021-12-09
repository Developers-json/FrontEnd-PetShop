import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.css']
})
export class ProductCreationComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'nombre':["", [Validators.required]],
    'precio':["", [Validators.required]],
    'imagen':["", [Validators.required]]
  })

  constructor(private fb: FormBuilder, private servicioProducto: ProductService, private router: Router) { }
  
  ngOnInit(): void {
  }

  addProducto(){
    const nombre = this.fgValidador.controls["nombre"].value
    const precio = this.fgValidador.controls["precio"].value
    const imagen = this.fgValidador.controls["imagen"].value
    const producto = new ProductModel()
    producto.Nombre = nombre
    producto.Precio = precio
    producto.Imagen = imagen
    this.servicioProducto.addProducto(producto).subscribe((datos:ProductModel) =>{
    this.router.navigate(["/admi/list-producto"])
    }, (error:any) =>{

    })
  }

}
