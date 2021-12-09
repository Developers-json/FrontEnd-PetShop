import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginModel } from 'src/app/models/login.model';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  isLogin: boolean = false;
  subs: Subscription = new Subscription();

  constructor(private securityService: SecurityService) { }

  ngOnInit(): void {
    this.subs = this.securityService.obtenerDatosUsuarioEnSesion().subscribe((datos:LoginModel) => {
      if(this.securityService.isLoggin() != false){
        //console.log(this.securityService.isLoggin() )
        this.isLogin = true
      }else{
        this.isLogin = false
      }
    })
  }

}
