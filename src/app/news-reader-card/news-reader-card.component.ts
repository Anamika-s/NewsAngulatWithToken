import { Component, OnInit, Input } from '@angular/core'; 
import { News } from '../models/news';

@Component({
  selector: 'app-news-reader-card',
  templateUrl: './news-reader-card.component.html',
  styleUrls: ['./news-reader-card.component.css']
})
export class NewsReaderCardComponent implements OnInit {
 @Input() newsItem:News;
  constructor() { }

  ngOnInit() {
  }

}
