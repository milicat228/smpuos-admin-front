import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NurseRestService {
  url = environment.baseUrl;
  nurseUrl = '/nurse';
  qualificationUrl = '/professionalQualification';

  constructor(private http: HttpClient) { }

  allNurses(): Observable<any> {
    return this.http.get(this.url + this.nurseUrl);
  }

  addNurse(nurse): Observable<any> {
    return this.http.post(this.url + this.nurseUrl, nurse, environment.httpOptions);
  }

  allQualifications(): Observable<any> {
    return this.http.get(this.url + this.qualificationUrl);
  }
}
