import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProdutosComponent } from './views/produtos/lista-produtos/lista-produtos.component';
import { UserLoginComponent } from './views/user-login/user-login.component';

const routes: Routes = [

    {path: '', component: UserLoginComponent},
    {path: 'produtos', component: ListaProdutosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
