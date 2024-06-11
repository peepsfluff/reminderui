import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {

  posts: any;

  title = 'reminder';
  
  constructor(
    private httpService: ApiService,
    public router: Router

  ) {

  }

  ngOnInit() {
    //let emailID = "";

    // console.log("ngoninit app.component ");


  }




}
