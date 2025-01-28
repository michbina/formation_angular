import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}


  login() {
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
