import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { News } from '../models/news';
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  

  api_key:string = `0819eaed65a043a481d5354c8782b578`;

  trending_news_api_url:string = `https://newsapi.org/v2/top-headlines?country=in&apikey=${this.api_key}&page=1`;
  
  news_api_url:string = `http://localhost:3000/api/v1/news`

  //inject the required dependencies in constructor
  constructor(private http:HttpClient,private _authServe:AuthenticationService) { }


  getTrendingNews(){
    //this function should make a get request to fetch trending news provided by newsapi.org
    return this.http.get(this.trending_news_api_url);
  }
  
  addNews(newsItem:News){
    //this function should make a post request to save news item to db.json in server
    return this.http.post<News>(this.news_api_url, newsItem,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${this._authServe.getBearerToken()}`)
    });
  }

  getBookmarkedNews() {
     //this function should make a get request to fetch bookmarked news item from db.json in server
     return this.http.get<News[]>(this.news_api_url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${this._authServe.getBearerToken()}`)
    });
  }

}
