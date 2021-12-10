import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    'usuario': ["", [Validators.required, Validators.email ]]
  });
  constructor(private fb: FormBuilder, private serviceSecurity: SecurityService, private router: Router) { }

  ngOnInit(): void {
  }

  sendCodigo(){
    const usuario = this.fgValidador.controls["usuario"].value
    //console.log(clave)
    this.serviceSecurity.codigoRecuperacion(usuario).subscribe((datos:any) =>{     
      this.router.navigate(["/security/change-password"])
    }, (error: any) =>{      
      console.log(error)
    })
  }
}
