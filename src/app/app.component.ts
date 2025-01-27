import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { LoginFormComponent } from './components/login-form/login-form.component'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
title = 'Search Films'
}
