import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './template/error/error.component';
import { HomeComponent } from './template/home/home.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path:"",
    pathMatch:"full",
    redirectTo: "/home"
  },
  {
    path:"security",
    loadChildren: () => import("./module/security/security.module")
    .then(x => x.SecurityModule)
  },
  {
    path:"pedido",
    loadChildren: () => import("./module/pedido/pedido.module")
    .then(x => x.PedidoModule)
  },
  {
    path:"admi",
    loadChildren: () => import("./module/admi/admi.module")
    .then(x => x.AdmiModule)
  },
  {
    path: "**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
