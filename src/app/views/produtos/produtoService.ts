import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Produto } from './Produto';


@Injectable()
export class ProdutoService {

    constructor(private http: HttpClient){

    }

    protected UrlServiceV1: String = "https://localhost:5001/v1/";

    obterTodosProdutos() : Observable<Produto[]>{

     return this.http.get<Produto[]>(this.UrlServiceV1 + "produtos");

    }

    obterProdutoId(guid: String) : Observable<Produto>{

       return this.http.get<Produto>(this.UrlServiceV1 + "produtos/" + guid);
    }

}

