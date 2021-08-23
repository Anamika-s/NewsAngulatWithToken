// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { News } from '../models/news';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { AuthenticationService } from './authentication.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class NewsService {
  

//   api_key:string = `<your-api-key>`;

//   trending_news_api_url:string = `https://newsapi.org/v2/top-headlines?country=in&apikey=${this.api_key}&page=1`;
  
//   news_api_url:string = `http://localhost:3000/api/v1/news`
   
//   //inject the required dependencies in constructor
//   private bearerToken: string;
//   constructor(private httpClient: HttpClient, private authService: AuthenticationService) {
//     this.bearerToken = authService.getBearerToken();
//   }


//   getTrendingNews(){
//     return this.httpClient.get<Array<News>>('http://localhost:3000/api/v1/notes', {
//       headers: new HttpHeaders().set('Authorization', `Bearer ${this.bearerToken}`)
//     });
//     //this function should make a get request to fetch trending news provided by newsapi.org
//   }
  
//   addNews(news: News): Observable<News> {
//     return this.httpClient.post<News>('http://localhost:3000/api/v1/notes', note, {
//       headers: new HttpHeaders().set('Authorization', `Bearer ${this.bearerToken}`)
//     });
//   }

//   getBookmarkedNews() {
//      //this function should make a get request to fetch bookmarked news item from db.json in server

//   }

// }

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../models/Note';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class NotesService {

  private bearerToken: string;
  constructor(private httpClient: HttpClient, private authService: AuthenticationService) {
    this.bearerToken = authService.getBearerToken();
  }

  getNotes(): Observable<Array<Note>> {
    return this.httpClient.get<Array<Note>>('http://localhost:3000/api/v1/notes', {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.bearerToken}`)
    });
  }

  addNote(note: Note): Observable<Note> {
    return this.httpClient.post<Note>('http://localhost:3000/api/v1/notes', note, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.bearerToken}`)
    });
  }
}