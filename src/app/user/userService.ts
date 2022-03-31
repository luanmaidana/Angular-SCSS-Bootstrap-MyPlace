import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { User } from './user';
import { BaseService } from '../base/baseService';
import { TypeScriptEmitter } from "@angular/compiler";


@Injectable({
    providedIn: 'root'
  })
export class UserService extends BaseService {

    private usuarioAutenticado: boolean = false;

    constructor(private http: HttpClient) { super() }

    login(user: User): Observable<User> {

        return this.http
            .post(this.UrlServiceV1 + 'login', user, super.ObterHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError)
            );
    }

    persistirUserApp(response: any){
        localStorage.setItem('app.token', response.AccessToken);
        localStorage.setItem('app.user', JSON.stringify(response.UsuarioToken));
    }

    usuarioEstaAutenticado(){
        
        if(localStorage.getItem('app.user') != null && localStorage.getItem('app.token') != null){
            this.usuarioAutenticado = true;
            return this.usuarioAutenticado;
        }else{
            return false;
        } 
    }

    deslogar() {
        localStorage.clear();      
    }
}

