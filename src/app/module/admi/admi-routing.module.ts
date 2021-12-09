import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreationComponent } from './product/product-creation/product-creation.component';
import { ProductEditionComponent } from './product/product-edition/product-edition.component';
import { ProductEliminationComponent } from './product/product-elimination/product-elimination.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { UserCreationComponent } from './user/user-creation/user-creation.component';
import { UserEditionComponent } from './user/user-edition/user-edition.component';
import { UserEliminationComponent } from './user/user-elimination/user-elimination.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  {
    path:"crear-persona",
    component: UserCreationComponent
  },
  {
    path:"editar-persona",
    component: UserEditionComponent
  },
  {
    path:"elimination-persona",
    component: UserEliminationComponent
  },
  {
    path:"list-persona",
    component: UserListComponent
  },
  {
    path:"crear-producto",
    component: ProductCreationComponent
  },
  {
    path:"editar-producto/:id",
    component: ProductEditionComponent
  },
  {
    path:"elimination-producto/:id",
    component: ProductEliminationComponent
  },
  {
    path:"list-producto",
    component: ProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmiRoutingModule { }
