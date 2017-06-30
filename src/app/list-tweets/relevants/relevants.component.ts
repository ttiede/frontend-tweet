import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-relevants',
  templateUrl: './relevants.component.html',
  styleUrls: ['./relevants.component.css']
})
export class RelevantsComponent implements OnInit {

  tweets;
 
  constructor(private http: Http) {
    http.get('http://localhost:3000/most_relevants')
        .subscribe(res => this.tweets = res.json());
  }

  ngOnInit() {
  }

}
