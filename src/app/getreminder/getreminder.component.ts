import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ApiService } from '.././api.service';

export interface Posts { 
  message: string;
  ttl: number;
}

@Component({
  selector: 'app-getreminder',
  templateUrl: './getreminder.component.html',
  styleUrls: ['./getreminder.component.css']
})

export class GetreminderComponent implements OnInit{
  posts: any;
  emailID = '';
  displayedColumns: string[] = ['message', 'ttl'];
  //dataSource = ELEMENT_DATA;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private httpService: ApiService,


  ){ 
   this.posts = []
  }


  ngOnInit() {

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("getreminder componentngoninit")

    }

    getAllReminders(){
      this.httpService.getAllPosts().subscribe(
        response => {
          console.log(response)
          this.posts = response.body; 
          console.log(this.posts)
        }
      );
    }
    getReminderbyID(emailID: string){
      console.log(this.emailID)
        this.httpService.getPostsByUser(emailID).subscribe(
        response => {
          console.log(response)
          this.posts = response.body; 
          console.log(this.posts)

          this.emailID = "";
          
        }
      );
    }


}
