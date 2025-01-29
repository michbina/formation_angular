import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from '@models/authentication/login-request';
import { RegistrationRequest } from '@models/authentication/registration-request';
import { UserResponse } from '@models/authentication/user-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //private baseUrl = 'http://localhost:3030/user';

  private baseUrl = 'api/user';

  token: string | null = null;

   //loggedIn=false;

  constructor(private router: Router, private httpClient: HttpClient) { }

  get loggedIn(): boolean {
    return this.token != null;
  }

  login(loginRequest: LoginRequest): Observable<UserResponse> {
    return this.httpClient.post<UserResponse>(`${this.baseUrl}/login`, loginRequest);
  }

  register(loginRequest: LoginRequest): Observable<UserResponse> {
    const registrationRequest = new RegistrationRequest(
      loginRequest.email,
      loginRequest.password,
      'John',
      'Smith'
    );

    return this.httpClient.post<UserResponse>(`${this.baseUrl}/register`, registrationRequest);
  }

  /*login() {
    this.loggedIn=true;
    this.router.navigateByUrl('/search') ;
  }*/

  logout() {
    this.token = null;
    this.router.navigateByUrl('/login');
  }


}
