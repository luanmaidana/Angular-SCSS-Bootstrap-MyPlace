import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ListaComponent } from './produtos/lista/lista.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './views/home/home.component';

export const routes: Routes = [
    
    {path: 'login', component: LoginComponent},
    {path: '', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'lista-produtos', component: ListaComponent, canActivate: [AuthGuard]}
];

