import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  

  constructor() {}

  ngOnInit() {
    
  }

}
