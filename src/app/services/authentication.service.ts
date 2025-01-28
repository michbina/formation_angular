import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

   loggedIn=false;

  constructor(private router: Router) { }

  login() {
    this.loggedIn=true;
    this.router.navigateByUrl('/search') ;
  }

  logout() {
    this.loggedIn=false;
  }


}
