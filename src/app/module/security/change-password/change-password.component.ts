import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security.service';
import * as CryptoJS from "crypto-js";


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'codigo': ["", [Validators.required]],
    'usuario': ["", [Validators.required, Validators.email ]],
    'clave': ["", [Validators.required]]
  });
  
  constructor(private fb: FormBuilder, private serviceSecurity: SecurityService, private router: Router) { }

  ngOnInit(): void {
  }

  getDataForm(){
    const codigo = this.fgValidador.controls["codigo"].value
    const usuario = this.fgValidador.controls["usuario"].value
    const clave = CryptoJS.MD5(this.fgValidador.controls["clave"].value).toString()
    //console.log(clave)
    this.serviceSecurity.recuperarContrseña(codigo, usuario, clave).subscribe((datos:any) =>{
      this.router.navigate(["/security/login"])
    }, (error: any) =>{     
      console.log(error)
    })
  }

  
}
