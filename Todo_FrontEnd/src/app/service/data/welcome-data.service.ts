import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { API_URL } from '../../app.constant';


export class responsemassege {
  constructor(public message: string) {
  }
}

@Injectable({
  providedIn: 'root'
})



export class WelcomeDataService implements OnInit {
  ngOnInit(): void {

  }
  constructor(private http: HttpClient) {

  }

  // executeHalloworldBeanservicewithpath() {

  //   return this.http.get<responsemassege>(`${API_URL}/hello-world-auth`);

  // }

}
