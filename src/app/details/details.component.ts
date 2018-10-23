import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {ReturnValue} from '../login/login.component';
import {AppComponent} from '../app.component';
import { ActivatedRoute } from '@angular/router';
import {UserNameService} from '../user-name.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  loginname = '';


  constructor(
    private httpClient: HttpClient,
    private usernameservice: UserNameService,
  ) { }

  ngOnInit() {
    this.loginname = this.usernameservice.getName();
    console.log('details:' + this.loginname);
  }

}

