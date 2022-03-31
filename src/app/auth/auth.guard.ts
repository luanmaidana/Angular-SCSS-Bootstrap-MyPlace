import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user/userService';

@Injectable()
export class AuthGuard implements CanActivate {

     constructor(private userService : UserService,
                 private router : Router) { }

  canActivate(route: ActivatedRouteSnapshot, 
              state: RouterStateSnapshot): Observable<boolean> | boolean   {
    
        if(this.userService.usuarioEstaAutenticado()){
          return true;
        }
        
        this.router.navigate(['/login'])
        return false;
  }

  

}