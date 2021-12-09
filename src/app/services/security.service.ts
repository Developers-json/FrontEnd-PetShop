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
//Valida que dentro del navegador exista el token
  existLogin(){
    const datos = this.getToken()
    if(datos){
      this.refrescarDatosSesion(datos)
    }
  }
//Actualiza el token almacenados 
  refrescarDatosSesion(datos: LoginModel){
    this.userToken.next(datos)
  }
//Obtiene los datos del usuario
  obtenerDatosUsuarioEnSesion(){
    return this.userToken.asObservable();
  }
//Valida que una persona se pueda logear
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
//Se guarda el token en el localstorage
  saveToken(datos: LoginModel){
    datos.isIdentify = true
    const data = JSON.stringify(datos)
    localStorage.setItem("sesion",data)
    this.refrescarDatosSesion(datos)
  }
//Retorna el token que se tiene almacenado
  getToken(){
    const token = localStorage.getItem("sesion")
    if(token){
      const datos = JSON.parse(token)
      return datos.tk
    }
    return false
  }
//Elimina el token que se tiene alamacenado
  deleteToken(){
    localStorage.removeItem("sesion")
    this.refrescarDatosSesion(new LoginModel())
  }

  isLoggin(){
    const token = localStorage.getItem("sesion")
    if(token){
      return token
    }
    return false
  }
  
}
