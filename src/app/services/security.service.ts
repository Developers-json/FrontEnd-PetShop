import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DatosCodigo } from '../models/datosCodigo.model';
import { DatosContra } from '../models/datosContra.model';
import { LoginModel } from '../models/login.model';
import { UserCreateModel } from '../models/user.model';

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


  //RECUPEREAR CONTRASEÑA
  recuperarContrseña(codigo: string, usuario: string, clave: string): Observable<DatosContra>{
    return this.http.post<DatosContra>(
      `${this.url}recuperar-clave`,
      {
        //id: id,
        correo: usuario,
        password: clave,
        codigo: codigo
      },
      {
        headers: new HttpHeaders({})
      }
    )
  }

  codigoRecuperacion(usuario:string): Observable<DatosCodigo>{
    return this.http.post<DatosCodigo>(
      `${this.url}cambio-clave`,
      {
        //id: id,
        correo: usuario
      },
      {
        headers: new HttpHeaders({})
      }
    )
  }

  //CREAR USUARIO
  singUp(nombre: string, apellido:string, correo:string, celular:string, clave:string, codigo:string ): Observable<UserCreateModel>{
    return this.http.post<UserCreateModel>(
      `${this.url}personas`,{
        Nombre: nombre,
        Apellido: apellido,
        Correo: correo,
        Celular: celular,
        Clave: clave,
        Codigo: " " 
          },
      {
        headers: new HttpHeaders({})
      }

    )
  }
  
}
