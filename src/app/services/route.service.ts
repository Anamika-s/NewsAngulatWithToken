import { Injectable } from '@angular/core';
// ADDED HERE
import { Router } from '@angular/router';

@Injectable()
export class RouteService {

  constructor(private router: Router) { }

  toLogin(){
    this.router.navigate(['login']);
    // this method should allow navigation to login component
  }

  toDashboard(){
    console.log("Inside Dash"); 
       this.router.navigate(['dashboard']);
    // this method should allow navigation to dashboard component
  }
}
