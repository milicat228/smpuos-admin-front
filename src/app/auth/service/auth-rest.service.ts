import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthRestService {
  url = environment.baseUrl;
  loginUrl = '/login';
  profileUrl = '/profile';
  changePasswordUrl = '/changePassword';

  constructor(private http: HttpClient) { }

  login(loginInfo): Observable<any> {
    return this.http.post(this.url + this.loginUrl, loginInfo, environment.httpOptions);
  }

  profile(): Observable<any> {
    return this.http.get(this.url + this.profileUrl);
  }

  changePassword(passwordData): Observable<any>{
      return this.http.post(this.url + this.changePasswordUrl, passwordData, environment.httpOptions);
  }
}
