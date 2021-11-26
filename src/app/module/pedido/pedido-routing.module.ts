import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoCreationComponent } from './pedido-creation/pedido-creation.component';
import { PedidoEditionComponent } from './pedido-edition/pedido-edition.component';
import { PedidoEliminationComponent } from './pedido-elimination/pedido-elimination.component';
import { PedidoListComponent } from './pedido-list/pedido-list.component';

const routes: Routes = [
  {
    path:"crear-pedido",
    component: PedidoCreationComponent
  },
  {
    path:"editar-pedido",
    component: PedidoEditionComponent
  },
  {
    path:"elimination-pedido",
    component: PedidoEliminationComponent
  },
  {
    path:"list-pedido",
    component: PedidoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }
