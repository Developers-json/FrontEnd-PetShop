import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmiRoutingModule { }
