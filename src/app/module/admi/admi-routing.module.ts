import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidatorSesionGuard } from 'src/app/guardians/validator-sesion.guard';
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
    component: UserEditionComponent,
    canActivate: [ValidatorSesionGuard]
  },
  {
    path:"elimination-persona",
    component: UserEliminationComponent,
    canActivate: [ValidatorSesionGuard]
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
    component: ProductEditionComponent,
    canActivate: [ValidatorSesionGuard]
  },
  {
    path:"elimination-producto/:id",
    component: ProductEliminationComponent,
    canActivate: [ValidatorSesionGuard]
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
