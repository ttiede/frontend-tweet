import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-mentions',
  templateUrl: './mentions.component.html',
  styleUrls: ['./mentions.component.css']
})
export class MentionsComponent implements OnInit {

  users;
 
  constructor(private http: Http) {
    http.get('http://localhost:3000/most_mentions')
        .subscribe(res => this.users = res.json());
  }

  ngOnInit() {
  }

}
