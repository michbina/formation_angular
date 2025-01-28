import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  @Output() loggedIn = new EventEmitter<boolean>();

  title = 'Authentication';
  email = '';
  password = '';

  login() {
    this.loggedIn.emit(true);
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
