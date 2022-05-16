import { Component, OnInit } from '@angular/core';
import { user } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private loginSV: LoginService) { }

  ngOnInit() {
    getAuth().onAuthStateChanged(async (_user) => {
      if (!_user) {
        return;
      }
      else {
        this.createUser();
      }
    })
  }

  checkUser = this.loginSV.checkUser;
  userName = this.loginSV.userName;
  _user = this.loginSV._user;

  public async login() {
    this.loginSV.login();
  }

  public async logout() {
    this.loginSV.logout();
  }

  public async checkFirstLogin() {
    this.loginSV.checkFirstLogin();
  }

  public async createUser() {
    this.loginSV.createUser();
  }
}
