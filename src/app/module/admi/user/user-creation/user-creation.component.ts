import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security.service';
import * as CryptoJS from "crypto-js";

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    'nombre':["", [Validators.required]],
    'apellido':["", [Validators.required]],
    'celular':["", [Validators.required]],
    'usuario': ["", [Validators.required, Validators.email ]],
    'clave': ["", [Validators.required]]
  });

  constructor(private fb: FormBuilder, private serviceSecurity: SecurityService, private router: Router) { }

  ngOnInit(): void {
  }

  getDataForm(){
    const nombre = this.fgValidador.controls["nombre"].value
    const apellido = this.fgValidador.controls["apellido"].value
    const celular = this.fgValidador.controls["celular"].value
    const usuario = this.fgValidador.controls["usuario"].value
    const clave = CryptoJS.MD5(this.fgValidador.controls["clave"].value).toString()
    //console.log(clave)
    this.serviceSecurity.singUp(nombre, apellido, usuario, celular, clave, " ").subscribe((datos:any) =>{
      this.router.navigate(["/security/login"])
    }, (error: any) =>{     
      console.log(error)
    })
  }
}
