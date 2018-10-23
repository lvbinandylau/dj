import {Component, ElementRef, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {AppComponent} from '../app.component';
import {UserNameService} from '../user-name.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private urlLogin = AppComponent.urlLgin;
  private urlSignup = AppComponent.urlSignup;
    userName = '';
    userPWD = '';
    userPWD2 = '';
  signupMessage = '';
  private _success = new Subject<string>();
  successMessage: string;

  LoginDisplay = true;
  SignUpDisplay = false;
  SignUpSuccDisplay = false;
  SignUpErrDisplay = false;
  LoginErr = false;
  myReturn: ReturnValue;
  private urlGetName = AppComponent.urlGetName;
  loginname = '';

  constructor(
    private el: ElementRef,
    private httpClient: HttpClient,
    private router: Router,
    private usernameservice: UserNameService,
  ) {
  }

  gotoSignUp() {
    this.LoginDisplay = false;
    this.SignUpDisplay = true;
  }
  gotoSignUpSucc() {
    this.SignUpSuccDisplay = true;
    this.SignUpDisplay = false;

  }
  gotoSignUpErr() {
    this.SignUpErrDisplay = true;
    this.SignUpDisplay = false;

  }
  gotoLogin() {
    this.SignUpDisplay = false;
    this.LoginDisplay = true;
    this.SignUpSuccDisplay = false;

  }
  signup() {
    if (this.userName.trim().length > 0 && this.userPWD.trim().length > 0 && (this.userPWD.trim() === this.userPWD2.trim())) {
      this.successMessage = '111222';

      let headers_object = new HttpHeaders();
      headers_object = headers_object.set('Content-Type', 'application/x-www-form-urlencoded');
      headers_object = headers_object.set('cache-control', 'no-cache');

      const httpParams = new HttpParams()
        .set('name', this.userName)
        .set('pwd', this.userPWD);
      this.httpClient
        .post<ReturnValue>(this.urlSignup, httpParams, { headers: headers_object, withCredentials: true})
        .subscribe(resp => {
          console.log('signup:' + resp.msg);
          // 判断返回值
          if (resp.msg === 'success') {
            this.signupMessage = this.userName;
            this.gotoSignUpSucc();
            console.log('start setTimeout');
            console.log('stop setTimeout');
          } else {
            this.SignUpErrDisplay = true;
            this.signupMessage = resp.msg;
            setTimeout(() => this.SignUpErrDisplay = false, 2000);
          }
          // this.router.navigateByUrl('/');
        });
    }
  }
  login() {
    if (this.userName.trim().length > 0 && this.userPWD.trim().length > 0) {
        const AuthString = this.userName + ':' + this.userPWD;
        let headers_object = new HttpHeaders();
        headers_object = headers_object.set('Content-Type', 'application/x-www-form-urlencoded');
        // headers_object = headers_object.set('Authorization', 'Basic ' + btoa(AuthString));
        headers_object = headers_object.set('cache-control', 'no-cache');
        headers_object = headers_object.set('Upgrade-Insecure-Requests', '1');

      const httpParams = new HttpParams()
        .set('username', this.userName)
        .set('password', this.userPWD)
        .set('submit', 'Login');
        /*
        const httpParams = new HttpParams()
          .set('response_type', 'code')
          .set('state', 'lvbin')
          .set('client_id', 'testclient')
          .set('scope', 'test')
          .set('redirect_uri', 'http://localhost:8086');
        */
        this.httpClient
          .post<ReturnValue>(this.urlLogin, httpParams, { headers: headers_object, withCredentials: true})
          .subscribe(resp => {
            if (resp.msg === 'success') {
              this.LoginErr = false;
              this.getname();
            } else {
              this.LoginErr = true;
              setTimeout(() => this.LoginErr = false, 2000);
            }
          },
            error1 => {
                    console.log(error1);
            } );
    }
  }

  getname() {
    this.httpClient.get<ReturnValue>(this.urlGetName, {withCredentials: true})
      .subscribe(
        resp => {
          console.log('login:' + resp.msg);
          // this.myReturn = resp;
          this.usernameservice.setname(resp.msg);
          this.router.navigate(['/details']);
        },
        error1 => console.log('error for getname!'),
        () => { console.log('login completed'); }
      );
  }


  ngOnInit() {
  }


}

export interface ReturnValue {
  msg: string;
}
