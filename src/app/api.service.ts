import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = ''; //SPECIFY API GATEWAY ENDPOIHNT HERE 


  }



  getApiHeaders() {
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'

      })
    };
    return headers
  }


  getAllPosts(): Observable<any> {
    return this.http.get<any>(this.apiUrl)

  }


  getPostsByUser(id: string): Observable<any> {
    let apiUrl = this.apiUrl + '/' + id
    console.log(apiUrl)
    return this.http.get<any>(apiUrl)
  }

  sendReminder(user_id: string, message: string, ttl: number): Observable<any> {
    const body = {
      "user_id": user_id,
      "message": message,
      "uuid": "",
      "ttl": ttl
    }


    // {
    //   "user_id": "emailaddress@gmail.com",
    //   "message": "Reminder for tennis practice @ 7:00pm",
    //   "uuid": "",
    //   "ttl": 1709871600927 
    // } 

    console.log("body", body )
    console.log("this.apiUrl", this.apiUrl)

    return this.http.post<any>(this.apiUrl, body, this.getApiHeaders());



  }

}



