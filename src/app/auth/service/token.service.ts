import { TokenPayload } from './../model/TokenPayload';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as decode from 'jwt-decode';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'username';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private username = new Subject<String>();
  public usernameEmitter = this.username.asObservable();

  constructor(public router: Router) {
    // window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.setItem(TOKEN_KEY, token);
    const tokenPayload: TokenPayload = decode(token);
    this.saveUsername(tokenPayload.sub);
  }

  signOut() {
    window.sessionStorage.clear();
    this.usernameEmitChange(null);
    this.router.navigate(['']);
  }

  public checkIsLoggedIn(): boolean {
    if (sessionStorage.getItem(TOKEN_KEY)) {
      return true;
    } else {
      return false;
    }
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUsername(username: string) {
    window.sessionStorage.setItem(USERNAME_KEY, username);
    this.usernameEmitChange(username);
  }

  public getUsername(): string {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  usernameEmitChange(username: String) {
    this.username.next(username);
  }
}
