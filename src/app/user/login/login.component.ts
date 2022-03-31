import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../userService';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']


})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  user!: User;
  errors: any[] = []; 

  constructor(private fb: FormBuilder,
    private router: Router,
    private userService: UserService) { 

      this.userForm = this.fb.group({
        email: ['',  Validators.compose([Validators.required, Validators.minLength(3)])],
        senha: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
      }); 

    }

  @Input() public senha : String = '';
  @Input() public email : String = '';

  ngOnInit() {
     
  }

  

  login() {
    if (this.userForm.valid && this.userForm.dirty) {

      let _user = Object.assign({}, this.user, this.userForm.value);

      this.userService.login(_user)
        .subscribe(
          result => { this.onSaveComplete(result) },
          fail => { this.onError(fail) }
        );
    }
  }

  onSaveComplete(response: any) {
    this.userService.persistirUserApp(response);
    this.router.navigateByUrl('/');
  }

  onError(fail: any) {
    this.errors = fail.error.errors;
  }
}
