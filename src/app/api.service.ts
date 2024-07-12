import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL = "http://localhost:8000/"
  // baseURL = "http://localhost:800/"

  constructor(private http:HttpClient) { }

  contactForm(body:any):Observable<any> {
    const url = this.baseURL+'contact';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(url, body, {headers});
  }
}
