import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { HomeComponent } from './views/home/home.component';
import { ListaProdutosComponent } from './views/produtos/lista-produtos/lista-produtos.component';

const routes: Routes = [

    {path: '', component: HomeComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'produtos', component: ListaProdutosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
