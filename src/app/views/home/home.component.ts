import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user/user';
import { UserService } from 'src/app/user/userService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {}

  saudacao!: string;

  ngOnInit(): void {
    var user = this.userService.obterUsuario();
    this.saudacao = user.Email;

  }

  deslogar(){
    this.userService.deslogar();
    this.router.navigate(['/login']);
  }

  produtos(){
    
  }


}