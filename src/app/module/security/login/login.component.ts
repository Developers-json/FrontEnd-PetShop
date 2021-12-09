import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as CryptoJS from "crypto-js";
import { SecurityService } from 'src/app/services/security.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    'usuario': ["", [Validators.required, Validators.email ]],
    'clave': ["", [Validators.required]]
  });

  constructor(private fb: FormBuilder, private serviceSecurity: SecurityService, private router: Router) { }

  ngOnInit(): void {
  }

  getDataForm(){
    const usuario = this.fgValidador.controls["usuario"].value
    const clave = CryptoJS.MD5(this.fgValidador.controls["clave"].value).toString()
    //console.log(clave)
    this.serviceSecurity.login(usuario, clave).subscribe((datos:any) =>{
      this.serviceSecurity.saveToken(datos)
      this.alert("Datos validos", "success")
      this.router.navigate(["/home"])
    }, (error: any) =>{
      this.alert("Datos no validos", "danger")
      console.log(error)
    })
  }

  alert(message: string, type:String){
    var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
  
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible text-center" role="alert" style="width: 100%; position: fixed">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
    if(alertPlaceholder)
    alertPlaceholder.append(wrapper)
    
  }

  navfooter(){
    const navb = document.getElementById('navbarid')
    if(navb)
    navb.style.visibility 

    const footer = document.getElementById('footerid')
    if(footer)
    footer.style.visibility 
  }
}
