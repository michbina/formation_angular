import { Component } from '@angular/core'
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
