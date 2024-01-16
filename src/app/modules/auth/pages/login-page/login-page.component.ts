import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';
import { empty } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  
  formLogin : FormGroup = new FormGroup({});


  constructor( private authService:AuthService) { }

  ngOnInit(): void {
    this.formLogin  = new FormGroup({
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.min(6),
        Validators.max(12)
      ])
    })
  }
  sendLogin():void{
    const {email,password} = this.formLogin.value
    this.authService.sendCredentials(email,password)
  }
}
