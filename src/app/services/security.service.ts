import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  url = "http://localhost:3000/"
  userToken = new BehaviorSubject<LoginModel>(new LoginModel())

  constructor(private http: HttpClient) {
    this.existLogin()
  }

  existLogin(){
    const datos = this.getToken()
    if(datos){
      this.refrescarDatosSesion(datos)
    }
  }

  refrescarDatosSesion(datos: LoginModel){
    this.userToken.next(datos)
  }

  obtenerDatosUsuarioEnSesion(){
    return this.userToken.asObservable();
  }

  login(usuario: string, clave: string): Observable<LoginModel>{
    return this.http.post<LoginModel>(
      `${this.url}login`,
      {
        Usuario: usuario,
        Clave: clave
      },
      {
        headers: new HttpHeaders({})
      }
    )
  }

  saveToken(datos: LoginModel){
    datos.isIdentify = true
    const data = JSON.stringify(datos)
    localStorage.setItem("sesion",data)
    this.refrescarDatosSesion(datos)
  }

  getToken(){
    const token = localStorage.getItem("sesion")
    if(token){
      const datos = JSON.parse(token)
      return datos
    }
    return null
  }

  deleteToken(){
    localStorage.removeItem("sesion")
    this.refrescarDatosSesion(new LoginModel())
  }
  
  isLogin(){
   const token = localStorage.getItem("sesion")
   return token
  }
}
