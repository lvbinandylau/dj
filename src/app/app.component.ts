import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Component, ElementRef } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public static baseUrl = 'http://47.98.216.143';
  public static port = '12306';
  public static urlLgin = AppComponent.baseUrl + ':' + AppComponent.port + '/login';
  public static urlSignup = AppComponent.baseUrl + ':' + AppComponent.port + '/insertUser';
  public static urlGetName = AppComponent.baseUrl + ':' + AppComponent.port + '/getname';
  /*
  title = 'app';
  userName = '';
  userPWD = '';
  private urlLogin = 'http://localhost:8080/login';


  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {}

  httpHeaders.append('Content-Type', 'application/json');
  httpHeaders.append("Authorization", "Basic " + btoa("admin:admin"));

  const httpOptions = {
    headers: httpHeaders
  };
  */

  /*
  login2() {
    this.ReturnResponse().subscribe(res => {
      console.log(res);
    });
  }
  */

}

