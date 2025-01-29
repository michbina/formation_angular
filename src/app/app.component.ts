import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router' ;
import { AuthenticationService } from '@services/authentication/authentication.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'Search Films';

  authService: AuthenticationService = inject(AuthenticationService);

  constructor(private router: Router, private authenticationService: AuthenticationService) {}

   ngOnInit(): void {
     this.router.navigateByUrl('/login');
   };

}
