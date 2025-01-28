import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '@services/authentication.service';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent  {
  title = 'Authentication';
  email = '';
  password = '';


  @Output() loggedIn = new EventEmitter<boolean>();

  authService: AuthenticationService = inject(AuthenticationService);

  constructor(private router: Router, private authenticationService:AuthenticationService) {

  }

  login() {
    this.authService.login();
    this.router.navigateByUrl('/search') ;
  }

  starRating(metascore:string):string {
    if (+metascore<20) {
      return '★';
    }else if (+metascore<40) {
       return '★';
    }else if (+metascore<60) {
      return '★★★';
    }else if (+metascore<80) {
      return '★★★★';
    }else if (+metascore<100) {
      return '★★★★★';
    }else {
      return 'no rating';
    }
  }

}
