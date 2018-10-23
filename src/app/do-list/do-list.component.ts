import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ReturnValue} from '../login/login.component';
import {AppComponent} from '../app.component';
import {DetailsComponent} from '../details/details.component';
import {ActivatedRoute} from '@angular/router';
import {UserNameService} from '../user-name.service';

@Component({
  selector: 'app-do-list',
  templateUrl: './do-list.component.html',
  styleUrls: ['./do-list.component.css']
})
export class DoListComponent implements OnInit {
  urlGetName = '';

  constructor(
    private httpClient: HttpClient,
    private usernameservice: UserNameService,
  ) { }


  ngOnInit() {
    this.urlGetName = this.usernameservice.getName();
    console.log('dolist:' + this.urlGetName);

  }

}
