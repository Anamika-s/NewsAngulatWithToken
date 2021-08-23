// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { map } from 'rxjs/operators';


// @Injectable()
// export class AuthenticationService {

//   authenticationUrl = "http://localhost:3000/auth/v1/"

//   // inject the dependency required for making http calls
//   constructor(private httpClient: HttpClient) {

//   }

//   authenticateUser(data:any){  
//     return this.httpClient.post(this.authenticationUrl, data);
//     //this function should make a post request to auth api with user credentials (username and password)
//     // the response should be returned to the calling method
//   }

//   setBearerToken(token: string){
//     localStorage.setItem('bearerToken', token);
//     // this method should store the authentication token to local storage
//   }
  
//   getBearerToken(){
//     return localStorage.getItem('bearerToken');
//     // this method should return the authentication token stored in local storage
//   }

//   removeBearerToken(){
//     // this method should clear the token stored in local storage
//   }

//   isUserAuthenticated(token:string):Promise<any> {
//     return this.httpClient.post(this.authenticationUrl + 'isAuthenticated', {}, {
//       headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
//     }).pipe(map(reponse => reponse['isAuthenticated'])).toPromise();
//   }
//     // this method should validate authenticity of a user - accepts the token string 
//     // and returns Promise of authenticated status of user with boolean value
//   }

  

 
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
  private authUrl: string;
  constructor(private httpClient: HttpClient) {
    this.authUrl = 'http://localhost:3000/auth/v1/';
  }

  authenticateUser(data: any) {
    console.log(data);
    return this.httpClient.post(this.authUrl, data);
  }

  setBearerToken(token: string) {
    localStorage.setItem('bearerToken', token);
  }

  getBearerToken() {
    return localStorage.getItem('bearerToken');
  }

  isUserAuthenticated(token): Promise<any> {
    return this.httpClient.post(this.authUrl + 'isAuthenticated', {}, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }).pipe(map(reponse => reponse['isAuthenticated'])).toPromise();
  }
}
