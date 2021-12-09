import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-elimination',
  templateUrl: './product-elimination.component.html',
  styleUrls: ['./product-elimination.component.css']
})
export class ProductEliminationComponent implements OnInit {
  id:string = ""
  constructor(private servicioProducto: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"]
    //console.log(this.id)
    this.deleteProducto()
  }
  deleteProducto(){
    this.servicioProducto.deleteProducto(this.id).subscribe((datos:any) =>{
      this.router.navigate(["/admi/list-producto"])
      }, (error:any) =>{
  
      })
  }

}
