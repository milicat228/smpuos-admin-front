import { TokenService } from './../../auth/service/token.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public username: String;

  constructor(public tokenService: TokenService) {
    this.username = tokenService.getUsername();
    this.tokenService.usernameEmitter.subscribe(username => this.username = username);
  }

  ngOnInit() {
  }

  onLogout(){
    this.tokenService.signOut();
  }

}
