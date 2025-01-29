import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginRequest } from '@models/authentication/login-request';
import { AuthenticationService } from '@services/authentication.service';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  title = 'Authentication';
  email = '';
  password = '';


  @Output() loggedIn = new EventEmitter<boolean>();

  authService: AuthenticationService = inject(AuthenticationService);
  errorMessage: any=null;

  constructor(private router: Router, private route: ActivatedRoute, private authenticationService:AuthenticationService) {

  }

  get loginRequest(): LoginRequest {
    return new LoginRequest(this.email, this.password);
  }

  login(): void {
    this.authenticationService.login(this.loginRequest)
  .subscribe({
    next: userResponse => {
      this.authenticationService.token = userResponse.token;
      const returnUrl = this.route.snapshot.paramMap.get('returnUrl');
      this.router.navigateByUrl(returnUrl ? `/${returnUrl}` : '');
    },
    error: errorResponse => {
      this.errorHandler(errorResponse);
     }
  });

  }

  register(): void {
    this.authenticationService.register(this.loginRequest)
      .subscribe();
  }

  private errorHandler(errorResponse: HttpErrorResponse): void {
    this.errorMessage = errorResponse.error.error ?? `${errorResponse.error.status} - ${errorResponse.error.statusText}`;
  }





}
