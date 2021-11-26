import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoRoutingModule } from './pedido-routing.module';
import { PedidoCreationComponent } from './pedido-creation/pedido-creation.component';
import { PedidoEditionComponent } from './pedido-edition/pedido-edition.component';
import { PedidoEliminationComponent } from './pedido-elimination/pedido-elimination.component';
import { PedidoListComponent } from './pedido-list/pedido-list.component';


@NgModule({
  declarations: [
    PedidoCreationComponent,
    PedidoEditionComponent,
    PedidoEliminationComponent,
    PedidoListComponent
  ],
  imports: [
    CommonModule,
    PedidoRoutingModule
  ]
})
export class PedidoModule { }
