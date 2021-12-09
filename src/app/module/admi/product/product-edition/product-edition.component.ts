import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edition',
  templateUrl: './product-edition.component.html',
  styleUrls: ['./product-edition.component.css']
})
export class ProductEditionComponent implements OnInit {
  id:string = ""
  fgValidador: FormGroup = this.fb.group({
    'id':["", [Validators.required]],
    'nombre':["", [Validators.required]],
    'precio':["", [Validators.required]],
    'imagen':["", [Validators.required]]
  })

  constructor(private fb: FormBuilder, private servicioProducto: ProductService, private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"]
    //console.log(this.id)
    this.getProducto()
  }

  setProducto(){
    const nombre = this.fgValidador.controls["nombre"].value
    const precio = this.fgValidador.controls["precio"].value
    const imagen = this.fgValidador.controls["imagen"].value
    const producto = new ProductModel()
    producto.id =  this.id
    producto.Nombre = nombre
    producto.Precio = precio
    producto.Imagen = imagen
    this.servicioProducto.setProducto(producto).subscribe((datos:ProductModel) =>{
    this.router.navigate(["/admi/list-producto"])
    }, (error:any) =>{

    })
  }
  getProducto(){
    this.servicioProducto.getProdcuctosID(this.id).subscribe((datos: ProductModel) => {
      this.fgValidador.controls["id"].setValue(datos.id)
      this.fgValidador.controls["nombre"].setValue(datos.Nombre)
      this.fgValidador.controls["precio"].setValue(datos.Precio)
      this.fgValidador.controls["imagen"].setValue(datos.Imagen)
    }, (error:any)=> {
      console.log(error)
    })
  }
}
