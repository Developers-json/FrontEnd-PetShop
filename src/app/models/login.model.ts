import { DatosModel } from "./datos.model";

export class LoginModel {
    datos?: DatosModel;
    tk?: string;
    isIdentify?: boolean = false;
}