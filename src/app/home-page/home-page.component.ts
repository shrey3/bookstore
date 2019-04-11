import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  json: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    //let obs = this.http.get('http://localhost:8080/user/hello');
   // obs.subscribe((response) => console.log(response));
  }

}
