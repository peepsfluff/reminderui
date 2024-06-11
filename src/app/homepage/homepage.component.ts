import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { ApiService } from '.././api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})


export class HomepageComponent implements OnInit{
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private httpService: ApiService,


  ){ 
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const valFromParam = this.activeRoute.snapshot.paramMap
    console.log(valFromParam)


    }

    loadsend(): void {
      // console.log("loadsend")
      const navigationDetails: string[] = ['/send-reminder'];
  
      this.router.navigate(navigationDetails);
    }
  
    loadget(): void {
      // console.log("loadget")
      const navigationDetails: string[] = ['/get-reminder'];
  
      this.router.navigate(navigationDetails);
    }

}
