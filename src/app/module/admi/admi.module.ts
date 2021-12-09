import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmiRoutingModule } from './admi-routing.module';
import { UserCreationComponent } from './user/user-creation/user-creation.component';
import { UserEditionComponent } from './user/user-edition/user-edition.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEliminationComponent } from './user/user-elimination/user-elimination.component';
import { ProductCreationComponent } from './product/product-creation/product-creation.component';
import { ProductEditionComponent } from './product/product-edition/product-edition.component';
import { ProductEliminationComponent } from './product/product-elimination/product-elimination.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserCreationComponent,
    UserEditionComponent,
    UserListComponent,
    UserEliminationComponent,
    ProductCreationComponent,
    ProductEditionComponent,
    ProductEliminationComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    AdmiRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdmiModule { }
