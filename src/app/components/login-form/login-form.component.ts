import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, inject, DestroyRef, OnDestroy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginRequest } from '@models/authentication/login-request';
import { AuthenticationService } from '@services/authentication/authentication.service';
import { password } from 'app/utils/password.validator';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  title = 'Authentication';
  //email = '';
  //password = '';

  //Tips: https://angular.fr/technical/destroy-ref#utilisation-hors-du-constructeur
  private destroyRef = inject(DestroyRef);


  @Output() loggedIn = new EventEmitter<boolean>();

  fb=inject(NonNullableFormBuilder);

  authService: AuthenticationService = inject(AuthenticationService);
  errorMessage: any=null;

  readonly loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', [Validators.required, password()]]
    });

  constructor(private router: Router, private route: ActivatedRoute, private authenticationService:AuthenticationService) {

  }

  get loginRequest(): LoginRequest {
    return this.loginForm.value as LoginRequest;

    /*return new LoginRequest(
    this.loginForm.controls.email.value,
    this.loginForm.controls.password.value
    );*/

    //return new LoginRequest(this.email, this.password);
  }

  login(): void {
    this.authenticationService.login(this.loginRequest).pipe(takeUntilDestroyed(this.destroyRef))
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
