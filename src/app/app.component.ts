import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router' ;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'Search Films';
  loggedIn=false;

  constructor(private router: Router) {}
   ngOnInit(): void {
     this.router.navigateByUrl('/login') ;
   }




}
