import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from '@components/login-form/login-form.component';
import { RouterOutlet } from '@angular/router' ;
import { FilmSearchComponent } from '@components/film-search/film-search.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginFormComponent,FilmSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Search Films';
  loggedIn=false;
  onLogin(loggedIn :boolean) {
  this.loggedIn=loggedIn;
  }

}
